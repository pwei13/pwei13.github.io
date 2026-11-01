# 裴玮课题组 · 站点

扬州大学物理科学与技术学院（集成电路学院）裴玮课题组的课题组网站。
纯静态实现，无构建步骤、无第三方依赖、无外部 CDN，直接部署即可访问。

**线上地址：<https://pwei13.github.io/>**（GitHub Pages，仓库 `pwei13/pwei13.github.io`）

- 中英双语切换（记忆用户选择）
- 七个板块：首页 / 成员介绍 / 研究方向 / 科研成果 / 新闻动态 / 招生招聘 / 联系方式
- 响应式：桌面（≥1080）、平板（900–1080）、移动（≤900 / ≤640）
- 新闻动态支持全网与微信公众号报道的自动聚合

---

## 1. 目录结构

```
pei-lab-site/
├── index.html                 页面骨架（顶栏 / 视图容器 / 页脚）
├── assets/
│   ├── css/site.css           全部样式（设计变量集中在 :root）
│   └── js/
│       ├── data.js            内容数据层（全部中英双语）
│       └── app.js             视图渲染、路由、交互、团簇可视化
├── data/
│   └── news.json              自动聚合结果（由 scripts/fetch_news.py 生成）
├── dist/
│   └── pei-lab-standalone.html 单文件整站（由 scripts/build_standalone.py 生成）
├── embed/
│   ├── 01-入口卡片.html       挂到官网主页用的外链卡片片段
│   └── 02-iframe嵌入.html     整站内嵌片段（含自适应高度）
├── docs/
│   └── 挂到官网主页的方法.md   与教师个人主页对接的三条路线与操作步骤
└── scripts/
    ├── fetch_news.py          新闻聚合脚本（仅用标准库）
    └── build_standalone.py    打包单文件版
```

## 2. 本地预览

直接双击 `index.html` 可以浏览，但**浏览器会拦截 `file://` 下的 `fetch`**，此时新闻栏目使用内置数据，
不会读取 `data/news.json`。要验证完整行为，请起一个本地服务：

```bash
cd pei-lab-site
python -m http.server 8080
# 打开 http://localhost:8080
```

## 3. 内容维护

### 3.1 常规内容 → `assets/js/data.js`

| 字段 | 说明 |
| --- | --- |
| `profile` | 姓名、职称、单位、办公室、邮箱、ORCID、简介、履历时间线 |
| `stats` | 首页数字条（论文数、他引、h 因子等） |
| `research` | 四个研究方向：编号、标题、一句话摘要、详细论述、要点、方法标签 |
| `papers` | 论文列表，字段 `y` 年份 / `a` 作者 / `j` 期刊 / `d` 卷页或 DOI / `n` 备注 / `u` 链接 / `sel` 首页精选 / `t` 标题（仅精选需要） |
| `projects` | 科研项目：类别、经费、周期、角色、中英文题目 |
| `honors` | 荣誉与人才计划 |
| `service` | 学术兼职与审稿期刊 |
| `members` | 成员分组（研究生 / 已毕业 / 本科生），含荣誉、去向 |
| `news` | 内置新闻（同时作为 `news.json` 不可用时的回退） |
| `join` | 招生引言、分块内容、右侧概览 |

所有对外文案都是 `{ zh: "…", en: "…" }` 结构；只写 `zh` 时英文界面会显示中文原文。

**论文作者角色是自动判定的**：作者串中出现 `W. Pei*` 判为通讯作者，以 `W. Pei` 开头判为第一作者，
`W. Pei#` 判为共同一作。因此录入时请保留星号与井号。

### 3.2 界面文案 → `assets/js/app.js`

`I18N.zh` / `I18N.en` 两个对象存放按钮、栏目标题、提示语等界面文案。

### 3.3 视觉调整 → `assets/css/site.css`

顶部 `:root` 集中了配色、字号、间距变量。主色为深墨蓝 `#17334f`，辅色为金铜 `#9c6f37`，
底色为暖白 `#faf9f6`。改这三处即可整体换色。

## 4. 新闻动态：自动聚合

