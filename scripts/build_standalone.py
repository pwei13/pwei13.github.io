#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把整个站点打包成单个 HTML 文件，写入 dist/pei-lab-standalone.html。

用途：官网主页的富文本编辑器、附件上传、U 盘拷贝等场景只接受"一个文件"，
       多文件目录结构没法整体上传。打包后 CSS / JS / 新闻数据全部内联，
       双击即可打开，无需服务器，也不受 file:// 的 fetch 限制。

用法：python scripts/build_standalone.py
"""

import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "dist")
OUT = os.path.join(OUT_DIR, "pei-lab-standalone.html")


def read(rel):
    with io.open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def guard(js):
    """内联到 <script> 里时，字符串中的 </script 会提前闭合标签。"""
    return re.sub(r"</(script)", r"<\\/\1", js, flags=re.I)


def main():
    html = read("index.html")
    css = read("assets/css/site.css")
    data = read("assets/js/data.js")
    app = read("assets/js/app.js")

    news_path = os.path.join(ROOT, "data/news.json")
    if os.path.exists(news_path):
        with io.open(news_path, encoding="utf-8") as f:
            news = json.load(f)
    else:
        news = None
        print("! 未找到 data/news.json，单文件版将只含内置报道", file=sys.stderr)

    # 1) 样式内联
    html = html.replace(
        '<link rel="stylesheet" href="assets/css/site.css">',
        "<style>\n" + css + "\n</style>", 1)

    # 2) 新闻聚合数据 + 内容数据 + 应用逻辑内联
    news_js = ""
    if news:
        news_js = "window.__NEWS_DATA__ = " + json.dumps(news, ensure_ascii=False) + ";\n"
    html = html.replace(
        '<script src="assets/js/data.js"></script>',
        "<script>\n" + guard(news_js + data) + "\n</script>", 1)
    html = html.replace(
        '<script src="assets/js/app.js"></script>',
        "<script>\n" + guard(app) + "\n</script>", 1)

    if "assets/css/site.css" in html or "assets/js/" in html:
        print("! 仍有外部资源引用未替换，请检查 index.html 的标签写法", file=sys.stderr)

    if not os.path.isdir(OUT_DIR):
        os.makedirs(OUT_DIR)
    with io.open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write(html)

    print("已生成 %s（%.1f KB）" % (os.path.relpath(OUT, ROOT), os.path.getsize(OUT) / 1024.0))


if __name__ == "__main__":
    main()
