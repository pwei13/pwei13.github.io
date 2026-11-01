/* ==========================================================================
   app.js — 视图路由、双语文案渲染、交互与可视化
   ========================================================================== */
(function () {
  'use strict';

  var D = window.LAB;
  var VIEWS = ['home', 'team', 'research', 'publications', 'news', 'join', 'contact'];

  /* ---------------- 界面文案（内容文案在 data.js） ---------------- */
  var I18N = {
    zh: {
      'brand': '裴玮课题组',
      'brandSub': '团簇物理与计算材料 · 扬州大学',
      'nav.home': '首页', 'nav.team': '成员介绍', 'nav.research': '研究方向',
      'nav.pubs': '科研成果', 'nav.news': '新闻动态', 'nav.join': '招生招聘', 'nav.contact': '联系方式',

      'hero.kicker': '团簇物理 · 计算材料学',
      'hero.lead': '我们关心原子精确的金属团簇：它的超原子壳层如何形成，激发态能量如何在飞秒尺度耗散，以及把单个团簇接入电极后，能做出什么样的器件。',
      'hero.cta1': '研究方向', 'hero.cta2': '招生信息',
      'hero.f1': '研究领域', 'hero.f1v': '团簇物理 · 计算材料',
      'hero.f2': '在招学生', 'hero.f2v': '硕士 / 博士',
      'hero.f3': '办公室', 'hero.f3v': '物理楼 318 室',

      'sec.focus.k': 'Research focus', 'sec.focus.t': '四个方向，一条主线',
      'sec.focus.l': '结构决定电子结构，电子结构决定激发态，激发态最终决定器件功能。四个方向并非并列，而是同一条链条上的四段。',
      'sec.pubs.k': 'Selected work', 'sec.pubs.t': '近期代表性论文',
      'sec.pubs.l': '完整列表收录 2018 年以来 64 篇论文，可按年份、作者角色与关键词检索。',
      'sec.news.k': 'Latest', 'sec.news.t': '课题组动态',
      'sec.news.l': '论文发表、学术交流与成员获奖，同时汇集全网及微信公众号的相关报道。',
      'more': '查看全部', 'view.all': '进入完整列表',

      'team.k': 'People', 'team.t': '课题组成员',
      'team.l': '一个不大的组：讨论充分，动手要快，写东西要清楚。',
      'team.pi': '课题组负责人',
      'team.note': '成员名单、荣誉与去向依据学院公开获奖记录整理（2023–2025）。在读状态与最新成员信息，请以课题组公告为准。',
      'team.people': '人',

      'research.k': 'Research', 'research.t': '研究方向',
      'research.l': '我们不做孤立的计算：每一个体系都对应一个可以被实验检验的物理问题。',
      'research.pipeline': '研究链条',
      'research.methods': '方法与体系',
      'research.intro': '课题组以配体保护的原子精确金属团簇为核心体系。这类团簇兼具分子的确定性与固体的大面积电子态，是研究量子尺寸效应如何逐步过渡到块体行为的理想模型，也是构筑单分子器件的天然基元。',

      'pubs.k': 'Publications', 'pubs.t': '科研成果',
      'pubs.l': '论文、项目与学术服务。论文列表标注第一作者、通讯作者与本科生一作工作。',
      'pubs.tab1': '论文', 'pubs.tab2': '科研项目', 'pubs.tab3': '荣誉与服务',
      'pubs.search': '检索作者、期刊或年份',
      'pubs.all': '全部', 'pubs.first': '第一作者', 'pubs.corr': '通讯作者', 'pubs.coop': '合作',
      'pubs.count': '篇', 'pubs.unit': '项',
      'pubs.empty': '没有匹配的条目，请调整筛选条件。',
      'pubs.honors': '荣誉与人才计划', 'pubs.service': '学术服务', 'pubs.review': '担任审稿人',
      'pubs.role': '主持',

      'news.k': 'News', 'news.t': '新闻动态',
      'news.l': '课题组进展、媒体报道与学术活动。报道来源覆盖学院与学校公众号、学术类微信公众号及高校新闻网。',
      'news.all': '全部', 'news.group': '课题组', 'news.media': '媒体报道',
      'news.talk': '学术交流', 'news.award': '荣誉奖励',
      'news.updated': '自动聚合 · 更新于',
      'news.aggTitle': '关于本栏目的信息来源',
      'news.aggDesc': '本栏目由聚合脚本按固定关键词（课题组负责人姓名、单位、团簇与超原子相关主题）定期检索全网新闻与微信公众号文章，去重后按时间排序写入 data/news.json；页面加载时优先读取该文件，读取失败则回退到内置数据。外部报道的标题与观点归原发布方所有。',
      'news.aggRun': '运行 fetch_news.py 可手动刷新',
      'news.empty': '当前筛选下暂无条目。',

      'join.k': 'Join us', 'join.t': '招生招聘',
      'join.l': '我们更看重好奇心与耐心，而不是你已经会用什么软件。',
      'join.aside': '招生概览', 'join.cta': '发送申请邮件',

      'contact.k': 'Contact', 'contact.t': '联系方式',
      'contact.l': '欢迎讨论合作、来访交流，或仅仅来问一个问题。',
      'contact.email': '电子邮箱', 'contact.office': '办公地点', 'contact.address': '通信地址',
      'contact.tel': '学院电话', 'contact.post': '邮编', 'contact.links': '学术档案',
      'contact.mapTitle': '位置', 'contact.mapNote': '示意图，非实际比例。来访请提前邮件约定时间。',

      'footer.about': '扬州大学物理科学与技术学院裴玮课题组，研究团簇物理与计算材料学。',
      'footer.nav': '导航', 'footer.contact': '联系',
      'footer.rights': '© 2026 裴玮课题组 · 扬州大学物理科学与技术学院',
      'footer.note': '本站内容依据公开信息整理，如有疏漏请联系更正。',
      'footer.updated': '最后更新'
    },
    en: {
      'brand': 'Pei Lab',
      'brandSub': 'Cluster Physics & Computational Materials · Yangzhou University',
      'nav.home': 'Home', 'nav.team': 'People', 'nav.research': 'Research',
      'nav.pubs': 'Publications', 'nav.news': 'News', 'nav.join': 'Join us', 'nav.contact': 'Contact',

      'hero.kicker': 'Cluster physics · Computational materials',
      'hero.lead': 'We study atomically precise metal clusters: how their superatomic shells form, how excited-state energy dissipates on a femtosecond timescale, and what kind of device a single cluster becomes once it is wired between two electrodes.',
      'hero.cta1': 'Research', 'hero.cta2': 'Open positions',
      'hero.f1': 'Fields', 'hero.f1v': 'Clusters · Computation',
      'hero.f2': 'Recruiting', 'hero.f2v': 'M.Sc. / Ph.D.',
      'hero.f3': 'Office', 'hero.f3v': 'Room 318, Physics Building',

      'sec.focus.k': 'Research focus', 'sec.focus.t': 'Four directions, one thread',
      'sec.focus.l': 'Structure sets the electronic structure, the electronic structure sets the excited state, and the excited state ultimately sets device function. The four directions are four segments of a single chain.',
      'sec.pubs.k': 'Selected work', 'sec.pubs.t': 'Recent representative papers',
      'sec.pubs.l': 'The full list covers 64 papers since 2018, searchable by year, author role and keyword.',
      'sec.news.k': 'Latest', 'sec.news.t': 'Group news',
      'sec.news.l': 'Publications, seminars and student awards, together with coverage from the web and WeChat academic accounts.',
      'more': 'View all', 'view.all': 'Open full list',

      'team.k': 'People', 'team.t': 'Group members',
      'team.l': 'A small group: discuss thoroughly, build quickly, write clearly.',
      'team.pi': 'Principal investigator',
      'team.note': 'Names, awards and destinations are compiled from publicly available school records (2023–2025). For current membership, please refer to the group\u2019s latest announcements.',
      'team.people': 'people',

      'research.k': 'Research', 'research.t': 'Research directions',
      'research.l': 'We do not run calculations in isolation: every system corresponds to a physical question that experiments can test.',
      'research.pipeline': 'Research pipeline',
      'research.methods': 'Methods & systems',
      'research.intro': 'The group centres on ligand-protected, atomically precise metal clusters. These clusters combine molecular determinacy with bulk-like delocalised electronic states, making them ideal models for how quantum size effects give way to bulk behaviour — and natural building blocks for single-molecule devices.',

      'pubs.k': 'Publications', 'pubs.t': 'Research output',
      'pubs.l': 'Papers, projects and academic service. Author roles are marked for first-author, corresponding-author and undergraduate-led work.',
      'pubs.tab1': 'Papers', 'pubs.tab2': 'Projects', 'pubs.tab3': 'Honours & service',
      'pubs.search': 'Search authors, journal or year',
      'pubs.all': 'All', 'pubs.first': 'First author', 'pubs.corr': 'Corresponding', 'pubs.coop': 'Co-author',
      'pubs.count': 'papers', 'pubs.unit': 'projects',
      'pubs.empty': 'No matching entries. Try adjusting the filters.',
      'pubs.honors': 'Honours & talent programmes', 'pubs.service': 'Academic service', 'pubs.review': 'Reviewer for',
      'pubs.role': 'PI',

      'news.k': 'News', 'news.t': 'News & coverage',
      'news.l': 'Group progress, media coverage and academic visits, gathered from school and university accounts, academic WeChat channels and university news pages.',
      'news.all': 'All', 'news.group': 'Group', 'news.media': 'Media',
      'news.talk': 'Visits', 'news.award': 'Awards',
      'news.updated': 'Auto-aggregated · updated',
      'news.aggTitle': 'Where this content comes from',
      'news.aggDesc': 'A scheduled script searches the web and WeChat academic accounts using fixed keywords (PI name, affiliation, cluster and superatom topics), de-duplicates the results and writes them, in reverse chronological order, to data/news.json. The page reads that file first and falls back to embedded data if it is unavailable. Titles and views in external coverage remain those of the original publishers.',
      'news.aggRun': 'Run fetch_news.py to refresh manually',
      'news.empty': 'No entries under the current filter.',

      'join.k': 'Join us', 'join.t': 'Open positions',
      'join.l': 'Curiosity and patience matter more to us than the software you already know.',
      'join.aside': 'At a glance', 'join.cta': 'Write to us',

      'contact.k': 'Contact', 'contact.t': 'Contact',
      'contact.l': 'For collaboration, a visit, or simply a question — you are welcome to write.',
      'contact.email': 'Email', 'contact.office': 'Office', 'contact.address': 'Address',
      'contact.tel': 'School office', 'contact.post': 'Postcode', 'contact.links': 'Profiles',
      'contact.mapTitle': 'Location', 'contact.mapNote': 'Schematic, not to scale. Please arrange a time by email before visiting.',

      'footer.about': 'Pei Group, School of Physical Science and Technology, Yangzhou University — cluster physics and computational materials science.',
      'footer.nav': 'Sections', 'footer.contact': 'Contact',
      'footer.rights': '© 2026 Pei Lab · School of Physical Science and Technology, Yangzhou University',
      'footer.note': 'Compiled from publicly available information. Please write to us with any correction.',
      'footer.updated': 'Last updated'
    }
  };

  var state = {
    lang: localStorage.getItem('lab-lang') === 'en' ? 'en' : 'zh',
    view: 'home',
    pubTab: 'papers',
    pubFilter: 'all',
    pubYear: 'all',
    pubQuery: '',
    newsFilter: 'all',
    news: D.news.slice(),
    newsSource: 'embedded',
    newsUpdated: D.meta.updated,
    clusterReady: false,
    clusterRaf: null
  };

  /* ---------------- 工具 ---------------- */
  function pick(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return o[state.lang] != null ? o[state.lang] : (o.zh || '');
  }
  function t(k) {
    var d = I18N[state.lang] || I18N.zh;
    return d[k] != null ? d[k] : (I18N.zh[k] || k);
  }
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }

  var ARROW = '<svg class="btn__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M1 6h9M6.6 2.6 10 6l-3.4 3.4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var IC_WECHAT = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.1 3C5.2 3 2 5.6 2 8.8c0 1.8 1 3.4 2.7 4.5l-.7 2.1 2.4-1.2c.8.2 1.6.4 2.4.4h.6a5.3 5.3 0 0 1-.2-1.4c0-3 2.9-5.4 6.5-5.4h.6C15.7 5 12.7 3 9.1 3Zm-2.4 3.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm4.8 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"/><path d="M22 13.2c0-2.6-2.6-4.7-5.8-4.7s-5.8 2.1-5.8 4.7 2.6 4.7 5.8 4.7c.7 0 1.3-.1 1.9-.3l2 1-.6-1.7c1.5-.9 2.5-2.2 2.5-3.7Zm-7.7-1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm3.8 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"/></svg>';
  var IC_WEB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.4 3.6 5.4 3.6 9s-1.2 6.6-3.6 9c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z"/></svg>';

  function secHead(kickerKey, title, lead, extra) {
    return '<div class="sec-head">' +
      '<div class="sec-head__main">' +
      '<p class="kicker">' + t(kickerKey) + '</p>' +
      '<h2>' + title + '</h2>' +
      (lead ? '<p class="lead">' + lead + '</p>' : '') +
      '</div>' + (extra || '') + '</div>';
  }

  /* ---------------- 首页 ---------------- */
  function viewHome() {
    state.clusterReady = false;
    var p = D.profile;

    var stats = D.stats.map(function (s) {
      return '<div class="stat"><b>' + s.n + (s.suffix ? '<i>' + s.suffix + '</i>' : '') + '</b>' +
        '<div><span>' + pick({ zh: s.zh, en: s.en }) + '</span><em>' + pick(s.note) + '</em></div></div>';
    }).join('');

    var focus = D.research.map(function (r, i) {
      return '<article class="card card--research">' +
        '<span class="card__no">' + r.idx + ' / ' + pick(r.sub) + '</span>' +
        '<h3>' + pick(r.title) + '</h3>' +
        '<p>' + pick(r.short || r.lead) + '</p>' +
        '<div class="card__more"><a href="#/research">' + t('more') + ' ' + ARROW + '</a></div>' +
        '</article>';
    }).join('');

    var sel = D.papers.filter(function (x) { return x.sel; });
    var miniPubs = sel.map(function (x) {
      return '<a class="mini-pub" href="' + (x.u || '#/publications') + '"' + (x.u ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<span class="mini-pub__j">' + x.j + '</span>' +
        '<span><span class="mini-pub__t">' + (x.t || '') + '</span>' +
        '<span class="mini-pub__a">' + x.a.replace(/W\. Pei/g, '<b>W. Pei</b>') + (x.d ? ' · ' + x.d : '') + '</span></span>' +
        '<span class="mini-pub__y">' + x.y + '</span></a>';
    }).join('');

    var latest = state.news.slice(0, 3).map(function (n) {
      return '<article class="news-item">' + newsDate(n) +
        '<div>' + newsTitle(n) + newsDesc(n) + newsSrc(n) + '</div>' +
        '<div class="news-item__kind">' + kindBadge(n.type) + '</div></article>';
    }).join('');

    return '<div class="hero"><div class="wrap"><div class="hero__grid">' +
      '<div>' +
      '<p class="kicker">' + t('hero.kicker') + '</p>' +
      '<h1 class="hero__name">' + pick(p.name) + '<span>' + (state.lang === 'zh' ? p.nameEn : p.name.zh) + '</span></h1>' +
      '<div class="hero__role"><b>' + pick(p.role) + '</b><span>' + pick(p.discipline) + '</span></div>' +
      '<p class="hero__affil">' + pick(p.affil) + '</p>' +
      '<p class="hero__lead">' + t('hero.lead') + '</p>' +
      '<div class="hero__actions">' +
      '<a class="btn" href="#/research">' + t('hero.cta1') + ARROW + '</a>' +
      '<a class="btn btn--ghost" href="#/join">' + t('hero.cta2') + '</a></div>' +
      '<dl class="hero__facts">' +
      '<div><dt>' + t('hero.f1') + '</dt><dd>' + t('hero.f1v') + '</dd></div>' +
      '<div><dt>' + t('hero.f2') + '</dt><dd>' + t('hero.f2v') + '</dd></div>' +
      '<div><dt>' + t('hero.f3') + '</dt><dd>' + t('hero.f3v') + '</dd></div>' +
      '</dl></div>' +
      '<div class="hero__visual"><div class="cluster-box">' +
      '<svg id="cluster" viewBox="0 0 420 420" role="img" aria-label="M@Au12 superatomic core-shell cluster model"></svg>' +
      '<span class="cluster-cap">FIG. 1 — <i>M@Au₁₂</i> core–shell cluster</span>' +
      '</div></div></div></div>' +
      '<div class="statbar"><div class="wrap"><div class="statbar__grid">' + stats + '</div></div></div></div>' +

      '<div class="wrap"><section class="sec">' +
      secHead('sec.focus.k', t('sec.focus.t'), t('sec.focus.l')) +
      '<div class="grid grid--4">' + focus + '</div></section>' +

      '<section class="sec"><div class="sec-head"><div class="sec-head__main">' +
      '<p class="kicker">' + t('sec.pubs.k') + '</p><h2>' + t('sec.pubs.t') + '</h2>' +
      '<p class="lead">' + t('sec.pubs.l') + '</p></div>' +
      '<a class="link-arrow" href="#/publications">' + t('view.all') + '</a></div>' +
      '<div class="mini-pubs">' + miniPubs + '</div></section>' +

      '<section class="sec"><div class="sec-head"><div class="sec-head__main">' +
      '<p class="kicker">' + t('sec.news.k') + '</p><h2>' + t('sec.news.t') + '</h2>' +
      '<p class="lead">' + t('sec.news.l') + '</p></div>' +
      '<a class="link-arrow" href="#/news">' + t('more') + '</a></div>' +
      '<div class="news-list">' + latest + '</div></section>' +

      '<section class="sec sec--tight"><div class="cta-band">' +
      '<div><p class="kicker">Join us</p><h3>' + t('join.t') + '</h3><p>' + pick(D.join.intro).slice(0, 96) + '…</p></div>' +
      '<a class="btn" href="#/join">' + t('hero.cta2') + ARROW + '</a></div></section>' +
      '</div>';
  }

  /* ---------------- 成员 ---------------- */
  function viewTeam() {
    var p = D.profile;
    var initials = state.lang === 'zh' ? pick(p.name).charAt(0) : 'WP';

    var groups = D.members.map(function (g) {
      var people = g.people.map(function (m) {
        var av = state.lang === 'zh' ? pick({ zh: m.zh, en: m.en }).charAt(0) : m.en.split(' ').map(function (w) { return w.charAt(0); }).join('');
        var notes = m.notes.map(function (n) { return '<li>' + pick(n) + '</li>'; }).join('');
        return '<article class="member">' +
          '<div class="member__av">' + av + '</div>' +
          '<div class="member__body"><h4>' + pick({ zh: m.zh, en: m.en }) + '</h4>' +
          '<p class="member__role">' + pick(m.role) + '</p>' +
          (m.to ? '<p class="member__to">→ ' + pick(m.to) + '</p>' : '') +
          '<ul class="member__notes">' + notes + '</ul></div></article>';
      }).join('');

      var pad = (3 - (g.people.length % 3)) % 3;
      for (var gi = 0; gi < pad; gi++) people += '<div class="member member--ghost" aria-hidden="true"></div>';

      return '<div class="member-group">' +
        '<div class="member-group__head"><h3>' + pick(g.title) + '</h3>' +
        '<span>' + pick(g.note) + '</span><b>' + g.people.length + ' ' + t('team.people') + '</b></div>' +
        '<div class="grid grid--3">' + people + '</div></div>';
    }).join('');

    var timeline = p.timeline.map(function (x) {
      return '<li><span>' + x.t + '</span><div><b>' + pick({ zh: x.zh, en: x.en }) + '</b>' +
        '<div class="small muted">' + pick(x.place) + '</div></div></li>';
    }).join('');

    return '<div class="wrap">' + secHead('team.k', t('team.t'), t('team.l')) +
      '<div class="pi-card">' +
      '<div class="pi-card__side"><div class="pi-avatar"><b>' + initials + '</b></div>' +
      '<h3>' + pick(p.name) + '</h3><p>' + pick(p.role) + '</p>' +
      '<p style="margin-top:4px">' + pick(p.group) + '</p>' +
      '<div class="links"><a href="mailto:' + p.email + '">' + p.email + '</a>' +
      '<a href="' + p.orcidUrl + '" target="_blank" rel="noopener">ORCID ' + p.orcid + '</a>' +
      '<a href="' + p.rgUrl + '" target="_blank" rel="noopener">ResearchGate</a></div></div>' +
      '<div class="pi-card__body"><p class="lead-lg">' + pick(p.intro[0]) + '</p>' +
      '<p>' + pick(p.intro[1]) + '</p>' +
      '<ul class="honor-list honor-list--time" style="margin-top:28px">' + timeline + '</ul></div></div>' +
      '<div class="notice" style="margin-bottom:48px"><span>' + t('team.note') + '</span></div>' +
      groups + '</div>';
  }

  /* ---------------- 研究方向 ---------------- */
  function viewResearch() {
    var pipe = D.pipeline.map(function (x, i) {
      return '<li><i>' + String(i + 1).padStart(2, '0') + '</i><div><b>' + pick(x) + '</b><span>' + pick(x.d) + '</span></div></li>';
    }).join('');

    var dirs = D.research.map(function (r) {
      var pts = r.points.map(function (x) { return '<li>' + pick(x) + '</li>'; }).join('');
      var tags = r.tags.map(function (x) { return '<span class="tag">' + x + '</span>'; }).join('');
      return '<article class="dir" id="dir-' + r.id + '">' +
        '<div class="dir__aside"><span class="idx">' + r.idx + '</span><h3>' + pick(r.title) + '</h3>' +
        '<p>' + pick(r.sub) + '</p></div>' +
        '<div class="dir__body"><p>' + pick(r.lead) + '</p>' +
        '<ul class="dir__points">' + pts + '</ul>' +
        '<div class="tags">' + tags + '</div></div></article>';
    }).join('');

    return '<div class="wrap">' + secHead('research.k', t('research.t'), t('research.l')) +
      '<div class="research-intro">' +
      '<div><p class="lead-lg">' + t('research.intro') + '</p>' +
      '<p class="small muted" style="margin-top:20px">' + t('research.methods') + '：DFT / TDDFT · AIMD · NAMD · NEGF · CASSCF · ' +
      'VASP · Gaussian · QuantumATK</p></div>' +
      '<aside class="pipeline"><p class="pipeline__title">' + t('research.pipeline') + '</p><ol>' + pipe + '</ol></aside>' +
      '</div>' + dirs + '</div>';
  }

  /* ---------------- 论文 ---------------- */
  function peiRole(a) {
    return {
      corr: /W\. Pei\*/.test(a),
      cofirst: /W\. Pei\s*#/.test(a),
      first: /^W\. Pei[#*]?,/.test(a) || /^W\. Pei[#*]?$/.test(a)
    };
  }

  function filteredPapers() {
    var q = state.pubQuery.trim().toLowerCase();
    return D.papers.filter(function (x) {
      var r = peiRole(x.a);
      if (state.pubFilter === 'first' && !r.first) return false;
      if (state.pubFilter === 'corr' && !r.corr) return false;
      if (state.pubFilter === 'coop' && (r.first || r.corr || r.cofirst)) return false;
      if (state.pubYear !== 'all' && String(x.y) !== state.pubYear) return false;
      if (q) {
        var hay = (x.a + ' ' + x.j + ' ' + x.y + ' ' + (x.d || '')).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function pubListHTML() {
    var list = filteredPapers();
    if (!list.length) return '<p class="small muted" style="padding:36px 0">' + t('pubs.empty') + '</p>';

    var years = [];
    list.forEach(function (x) { if (years.indexOf(x.y) === -1) years.push(x.y); });
    years.sort(function (a, b) { return b - a; });

    return years.map(function (y) {
      var rows = list.filter(function (x) { return x.y === y; }).map(function (x) {
        var r = peiRole(x.a);
        var badges = '';
        if (r.first) badges += '<span class="badge badge--first">' + (state.lang === 'zh' ? '第一作者' : 'First') + '</span>';
        if (r.corr) badges += '<span class="badge badge--corr">' + (state.lang === 'zh' ? '通讯作者' : 'Corresponding') + '</span>';
        if (r.cofirst && !r.first) badges += '<span class="badge">' + (state.lang === 'zh' ? '共同一作' : 'Co-first') + '</span>';
        if (x.n) badges += '<span class="badge badge--ug">' + x.n + '</span>';
        return '<article class="pub"><div>' +
          '<p class="pub__a">' + x.a.replace(/W\. Pei/g, '<b>W. Pei</b>') + '</p>' +
          '<p class="pub__r"><em>' + x.j + '</em>' + (x.d ? ', ' + x.d : '') +
          (x.u ? ' · <a href="' + x.u + '" target="_blank" rel="noopener">DOI</a>' : '') + '</p>' +
          '</div><div class="pub__badges">' + badges + '</div></article>';
      }).join('');
      return '<div class="yearblock"><div class="yearblock__h"><b>' + y + '</b><i></i><em>' +
        list.filter(function (x) { return x.y === y; }).length + ' ' + t('pubs.count') + '</em></div>' + rows + '</div>';
    }).join('');
  }

  function viewPubs() {
    var tabs = [['papers', t('pubs.tab1')], ['projects', t('pubs.tab2')], ['honors', t('pubs.tab3')]]
      .map(function (x) {
        return '<button type="button" data-pubtab="' + x[0] + '"' + (state.pubTab === x[0] ? ' class="is-on"' : '') + '>' + x[1] + '</button>';
      }).join('');

    var body = '';
    if (state.pubTab === 'papers') {
      var counts = { all: D.papers.length, first: 0, corr: 0, coop: 0 };
      D.papers.forEach(function (x) {
        var r = peiRole(x.a);
        if (r.first) counts.first++;
        if (r.corr) counts.corr++;
        if (!r.first && !r.corr && !r.cofirst) counts.coop++;
      });
      var chips = [['all', t('pubs.all')], ['first', t('pubs.first')], ['corr', t('pubs.corr')], ['coop', t('pubs.coop')]]
        .map(function (x) {
          return '<button type="button" class="chip' + (state.pubFilter === x[0] ? ' is-on' : '') + '" data-pubfilter="' + x[0] + '">' +
            x[1] + ' <span style="opacity:.6">' + counts[x[0]] + '</span></button>';
        }).join('');

      var years = [];
      D.papers.forEach(function (x) { if (years.indexOf(x.y) === -1) years.push(x.y); });
      years.sort(function (a, b) { return b - a; });
      var ychips = '<span class="chip-label">' + (state.lang === 'zh' ? '年份' : 'Year') + '</span>' +
        years.map(function (y) {
          return '<button type="button" class="chip' + (state.pubYear === String(y) ? ' is-on' : '') + '" data-pubyear="' + y + '">' + y + '</button>';
        }).join('');

      body = '<div class="chips">' + chips + '</div><div class="chips" style="padding-top:4px">' + ychips + '</div>' +
        '<div class="pub-count" id="pubCount">' + filteredPapers().length + ' ' + t('pubs.count') + '</div>' +
        '<div id="pubList">' + pubListHTML() + '</div>';
    } else if (state.pubTab === 'projects') {
      body = D.projects.map(function (x) {
        return '<article class="proj">' +
          '<div class="proj__k">' + pick(x.kind) + '<span>' + pick(x.role) + '</span></div>' +
          '<div><h3>' + pick(x.title) + '</h3>' +
          '<p class="proj__meta">' + x.period + ' · ' + t('pubs.role') + '</p></div>' +
          '<div class="proj__side"><b>' + x.amount + '</b>' + pick(x.unit) + '</div></article>';
      }).join('');
    } else {
      var honors = D.honors.map(function (x) {
        return '<li><span>' + x.t + '</span><div>' + pick(x) + '</div></li>';
      }).join('');
      var roles = D.service.roles.map(function (x) { return '<li><span>—</span><div>' + pick(x) + '</div></li>'; }).join('');
      body = '<h3 style="font-size:16px;margin:34px 0 14px">' + t('pubs.honors') + '</h3>' +
        '<ul class="honor-list">' + honors + '</ul>' +
        '<h3 style="font-size:16px;margin:38px 0 14px">' + t('pubs.service') + '</h3>' +
        '<ul class="honor-list">' + roles + '</ul>' +
        '<p class="small muted" style="margin-top:22px">' + t('pubs.review') + '：' + D.service.review + '</p>';
    }

    var toolbar = '<div class="pub-toolbar"><div class="tabs">' + tabs + '</div>' +
      (state.pubTab === 'papers' ? '<div class="search"><input type="search" id="pubSearch" placeholder="' + t('pubs.search') + '" value="' + state.pubQuery + '"></div>' : '') +
      '</div>';

    return '<div class="wrap">' + secHead('pubs.k', t('pubs.t'), t('pubs.l')) + toolbar + body + '</div>';
  }

  /* ---------------- 新闻 ---------------- */
  function kindBadge(type) {
    var map = { group: ['kind--group', 'news.group'], media: ['kind--media', 'news.media'], talk: ['kind--talk', 'news.talk'], award: ['kind--award', 'news.award'] };
    var m = map[type] || map.group;
    return '<span class="kind ' + m[0] + '">' + t(m[1]) + '</span>';
  }

  function newsTitle(n) {
    var inner = pick(n.t);
    return n.u ? '<a class="news-item__t" href="' + n.u + '" target="_blank" rel="noopener">' + inner + '</a>'
      : '<p class="news-item__t">' + inner + '</p>';
  }
  function newsDesc(n) { return n.d ? '<p class="news-item__d">' + pick(n.d) + '</p>' : ''; }
  function newsSrc(n) {
    if (!n.pl) return '';
    var icon = n.pl === 'wechat' ? IC_WECHAT : IC_WEB;
    return '<div class="news-item__src"><span class="src">' + icon + pick(n.src) + '</span></div>';
  }
  function newsDate(n) {
    return '<div class="news-item__date"><b>' + n.date.slice(5).replace('-', '.') + '</b><span>' + n.date.slice(0, 4) + '</span></div>';
  }

  function viewNews() {
    var filters = [['all', t('news.all')], ['group', t('news.group')], ['media', t('news.media')], ['talk', t('news.talk')], ['award', t('news.award')]]
      .map(function (x) {
        return '<button type="button" class="chip' + (state.newsFilter === x[0] ? ' is-on' : '') + '" data-newsfilter="' + x[0] + '">' + x[1] + '</button>';
      }).join('');

    var items = state.news.filter(function (n) { return state.newsFilter === 'all' || n.type === state.newsFilter; });
    var list = items.length ? items.map(function (n) {
      return '<article class="news-item">' + newsDate(n) +
        '<div>' + newsTitle(n) + newsDesc(n) + newsSrc(n) + '</div>' +
        '<div class="news-item__kind">' + kindBadge(n.type) + '</div></article>';
    }).join('') : '<p class="small muted" style="padding:40px 0">' + t('news.empty') + '</p>';

    return '<div class="wrap">' + secHead('news.k', t('news.t'), t('news.l')) +
      '<div class="news-toolbar"><div class="chips" style="padding:0">' + filters + '</div>' +
      '<div class="news-updated"><span class="dot-live"></span>' + t('news.updated') + ' ' + state.newsUpdated + '</div></div>' +
      '<div class="news-list">' + list + '</div>' +
      '<div class="aggregator-note"><div><h4>' + t('news.aggTitle') + '</h4><p>' + t('news.aggDesc') + '</p></div>' +
      '<div class="small muted"><code>' + t('news.aggRun') + '</code></div></div></div>';
  }

  /* ---------------- 招生 ---------------- */
  function viewJoin() {
    var blocks = D.join.blocks.map(function (b) {
      var list = b.list ? '<ul class="check">' + b.list.map(function (x) { return '<li>' + pick(x) + '</li>'; }).join('') + '</ul>' : '';
      return '<div class="join-block"><h3><span>—</span>' + pick(b.h) + '</h3>' +
        (b.p ? '<p>' + pick(b.p) + '</p>' : '') + list + '</div>';
    }).join('');

    var aside = D.join.aside.map(function (x) {
      return '<div><dt>' + pick(x.k) + '</dt><dd>' + pick(x.v) + '</dd></div>';
    }).join('');

    return '<div class="wrap">' + secHead('join.k', t('join.t'), t('join.l')) +
      '<div class="join-grid"><div>' +
      '<p class="lead-lg">' + pick(D.join.intro) + '</p>' + blocks + '</div>' +
      '<aside class="join-aside"><h3>' + t('join.aside') + '</h3><dl>' + aside + '</dl>' +
      '<a class="btn" href="mailto:' + D.profile.email + '?subject=' + encodeURIComponent('研究生申请 / Graduate application') + '">' +
      t('join.cta') + ARROW + '</a></aside></div></div>';
  }

  /* ---------------- 联系 ---------------- */
  function viewContact() {
    var p = D.profile;
    var cells =
      '<div class="contact-cell"><dt>' + t('contact.email') + '</dt><dd><a href="mailto:' + p.email + '">' + p.email + '</a></dd>' +
      '<p>' + t('contact.links') + '：<a href="' + p.orcidUrl + '" target="_blank" rel="noopener">ORCID</a> · <a href="' + p.rgUrl + '" target="_blank" rel="noopener">ResearchGate</a></p></div>' +
      '<div class="contact-cell"><dt>' + t('contact.office') + '</dt><dd>' + pick(p.office) + '</dd>' +
      '<p>' + pick(p.affil) + '</p></div>' +
      '<div class="contact-cell"><dt>' + t('contact.address') + '</dt><dd>' + pick(p.address) + '</dd>' +
      '<p>' + t('contact.post') + ' ' + p.postcode + ' · ' + t('contact.tel') + ' ' + p.tel + '</p></div>';

    var map = '<svg viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect width="600" height="300" fill="#f4f1ea"/>' +
      '<g fill="#ece6d9">' +
      '<rect x="18" y="18" width="86" height="58"/><rect x="134" y="18" width="176" height="58"/><rect x="352" y="18" width="86" height="58"/><rect x="470" y="18" width="112" height="58"/>' +
      '<rect x="18" y="112" width="86" height="82"/><rect x="134" y="112" width="176" height="82"/><rect x="470" y="112" width="112" height="82"/>' +
      '<rect x="18" y="226" width="86" height="56"/><rect x="134" y="226" width="176" height="56"/><rect x="352" y="226" width="86" height="56"/><rect x="470" y="226" width="112" height="56"/>' +
      '</g>' +
      '<g stroke="#dfd8c8" stroke-width="10">' +
      '<path d="M-10 90h620"/><path d="M-10 206h620"/><path d="M118 -10v320"/><path d="M326 -10v320"/><path d="M454 -10v320"/>' +
      '</g>' +
      '<g stroke="#e8e2d5" stroke-width="2">' +
      '<path d="M0 48h600"/><path d="M0 152h600"/><path d="M0 258h600"/><path d="M60 0v300"/><path d="M222 0v300"/><path d="M390 0v300"/><path d="M540 0v300"/>' +
      '</g>' +
      '<rect x="340" y="98" width="138" height="92" fill="#e3dccb" stroke="#c7bda7"/>' +
      '<circle cx="409" cy="144" r="30" fill="rgba(23,51,79,.09)"/>' +
      '<circle cx="409" cy="144" r="7.5" fill="#17334f"/>' +
      '<circle cx="409" cy="144" r="2.6" fill="#fdfaf3"/>' +
      '<text x="409" y="216" text-anchor="middle" font-family="Consolas, monospace" font-size="10" fill="#8b8474">物理科学与技术学院 · 318</text>' +
      '<g stroke="#b8b0a0" stroke-width="1"><path d="M36 272h58M36 268v8M94 268v8"/></g>' +
      '<text x="36" y="264" font-family="Consolas, monospace" font-size="8.5" fill="#a49c8b">100 m</text>' +
      '<g transform="translate(556,40)"><path d="M0 -15 6.5 8 0 2.5 -6.5 8Z" fill="#b8b0a0"/>' +
      '<text x="0" y="22" text-anchor="middle" font-family="Consolas, monospace" font-size="9" fill="#a49c8b">N</text></g>' +
      '</svg>';

    return '<div class="wrap">' + secHead('contact.k', t('contact.t'), t('contact.l')) +
      '<div class="contact-grid">' + cells + '</div>' +
      '<div class="map-card"><div class="map-canvas">' + map + '</div>' +
      '<div class="map-info"><h3>' + t('contact.mapTitle') + '</h3>' +
      '<p>' + pick(p.affil) + '<br>' + pick(p.office) + '</p>' +
      '<dl class="kv"><div><dt>ADDR</dt><dd>' + pick(p.address) + '</dd></div>' +
      '<div><dt>POST</dt><dd>' + p.postcode + '</dd></div>' +
      '<div><dt>TEL</dt><dd>' + p.tel + '</dd></div>' +
      '<div><dt>MAIL</dt><dd><a href="mailto:' + p.email + '">' + p.email + '</a></dd></div></dl>' +
      '<p class="small muted" style="margin-top:16px">' + t('contact.mapNote') + '</p></div></div></div>';
  }

  /* ---------------- 页脚 ---------------- */
  function renderFooter() {
    var p = D.profile;
    var nav = VIEWS.map(function (v) {
      var key = { home: 'nav.home', team: 'nav.team', research: 'nav.research', publications: 'nav.pubs', news: 'nav.news', join: 'nav.join', contact: 'nav.contact' }[v];
      return '<li><a href="#/' + v + '">' + t(key) + '</a></li>';
    }).join('');

    $('#footer').innerHTML = '<div class="wrap"><div class="footer__grid">' +
      '<div><div class="footer__brand"><span class="brand__mark" aria-hidden="true"><svg viewBox="0 0 36 36" fill="none">' +
      '<circle cx="18" cy="18" r="4.2" fill="currentColor"/>' +
      '<circle cx="18" cy="6.6" r="2.2" fill="currentColor" opacity=".5"/><circle cx="27.9" cy="12.3" r="2.2" fill="currentColor" opacity=".5"/>' +
      '<circle cx="27.9" cy="23.7" r="2.2" fill="currentColor" opacity=".5"/><circle cx="18" cy="29.4" r="2.2" fill="currentColor" opacity=".5"/>' +
      '<circle cx="8.1" cy="23.7" r="2.2" fill="currentColor" opacity=".5"/><circle cx="8.1" cy="12.3" r="2.2" fill="currentColor" opacity=".5"/>' +
      '<path d="M18 6.6 27.9 12.3 27.9 23.7 18 29.4 8.1 23.7 8.1 12.3Z" stroke="currentColor" stroke-width=".9" opacity=".4"/></svg></span>' +
      '<strong>' + t('brand') + '</strong></div><p>' + t('footer.about') + '</p></div>' +
      '<div><h4>' + t('footer.nav') + '</h4><ul>' + nav + '</ul></div>' +
      '<div><h4>' + t('footer.contact') + '</h4><ul>' +
      '<li><a href="mailto:' + p.email + '">' + p.email + '</a></li>' +
      '<li>' + pick(p.office) + '</li><li>' + pick({ zh: '江苏 · 扬州', en: 'Yangzhou, Jiangsu, China' }) + '</li>' +
      '<li><a href="' + p.orcidUrl + '" target="_blank" rel="noopener">ORCID</a></li></ul></div></div>' +
      '<div class="footer__bottom"><span>' + t('footer.rights') + '</span>' +
      '<span>' + t('footer.updated') + ' ' + D.meta.updated + ' · ' + t('footer.note') + '</span></div></div>';
  }

  /* ---------------- 集群可视化 ---------------- */
  function initCluster() {
    var svg = document.getElementById('cluster');
    if (!svg || state.clusterReady) return;
    state.clusterReady = true;

    var NS = 'http://www.w3.org/2000/svg';
    var phi = (1 + Math.sqrt(5)) / 2;
    var raw = [[0, 1, phi], [0, 1, -phi], [0, -1, phi], [0, -1, -phi], [1, phi, 0], [1, -phi, 0],
      [-1, phi, 0], [-1, -phi, 0], [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1]];
    var V = raw.map(function (v) {
      var n = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
      return [v[0] / n, v[1] / n, v[2] / n];
    });
    var E = [];
    for (var i = 0; i < 12; i++) {
      for (var j = i + 1; j < 12; j++) {
        var dx = V[i][0] - V[j][0], dy = V[i][1] - V[j][1], dz = V[i][2] - V[j][2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1.3) E.push([i, j]);
      }
    }

    var gEdge = document.createElementNS(NS, 'g');
    var gLig = document.createElementNS(NS, 'g');
    var gAtom = document.createElementNS(NS, 'g');
    var gCore = document.createElementNS(NS, 'g');
    svg.appendChild(gEdge); svg.appendChild(gLig); svg.appendChild(gAtom); svg.appendChild(gCore);

    var lines = E.map(function () {
      var l = document.createElementNS(NS, 'line');
      l.setAttribute('stroke', '#cbc2ae');
      l.setAttribute('stroke-width', '1');
      l.setAttribute('x1', 210); l.setAttribute('y1', 208);
      l.setAttribute('x2', 210); l.setAttribute('y2', 208);
      gEdge.appendChild(l); return l;
    });
    var stubs = V.map(function () {
      var l = document.createElementNS(NS, 'line');
      l.setAttribute('stroke', '#ddd5c5');
      l.setAttribute('stroke-width', '0.8');
      l.setAttribute('x1', 210); l.setAttribute('y1', 208);
      l.setAttribute('x2', 210); l.setAttribute('y2', 208);
      gLig.appendChild(l);
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('r', '2.4');
      c.setAttribute('cx', 210); c.setAttribute('cy', 208);
      c.setAttribute('fill', '#dccfb7');
      gLig.appendChild(c);
      return { l: l, c: c };
    });
    var dots = V.map(function (_, k) {
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', 210); c.setAttribute('cy', 208); c.setAttribute('r', '5');
      c.setAttribute('fill', k % 3 === 0 ? '#b07c33' : (k % 3 === 1 ? '#c9a068' : '#a06f2e'));
      gAtom.appendChild(c); return c;
    });
    var halo = document.createElementNS(NS, 'circle');
    halo.setAttribute('cx', 210); halo.setAttribute('cy', 208);
    halo.setAttribute('r', '26'); halo.setAttribute('fill', 'rgba(122,79,34,.12)');
    var core = document.createElementNS(NS, 'circle');
    core.setAttribute('cx', 210); core.setAttribute('cy', 208);
    core.setAttribute('r', '14'); core.setAttribute('fill', '#6d4420');
    var coreLabel = document.createElementNS(NS, 'text');
    coreLabel.setAttribute('x', 210); coreLabel.setAttribute('y', 208);
    coreLabel.setAttribute('text-anchor', 'middle');
    coreLabel.setAttribute('dominant-baseline', 'central');
    coreLabel.setAttribute('font-family', 'Georgia, serif');
    coreLabel.setAttribute('font-size', '12');
    coreLabel.setAttribute('fill', '#fdf8ef');
    coreLabel.textContent = 'M';
    gCore.appendChild(halo); gCore.appendChild(core); gCore.appendChild(coreLabel);

    var cx = 210, cy = 208, R = 108, ax = -0.42, ay = 0.35;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function frame() {
      if (state.view !== 'home') { state.clusterRaf = null; return; }
      ay += reduce ? 0 : 0.0032;
      ax = -0.42 + Math.sin(ay * 0.6) * 0.06;

      var ca = Math.cos(ay), sa = Math.sin(ay), cb = Math.cos(ax), sb = Math.sin(ax);
      var proj = V.map(function (v) {
        var x1 = v[0] * ca + v[2] * sa;
        var z1 = -v[0] * sa + v[2] * ca;
        var y1 = v[1] * cb - z1 * sb;
        var z2 = v[1] * sb + z1 * cb;
        var s = 1 / (1 - z2 * 0.16);
        return { x: cx + x1 * R * s, y: cy + y1 * R * s, z: z2, s: s };
      });

      E.forEach(function (e, k) {
        var a = proj[e[0]], b = proj[e[1]];
        lines[k].setAttribute('x1', a.x.toFixed(1)); lines[k].setAttribute('y1', a.y.toFixed(1));
        lines[k].setAttribute('x2', b.x.toFixed(1)); lines[k].setAttribute('y2', b.y.toFixed(1));
        lines[k].setAttribute('opacity', (0.34 + (a.z + b.z + 2) / 4 * 0.52).toFixed(2));
      });
      proj.forEach(function (p, k) {
        var v = V[k];
        var ox = cx + (p.x - cx) * 1.34, oy = cy + (p.y - cy) * 1.34;
        stubs[k].l.setAttribute('x1', p.x.toFixed(1)); stubs[k].l.setAttribute('y1', p.y.toFixed(1));
        stubs[k].l.setAttribute('x2', ox.toFixed(1)); stubs[k].l.setAttribute('y2', oy.toFixed(1));
        stubs[k].l.setAttribute('opacity', (0.25 + (p.z + 1) / 2 * 0.5).toFixed(2));
        stubs[k].c.setAttribute('cx', ox.toFixed(1)); stubs[k].c.setAttribute('cy', oy.toFixed(1));
        stubs[k].c.setAttribute('opacity', (0.3 + (p.z + 1) / 2 * 0.55).toFixed(2));
        dots[k].setAttribute('cx', p.x.toFixed(1));
        dots[k].setAttribute('cy', p.y.toFixed(1));
        dots[k].setAttribute('r', (4.4 + (p.z + 1) * 1.8).toFixed(2));
        dots[k].setAttribute('opacity', (0.55 + (p.z + 1) / 2 * 0.45).toFixed(2));
      });

      state.clusterRaf = requestAnimationFrame(frame);
    }
    if (state.clusterRaf) cancelAnimationFrame(state.clusterRaf);
    state.clusterRaf = requestAnimationFrame(frame);
  }

  /* ---------------- 路由 ---------------- */
  var RENDER = {
    home: viewHome, team: viewTeam, research: viewResearch,
    publications: viewPubs, news: viewNews, join: viewJoin, contact: viewContact
  };
  var TITLES = {
    home: { zh: '裴玮课题组 · 团簇物理与计算材料 | 扬州大学', en: 'Pei Lab · Cluster Physics & Computational Materials | Yangzhou University' },
    team: { zh: '成员介绍 · 裴玮课题组', en: 'People · Pei Lab' },
    research: { zh: '研究方向 · 裴玮课题组', en: 'Research · Pei Lab' },
    publications: { zh: '科研成果 · 裴玮课题组', en: 'Publications · Pei Lab' },
    news: { zh: '新闻动态 · 裴玮课题组', en: 'News · Pei Lab' },
    join: { zh: '招生招聘 · 裴玮课题组', en: 'Join us · Pei Lab' },
    contact: { zh: '联系方式 · 裴玮课题组', en: 'Contact · Pei Lab' }
  };

  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, '').replace(/\/$/, '');
    return VIEWS.indexOf(h) > -1 ? h : 'home';
  }

  function renderView(view, animate) {
    VIEWS.forEach(function (v) {
      var el = document.getElementById('view-' + v);
      if (!el) return;
      if (v === view) {
        el.innerHTML = RENDER[v]();
        el.classList.add('is-active');
      } else {
        el.classList.remove('is-active');
        el.innerHTML = '';
      }
    });
    $$('.nav a').forEach(function (a) {
      a.classList.toggle('is-on', a.getAttribute('data-nav') === (view === 'publications' ? 'pubs' : view));
    });
    document.title = pick(TITLES[view]);
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    if (view === 'home') initCluster();
    if (view === 'publications') bindPubSearch();
  }

  function bindPubSearch() {
    var input = document.getElementById('pubSearch');
    if (!input) return;
    input.addEventListener('input', function () {
      state.pubQuery = input.value;
      var list = document.getElementById('pubList');
      var count = document.getElementById('pubCount');
      if (list) list.innerHTML = pubListHTML();
      if (count) count.textContent = filteredPapers().length + ' ' + t('pubs.count');
    });
  }

  function go(view, push) {
    if (VIEWS.indexOf(view) === -1) view = 'home';
    state.view = view;
    if (push !== false && location.hash !== '#/' + view) {
      history.pushState(null, '', '#/' + view);
    }
    renderView(view, true);
    closeNav();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ---------------- 导航 & 语言 ---------------- */
  function closeNav() {
    var nav = $('#nav'), burger = $('#burger');
    if (nav) nav.classList.remove('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  function bindNav() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#/"]') : null;
      if (a) {
        e.preventDefault();
        go(a.getAttribute('href').replace(/^#\//, ''));
        return;
      }
      var tab = e.target.closest ? e.target.closest('[data-pubtab]') : null;
      if (tab) { state.pubTab = tab.getAttribute('data-pubtab'); renderView('publications'); return; }
      var pf = e.target.closest ? e.target.closest('[data-pubfilter]') : null;
      if (pf) { state.pubFilter = pf.getAttribute('data-pubfilter'); renderView('publications'); return; }
      var py = e.target.closest ? e.target.closest('[data-pubyear]') : null;
      if (py) {
        var yv = py.getAttribute('data-pubyear');
        state.pubYear = (state.pubYear === yv) ? 'all' : yv;
        renderView('publications'); return;
      }
      var nf = e.target.closest ? e.target.closest('[data-newsfilter]') : null;
      if (nf) { state.newsFilter = nf.getAttribute('data-newsfilter'); renderView('news'); return; }
      var lb = e.target.closest ? e.target.closest('[data-lang]') : null;
      if (lb) { setLang(lb.getAttribute('data-lang')); return; }
    });

    var burger = $('#burger');
    if (burger) {
      burger.addEventListener('click', function () {
        var nav = $('#nav');
        var open = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    window.addEventListener('popstate', function () { go(parseHash(), false); });
    window.addEventListener('hashchange', function () {
      var v = parseHash();
      if (v !== state.view) go(v, false);
    });
  }

  function applyChrome() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    $$('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    $$('[data-lang]').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-lang') === state.lang);
    });
  }

  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    if (state.lang === lang) return;
    state.lang = lang;
    localStorage.setItem('lab-lang', lang);
    applyChrome();
    renderFooter();
    renderView(state.view);
  }

  /* ---------------- 新闻聚合数据 ---------------- */
  function mergeLive(items) {
    var seen = {};
    var all = [];
    items.concat(state.news).forEach(function (n) {
      if (!n || !n.date) return;
      var k = pick(n.t).replace(/\s+/g, '').slice(0, 26);
      if (seen[k]) return;
      seen[k] = 1;
      all.push(n);
    });
    all.sort(function (a, b) { return a.date < b.date ? 1 : (a.date > b.date ? -1 : 0); });
    return all;
  }

  function loadNews() {
    // 单文件版（dist/）会把 news.json 直接内联，省掉一次请求，也不受 file:// 限制
    var inline = window.__NEWS_DATA__;
    if (inline && Array.isArray(inline.items) && inline.items.length) {
      state.news = mergeLive(inline.items);
      state.newsUpdated = inline.updated || D.meta.updated;
      state.newsSource = 'live';
      // boot 时本函数在首屏渲染之后才执行，需按当前栏目重绘一次
      if (state.view === 'home' || state.view === 'news') renderView(state.view);
      return;
    }
    if (!window.fetch || location.protocol === 'file:') return;
    fetch('data/news.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || !Array.isArray(j.items) || !j.items.length) return;
        state.news = mergeLive(j.items);
        state.newsUpdated = j.updated || D.meta.updated;
        state.newsSource = 'live';
        if (state.view === 'home' || state.view === 'news') renderView(state.view);
      })
      .catch(function () { /* 保留内置数据 */ });
  }

  /* ---------------- 嵌入模式 ---------------- */
  // 被 iframe 内嵌时（?embed=1）：去掉品牌署名与页脚，只留栏目导航，
  // 并把文档高度通过 postMessage 告诉宿主页面，以便自动撑开 iframe。
  function setupEmbed() {
    document.documentElement.classList.add('is-embed');
    var last = -1;
    function send() {
      var h = Math.ceil(Math.max(
        document.documentElement.scrollHeight,
        document.body.getBoundingClientRect().height));
      if (Math.abs(h - last) < 2) return;
      last = h;
      try { parent.postMessage({ type: 'pei-lab:height', height: h }, '*'); } catch (e) { /* 非嵌入环境 */ }
    }
    if (window.ResizeObserver) {
      new ResizeObserver(send).observe(document.body);
    }
    window.addEventListener('load', send);
    window.addEventListener('resize', send);
    window.addEventListener('hashchange', function () { setTimeout(send, 60); });
    [200, 700, 1500, 2600].forEach(function (t) { setTimeout(send, t); });
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    var q = (location.search.match(/[?&]lang=(zh|en)/) || [])[1];
    if (q) state.lang = q;
    applyChrome();
    renderFooter();
    state.view = parseHash();
    renderView(state.view);
    bindNav();
    loadNews();
    if (/[?&]embed=1/.test(location.search)) setupEmbed();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