`scripts/fetch_news.py` 按固定关键词检索 **Bing 网页结果**与 **搜狗微信文章**，
过滤、去重、按时间倒序后写入 `data/news.json`；页面加载时优先读取该文件，与内置条目合并展示
（按标题去重）。

```bash
python scripts/fetch_news.py                 # 抓取并写入 data/news.json
python scripts/fetch_news.py --dry-run       # 只打印，不写文件
python scripts/fetch_news.py --limit 40      # 最多保留 40 条
```

**检索配置**（脚本顶部，按需修改）：

- `WEB_QUERIES` / `WECHAT_QUERIES`：检索词
- `REQUIRED_CONTEXT`：必须同时命中的机构词（默认「扬州大学」等），用于排除同名作者
- `EXCLUDE_TERMS`：已知噪声来源，命中即丢弃
- `SUBJECT_CN`：姓名

**定时执行**：Linux / macOS 用 cron，Windows 用「任务计划程序」，或放到 GitHub Actions 每日跑一次后提交。

```
# 每天 07:30 更新
30 7 * * * cd /path/to/pei-lab-site && /usr/bin/python3 scripts/fetch_news.py
```

**已知限制**（诚实说明）：

1. 搜狗微信链接带一次性 token，可能过期；如需长期可用的原文链接，应在抓取时进一步解析跳转。
2. 抓取依赖目标站点的页面结构，对方改版后解析规则需同步调整。
3. 姓名检索天然存在同名误召回，已用机构词 + 排除词收敛，但仍建议每月人工扫一眼。
4. 自动抓取的条目没有英文标题，英文界面下显示中文原标题（属原发布方标题，不做机翻）。

## 5. 部署

纯静态，把整个目录上传到任意静态托管即可（Nginx、对象存储、GitHub Pages、学校 Web 空间）。

Nginx 最小配置：

```nginx
server {
    listen 80;
    server_name lab.example.edu.cn;
    root /var/www/pei-lab-site;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
    location ~* \.(css|js|json)$ { add_header Cache-Control "public, max-age=3600"; }
}
```

页面用 hash 路由（`#/news` 等），无需服务端 rewrite；但保留 `try_files` 更稳妥。

### 5.1 与教师个人主页对接

见 [`docs/挂到官网主页的方法.md`](docs/挂到官网主页的方法.md)：先取得公网 HTTPS 地址，
再用 `embed/` 下的片段在主页栏目里挂外链卡片或整站内嵌。

### 5.2 单文件版

```bash
python scripts/build_standalone.py
# → dist/pei-lab-standalone.html（约 140 KB，CSS/JS/新闻数据全部内联）
```

打包后双击即可打开，不受 `file://` 的 `fetch` 限制；适用于只允许上传单文件的平台、邮件分发、临时演示。

### 5.3 嵌入模式

任意页面加 `?embed=1`（如 `/?embed=1#/news`）会隐藏品牌署名与页脚、只保留栏目导航，
并把内容高度通过 `postMessage` 告诉宿主页面，便于 iframe 自动撑高。

## 6. 技术说明

- 无框架、无打包、无网络字体：首屏只有 3 个请求（HTML / CSS / JS），离线亦可用。
- 路由为 hash 路由，刷新与前进后退均正常，可直接分享 `#/publications` 这样的深链。
- 首页的人物图示是一个用 SVG + `requestAnimationFrame` 实时投影的二十面体核壳团簇模型
  （M@Au₁₂），随页面切换自动停止，遵循 `prefers-reduced-motion`。
- 可访问性：跳转链接、`aria-expanded` 菜单状态、焦点可见样式、语义化标题层级。
- 打印样式已处理：打印时展开全部栏目并隐藏导航。

## 7. 数据来源

个人信息取自扬州大学教师主页（teacher.yzu.edu.cn），新闻报道链接指向原发布方
（学院与学校微信公众号、化学加、计算材料学、科匠文化、可研易绘、兰州理工大学、西北师范大学等）。
外部报道的标题与观点归原发布方所有。

成员名单与荣誉依据学院公开获奖记录整理（2023–2025），在读状态请在每学期初核对后更新
`data.js` 中的 `members` 字段。
