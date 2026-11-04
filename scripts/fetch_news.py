#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fetch_news.py — 课题组新闻聚合脚本

按固定关键词检索全网新闻与微信公众号文章，去重后按时间倒序写入 data/news.json。
页面加载时优先读取该文件；文件缺失或读取失败时，回退到 assets/js/data.js 中的内置条目。

用法：
    python scripts/fetch_news.py              # 抓取并写入 data/news.json
    python scripts/fetch_news.py --dry-run    # 只打印结果，不写文件
    python scripts/fetch_news.py --limit 40   # 最多保留 40 条

依赖：仅标准库（urllib / xml.etree / re / json）。
建议通过 cron 或 GitHub Actions 每日执行一次。
"""

import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_PATH = ROOT / "data" / "news.json"

# ---------------------------------------------------------------- 检索配置
SUBJECT_CN = "裴玮"
SUBJECT_EN = "Wei Pei"

# 关键词：命中任一即可认为与课题组相关
MUST_MATCH = ["裴玮", "Pei Wei", "Wei Pei", "pwei@yzu"]

# 同名作者不少，必须同时出现机构词，才认定为本课题组
REQUIRED_CONTEXT = ["扬州大学", "YangzhouUniversity", "pwei@yzu"]

# 明显属于其他学科/其他同名作者的内容，按需补充
EXCLUDE_TERMS = ["中国电机工程学报", "水文地质", "工程地质", "电力系统", "配电网", "矿山"]

WEB_QUERIES = [
    "裴玮 扬州大学 团簇",
    "裴玮 超原子 团簇",
    "扬州大学 裴玮 JACS",
    '"Wei Pei" Yangzhou University cluster',
]

WECHAT_QUERIES = [
    "裴玮 扬州大学",
    "裴玮 团簇",
    "裴玮 JACS",
]

# 学院/学校公众号名称中出现这些字样时，归类为「课题组」动态
GROUP_HINTS = ["扬州大学物理", "扬州大学", "物理科学与技术学院", "集成电路学院"]

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")

TZ = timezone(timedelta(hours=8))


# ---------------------------------------------------------------- 网络工具
def fetch(url, timeout=18):
    """返回响应文本；失败时抛异常，由调用方捕获。"""
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Accept-Encoding": "identity",
    })
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        raw = resp.read()
    for enc in ("utf-8", "gb18030"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", "ignore")


def strip_tags(s, limit=200):
    s = re.sub(r"<!--[\s\S]*?-->", " ", s)
    s = re.sub(r"<script[\s\S]*?</script>", " ", s, flags=re.I)
    s = re.sub(r"<style[\s\S]*?</style>", " ", s, flags=re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    s = unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s[:limit]


def guess_date(*texts):
    """从标题/摘要/URL 中猜测发布日期。"""
    for t in texts:
        if not t:
            continue
        m = re.search(r"(20\d{2})[-/年\.](\d{1,2})[-/月\.](\d{1,2})", t)
        if m:
            return "%04d-%02d-%02d" % tuple(int(x) for x in m.groups())
        m = re.search(r"/(20\d{2})/(\d{2})(\d{2})/", t)
        if m:
            return "%s-%s-%s" % m.groups()
    return ""


def norm_date(value):
    """尽量把各种时间格式转成 YYYY-MM-DD。"""
    if not value:
        return ""
    value = value.strip()
    m = re.match(r"(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})", value)
    if m:
        return "%04d-%02d-%02d" % tuple(int(x) for x in m.groups())
    try:
        dt = parsedate_to_datetime(value)
        if dt:
            return dt.date().isoformat()
    except Exception:
        pass
    for fmt in ("%Y-%m-%dT%H:%M:%S", "%Y-%m-%d %H:%M:%S"):
        try:
            return datetime.strptime(value[:19], fmt).date().isoformat()
        except Exception:
            continue
    return ""


# ---------------------------------------------------------------- 来源抓取
def fetch_rss(url):
    """通用 RSS / Atom 解析，返回 [{title, link, desc, date}]"""
    try:
        xml = fetch(url)
    except Exception as exc:
        print("  ! RSS 失败 %s (%s)" % (url.split("?")[0][:48], exc), file=sys.stderr)
        return []
    out = []
    try:
        root = ET.fromstring(xml.encode("utf-8", "ignore"))
    except Exception:
        return []
    for node in root.iter():
        tag = node.tag.split("}")[-1]
        if tag not in ("item", "entry"):
            continue
        item = {"title": "", "link": "", "desc": "", "date": ""}
        for child in node:
            name = child.tag.split("}")[-1]
            text = (child.text or "").strip()
            if name == "title":
                item["title"] = strip_tags(text, 300)
            elif name == "link":
                item["link"] = text or child.attrib.get("href", "")
            elif name in ("description", "summary", "content"):
                item["desc"] = strip_tags(text or "", 220)
            elif name in ("pubDate", "published", "updated", "date"):
                item["date"] = norm_date(text)
        if item["title"] and item["link"]:
            out.append(item)
    return out


def search_web(query, limit=20):
    """Bing 网页检索，解析 b_algo 结果块。"""
    url = "https://www.bing.com/search?" + urllib.parse.urlencode(
        {"q": query, "count": limit, "setlang": "zh-CN"})
    try:
        html = fetch(url)
    except Exception as exc:
        print("  ! 网页检索失败 %s (%s)" % (query[:24], exc), file=sys.stderr)
        return []
    items = []
    for block in re.findall(r'<li class="b_algo"[\s\S]*?</li>', html):
        m = re.search(r'<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)</a>', block)
        if not m:
            continue
        link, title = m.group(1), strip_tags(m.group(2), 300)
        if not link.startswith("http"):
            continue
        desc = ""
        d = re.search(r'<p[^>]*>([\s\S]*?)</p>', block)
        if d:
            desc = strip_tags(d.group(1), 220)
        items.append({"title": title, "link": link, "desc": desc,
                      "date": guess_date(title, desc, link)})
        if len(items) >= limit:
            break
    print("  · web  %-32s %d 条" % (query[:32], len(items)))
    return items


def search_wechat(query, limit=12):
    """搜狗微信检索。站点有反爬，失败时静默返回空列表。"""
    url = "https://weixin.sogou.com/weixin?" + urllib.parse.urlencode(
        {"type": 2, "query": query, "ie": "utf8"})
    try:
        html = fetch(url)
    except Exception as exc:
        print("  ! 微信检索失败 %s (%s)" % (query, exc), file=sys.stderr)
        return []
    items = []
    for block in re.split(r'<li id="sogou_vr_\d+_box_\d+"', html)[1:]:
        m = re.search(r'<h3>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)</a>', block)
        if not m:
            continue
        link, title = m.group(1).replace("&amp;", "&"), strip_tags(m.group(2), 300)
        if not link.startswith("http"):
            link = "https://weixin.sogou.com" + link
        acc = re.search(r'class="all-time-y2">([\s\S]*?)</span>', block)
        info = re.search(r'class="txt-info"[^>]*>([\s\S]*?)</p>', block)
        ts = re.search(r"timeConvert\('(\d+)'\)", block)
        date = ""
        if ts:
            date = datetime.fromtimestamp(int(ts.group(1)), TZ).date().isoformat()
        items.append({
            "title": title,
            "link": link,
            "desc": strip_tags(info.group(1), 220) if info else "",
            "date": date or guess_date(title, link),
            "account": strip_tags(acc.group(1), 60) if acc else "",
        })
        if len(items) >= limit:
            break
    print("  · wx   %-32s %d 条" % (query[:32], len(items)))
    return items


# ---------------------------------------------------------------- 归类与清洗
def relevant(item):
    """同名作者较多：必须同时命中姓名与机构词，并排除已知噪声来源。"""
    blob = (item.get("title", "") + " " + item.get("desc", "") + " " + item.get("account", "")).replace(" ", "")
    if any(k in blob for k in EXCLUDE_TERMS):
        return False
    has_name = (SUBJECT_CN in blob) or ("WeiPei" in blob) or ("PeiWei" in blob)
    if not has_name:
        return False
    return any(k in blob for k in REQUIRED_CONTEXT)


def classify(title, desc, account=""):
    blob = title + desc
    if any(k in blob for k in ("奖学金", "获奖", "表彰", "人才计划", "荣誉", "特等奖", "三好学生")):
        return "award"
    if any(k in blob for k in ("学术交流", "报告", "讲座", "来访", "论坛", "研讨", "应邀")):
        return "talk"
    if any(k in account for k in GROUP_HINTS):
        return "group"
    return "media"


def platform_of(item):
    link = item.get("link", "")
    if "weixin" in link or "mp.weixin" in link:
        return "wechat"
    return "web"


def to_entry(item):
    title = item["title"].strip()
    desc = item.get("desc", "").strip()
    # 检索摘要常从半句开始，清掉句首的 ASCII 碎片（如 "B在线发表了…"）
    if desc and not re.match(r"[\u4e00-\u9fa5]", desc):
        desc = re.sub(r"^[A-Za-z0-9.\s]{1,12}(?=[\u4e00-\u9fa5])", "", desc).strip()
    date = item.get("date") or ""
    undated = not date
    if undated:
        date = datetime.now(TZ).date().isoformat()
    account = item.get("account", "") or urllib.parse.urlparse(item["link"]).netloc
    if account and platform_of(item) == "wechat" and not account.endswith("（微信公众号）"):
        account = account + "（微信公众号）"
    entry = {
        "date": date,
        "type": classify(title, desc, account),
        "pl": platform_of(item),
        "src": {"zh": account or "网络", "en": account or "Web"},
        "t": {"zh": title, "en": title},
        "d": {"zh": desc, "en": desc} if desc else {"zh": "", "en": ""},
        "u": item["link"],
    }
    if undated:
        entry["undated"] = True
    return entry


def key_of(entry):
    """搜狗链接带一次性 token，故以标题 + 日期作为去重键。"""
    title = re.sub(r"\s+", "", entry.get("t", {}).get("zh") or "")[:30]
    return (title, entry.get("date", ""))


# ---------------------------------------------------------------- 主流程
def main():
    ap = argparse.ArgumentParser(description="聚合课题组相关报道")
    ap.add_argument("--out", default=str(OUT_PATH))
    ap.add_argument("--limit", type=int, default=60)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    print("== 检索全网新闻 ==")
    web_items = []
    for q in WEB_QUERIES:
        web_items += search_web(q)
        time.sleep(0.8)

    print("== 检索微信公众号 ==")
    wx_items = []
    for q in WECHAT_QUERIES:
        wx_items += search_wechat(q)
        time.sleep(1.2)

    raw = web_items + wx_items
    hits = [x for x in raw if relevant(x)]
    print("\n命中 %d 条 / 共 %d 条原始结果" % (len(hits), len(raw)))

    fresh = [to_entry(x) for x in hits]

    # 与已有数据合并，保留历史条目
    existing = []
    out_path = Path(args.out)
    if out_path.exists():
        try:
            existing = json.loads(out_path.read_text(encoding="utf-8")).get("items", [])
        except Exception:
            existing = []

    merged, seen = [], set()
    for entry in fresh + existing:
        k = key_of(entry)
        if k in seen:
            continue
        seen.add(k)
        merged.append(entry)

    # 回填已有条目的 pin，保证置顶标记不被新一轮抓取冲掉
    pin_map = {key_of(e): e.get("pin") for e in existing if e.get("pin")}
    for entry in merged:
        pin = pin_map.get(key_of(entry))
        if pin is not None:
            entry["pin"] = pin

    merged.sort(key=lambda e: (e.get("date", ""), 0 if e.get("undated") else 1), reverse=True)
    merged = merged[:args.limit]

    payload = {
        "updated": datetime.now(TZ).date().isoformat(),
        "generated": datetime.now(TZ).isoformat(timespec="seconds"),
        "subject": SUBJECT_CN,
        "queries": {"web": WEB_QUERIES, "wechat": WECHAT_QUERIES},
        "items": merged,
    }

    if args.dry_run:
        print(json.dumps(payload, ensure_ascii=False, indent=2)[:4000])
        return

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print("已写入 %s（%d 条）" % (out_path, len(merged)))


if __name__ == "__main__":
    main()
