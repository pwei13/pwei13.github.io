/* ==========================================================================
   data.js — 课题组内容数据层
   所有对外文案均为中英双语：{ zh, en }
   论文条目字段：y 年份 / a 作者 / j 期刊 / d 卷页或 DOI / n 备注 / u 链接 / sel 首页精选
   ========================================================================== */

window.LAB = {
  meta: {
    updated: "2026-11-01",
    version: "1.0"
  },

  /* ---------------- 负责人 ---------------- */
  profile: {
    name: { zh: "裴玮", en: "Wei Pei" },
    nameEn: "Wei Pei",
    role: { zh: "副教授 · 博士生导师", en: "Associate Professor · Ph.D. Supervisor" },
    roleShort: { zh: "副教授", en: "Associate Professor" },
    affil: {
      zh: "扬州大学 物理科学与技术学院（集成电路学院）",
      en: "School of Physical Science and Technology (School of Integrated Circuits), Yangzhou University"
    },
    discipline: { zh: "凝聚态物理", en: "Condensed Matter Physics" },
    group: { zh: "团簇物理与计算材料", en: "Cluster Physics & Computational Materials" },
    office: { zh: "物理科学与技术学院 318 室", en: "Room 318, School of Physical Science and Technology" },
    email: "pwei@yzu.edu.cn",
    orcid: "0000-0002-7367-4618",
    orcidUrl: "https://orcid.org/0000-0002-7367-4618",
    rgUrl: "https://www.researchgate.net/profile/Wei-Pei-6/research",
    homeUrl: "https://teacher.yzu.edu.cn/PW/zh_CN/index/497143/list/index.htm",
    address: {
      zh: "中国·江苏省扬州市大学南路 88 号 扬州大学物理科学与技术学院",
      en: "School of Physical Science and Technology, Yangzhou University, 88 Daxue South Road, Yangzhou, Jiangsu, China"
    },
    postcode: "225009",
    tel: "86-0514-87991201",
    intro: [
      {
        zh: "裴玮，扬州大学物理科学与技术学院（集成电路学院）副教授、博士生导师。2017—2022 年就读于大连理工大学物理系（保送直博），师从周思教授（国家优青）与赵纪军教授（长江学者、万人领军），获凝聚态物理理学博士学位；2022 年 7 月入职扬州大学，2024 年 7 月晋升副教授，2026 年 10 月破格遴选为博士生导师。",
        en: "Wei Pei is an Associate Professor and Ph.D. supervisor at the School of Physical Science and Technology (School of Integrated Circuits), Yangzhou University. He received his B.S. in Materials Physics from Northwest Normal University in 2017 and his Ph.D. in Condensed Matter Physics from Dalian University of Technology in 2022, working with Prof. Si Zhou and Prof. Jijun Zhao. He joined Yangzhou University in July 2022, was promoted to Associate Professor in July 2024, and was appointed Ph.D. supervisor in October 2026."
      },
      {
        zh: "课题组以原子精确的配体保护金属团簇为核心体系，围绕「结构—电子结构—激发态动力学—器件功能」这条主线，综合第一性原理计算、非绝热分子动力学与量子输运模拟，理解团簇的发光、磁性、催化与电输运行为，并据此设计单团簇光电子与自旋电子器件。迄今发表 SCI 论文 60 余篇，其中第一/通讯作者 30 篇，累计他引 2700 余次，h 因子 23，4 篇入选 ESI 高被引论文、1 篇入选 ESI 热点论文。",
        en: "The group works on atomically precise ligand-protected metal clusters, following a single thread from structure to electronic structure, excited-state dynamics, and device function. Combining first-principles calculations, nonadiabatic molecular dynamics, and quantum transport simulations, we aim to understand luminescence, magnetism, catalysis, and charge transport in clusters, and to design single-cluster optoelectronic and spintronic devices. He has published over 60 SCI papers (30 as first/corresponding author) with more than 2,700 citations and an h-index of 23; four papers are ESI Highly Cited and one is an ESI Hot Paper."
      }
    ],
    timeline: [
      { t: "2026.10", zh: "博士生导师（破格遴选）", en: "Ph.D. supervisor (early appointment)", place: { zh: "扬州大学", en: "Yangzhou University" } },
      { t: "2024.07", zh: "副教授", en: "Associate Professor", place: { zh: "扬州大学 物理科学与技术学院", en: "School of Physical Science and Technology, YZU" } },
      { t: "2022.07", zh: "讲师", en: "Lecturer", place: { zh: "扬州大学 物理科学与技术学院", en: "School of Physical Science and Technology, YZU" } },
      { t: "2017.09–2022.06", zh: "理学博士 · 凝聚态物理（保送直博）", en: "Ph.D. in Condensed Matter Physics", place: { zh: "大连理工大学（导师：周思、赵纪军）", en: "Dalian University of Technology (Advisors: S. Zhou, J. Zhao)" } },
      { t: "2013.09–2017.06", zh: "理学学士 · 材料物理", en: "B.S. in Materials Physics", place: { zh: "西北师范大学", en: "Northwest Normal University" } }
    ]
  },

  /* ---------------- 关键数据 ---------------- */
  stats: [
    { n: "60", suffix: "+", zh: "SCI 论文", en: "SCI papers", note: { zh: "累计发表", en: "total" } },
    { n: "30", suffix: "", zh: "第一 / 通讯作者", en: "first / corresponding", note: { zh: "独立成果", en: "as lead author" } },
    { n: "2700", suffix: "+", zh: "他引次数", en: "citations", note: { zh: "Web of Science", en: "Web of Science" } },
    { n: "23", suffix: "", zh: "h 因子", en: "h-index", note: { zh: "4 篇 ESI 高被引", en: "4 ESI highly cited" } }
  ],

  /* ---------------- 研究方向 ---------------- */
  research: [
    {
      id: "cluster",
      short: { zh: "配体保护的核壳团簇如何形成超原子壳层，内核与金笼的耦合又如何改写它的激子与偶极。", en: "How ligand-protected core-shell clusters form superatomic shells, and how core-shell coupling rewrites their excitons and dipoles." },
      idx: "01",
      title: { zh: "团簇物理与超原子电子结构", en: "Cluster physics & superatomic electronics" },
      sub: { zh: "几何、壳层与核壳耦合", en: "Geometry, shell closure, core–shell coupling" },
      lead: {
        zh: "原子精确的配体保护金属团簇，是连接原子、分子与宏观凝聚态物质的桥梁。它们的电子结构可以用「超原子」语言描述：自由电子按 1S²1P⁶1D¹⁰… 的壳层填充，表现出类原子的闭壳层稳定性。我们关心的是，当内核换一个原子、配体换一种构型，这套壳层如何重组，以及重组带来的性质改变。",
        en: "Atomically precise ligand-protected metal clusters bridge atoms, molecules and bulk condensed matter. Their electrons can be described in a superatomic language, filling 1S²1P⁶1D¹⁰… shells and exhibiting atom-like closed-shell stability. We ask how this shell structure reorganises when the core atom or the ligand shell is changed, and what property changes follow."
      },
      points: [
        { zh: "核壳型 M@Au₁₂ 团簇的几何构型、电子壳层填充与超原子轨道判定", en: "Geometry, shell filling and superatomic orbital assignment in core–shell M@Au₁₂ clusters" },
        { zh: "内核杂原子与外围金笼的电子耦合强度，及其对激子离域与偶极矩的调控", en: "Core–shell electronic coupling and its control over exciton delocalisation and dipole moment" },
        { zh: "团簇结构稳定性、表面活性位点与配体壳层屏蔽效应的微观机制", en: "Structural stability, surface active sites, and the screening role of the ligand shell" }
      ],
      tags: ["M@Au₁₂", "superatom", "core–shell", "ligand effect"]
    },
    {
      id: "dynamics",
      short: { zh: "发光效率由激发态能量的去向决定——我们在飞秒尺度追踪载流子的俘获、复合与耗散。", en: "Emission efficiency is decided by where excited-state energy goes; we track carrier trapping, recombination and dissipation on femtosecond timescales." },
      idx: "02",
      title: { zh: "激发态动力学与非绝热过程", en: "Excited-state & nonadiabatic dynamics" },
      sub: { zh: "飞秒尺度的能量耗散", en: "Femtosecond energy dissipation" },
      lead: {
        zh: "发光效率的高低，往往不取决于基态有多稳定，而取决于激发态能量在飞秒到皮秒之间走向了哪条通道。我们用非绝热分子动力学在原子尺度追踪载流子的俘获、复合与能量转移，解释量子点与团簇发光的微观机理。",
        en: "Luminescence efficiency is rarely decided by ground-state stability; it is decided by which channel the excited-state energy takes within femtoseconds to picoseconds. Using nonadiabatic molecular dynamics we track carrier trapping, recombination and energy transfer at the atomic scale, explaining the microscopic origin of emission in quantum dots and clusters."
      },
      points: [
        { zh: "非绝热分子动力学（NAMD）模拟载流子俘获、复合与界面能量转移", en: "NAMD simulations of carrier trapping, recombination and interfacial energy transfer" },
        { zh: "量子点发光特性的微观机理与非辐射损失通道的识别", en: "Microscopic origin of quantum-dot emission and identification of nonradiative loss channels" },
        { zh: "电子–声子耦合、热电子弛豫与光激发自旋动力学", en: "Electron–phonon coupling, hot-carrier relaxation, and photoexcited spin dynamics" }
      ],
      tags: ["NAMD", "electron–phonon", "carrier dynamics", "quantum-dot emission"]
    },
    {
      id: "design",
      short: { zh: "先写下想要的发光波长、磁各向异性或催化活性，再回到组分、配体与对称性中去找结构。", en: "State the desired emission wavelength, magnetic anisotropy or activity first, then search composition, ligand and symmetry for a structure that delivers it." },
      idx: "03",
      title: { zh: "功能团簇的逆向设计", en: "Inverse design of functional clusters" },
      sub: { zh: "从目标性质反推结构", en: "From target property back to structure" },
      lead: {
        zh: "传统做法是先合成、再表征、再理解；逆向设计把顺序倒过来——先写下想要的发光波长、磁各向异性或催化活性，再在组分、配体与对称性构成的空间里搜索能够实现它的结构。这需要可靠的性质描述符，也需要足够高效的筛选策略。",
        en: "The conventional route is synthesis, then characterisation, then understanding. Inverse design reverses it: state the desired emission wavelength, magnetic anisotropy or catalytic activity first, then search the space of composition, ligand and symmetry for a structure that delivers it. This requires reliable property descriptors and an efficient screening strategy."
      },
      points: [
        { zh: "以发光波长、磁各向异性势垒、催化活性为目标函数的团簇描述符构建", en: "Descriptor construction targeting emission wavelength, magnetic anisotropy barrier and catalytic activity" },
        { zh: "掺杂元素、配体种类与点群对称性的组合空间搜索与优先级排序", en: "Search and prioritisation over dopant, ligand and point-group symmetry combinations" },
        { zh: "结构—性质关系图谱，以及与实验合作体系的相互印证", en: "Structure–property maps, cross-validated against experimentally realised systems" }
      ],
      tags: ["inverse design", "descriptors", "high-throughput", "symmetry"]
    },
    {
      id: "device",
      short: { zh: "把单个团簇共价锚定在电极之间，用透射谱与 I–V 曲线读出电场、光场与形变如何调控器件。", en: "Anchor one cluster between two electrodes and read out, through transmission and I-V curves, how field, light and strain tune the device." },
      idx: "04",
      title: { zh: "单团簇器件与量子输运", en: "Single-cluster devices & quantum transport" },
      sub: { zh: "把团簇接进电路", en: "Wiring a cluster into a circuit" },
      lead: {
        zh: "把一个团簇共价锚定在两个电极之间，测到的是量子输运，设计的是器件功能。我们结合非平衡格林函数与第一性原理，计算透射谱与 I–V 特性，并考察电场、光场与机械形变如何协同调控电导、自旋态与开关行为。",
        en: "Anchor a single cluster covalently between two electrodes and what you measure is quantum transport; what you design is device function. Combining the non-equilibrium Green's function formalism with first-principles calculations, we compute transmission spectra and I–V characteristics, and examine how electric, optical and mechanical stimuli jointly tune conductance, spin state and switching behaviour."
      },
      points: [
        { zh: "NEGF-DFT 单团簇结输运计算：透射谱、电流–电压特性与门压调控", en: "NEGF-DFT transport in single-cluster junctions: transmission, I–V characteristics, gate control" },
        { zh: "光电导开关、自旋阀与自旋过滤效应的理论设计", en: "Theoretical design of photoconductive switches, spin valves and spin-filtering effects" },
        { zh: "机械形变、静电场与飞秒激光多场调控下的自旋交叉与异构化", en: "Spin crossover and isomerisation under mechanical, electrostatic and femtosecond-laser control" }
      ],
      tags: ["NEGF", "single-molecule junction", "spintronics", "optoelectronic switch"]
    }
  ],

  pipeline: [
    { zh: "结构预测与稳定性", en: "Structure & stability", d: { zh: "全局搜索、AIMD、形成能", en: "Global search, AIMD, formation energy" } },
    { zh: "电子结构与壳层", en: "Electronic structure", d: { zh: "DFT、超原子轨道、TDDFT", en: "DFT, superatomic orbitals, TDDFT" } },
    { zh: "激发态动力学", en: "Excited-state dynamics", d: { zh: "NAMD、电声耦合、自旋动力学", en: "NAMD, e–ph coupling, spin dynamics" } },
    { zh: "量子输运", en: "Quantum transport", d: { zh: "NEGF、透射谱、I–V", en: "NEGF, transmission, I–V" } },
    { zh: "器件功能设计", en: "Device function", d: { zh: "开关比、自旋过滤、门控", en: "On/off ratio, spin filtering, gating" } }
  ],

  /* ---------------- 论文 ---------------- */
  papers: [
    /* 2026 */
    { y: 2026, a: "Y. Song, Y. Zhou, X. Yu*, S. Zhou*, W. Pei*, J. Zhao", j: "Inorg. Chem.", d: "DOI: 10.1021/acs.inorgchem.6c02063", n: "本科生一作" },
    { y: 2026, a: "X. Yu, Q. Gao, Y. Chen, W. Pei*, X. Zhang, Y. Su, J. Zhao", j: "J. Phys. Chem. Lett.", d: "17, 12118–12124", u: "https://doi.org/10.1021/acs.jpclett.6c02587", sel: true, t: "Ultrafast Core–Shell Spin Transfer and Spin-Selective Relaxation in an Endohedral Cage Cluster" },
    { y: 2026, a: "Z. Wang, Z. Huang, W. Pei*, F. Zhao*, T. Liu*", j: "Laser Photonics Rev.", d: "e71759", u: "https://doi.org/10.1002/lpor.71759", sel: true, t: "Emergent Self-Trapped Excitonic Behavior Arising From the Interplay of Size, Solvent, and Dopants in Black Phosphorus Quantum Dots" },
    { y: 2026, a: "X. Yu*, Q. Gao, B. Li, W. Pei*, X. Zhang, Y. Su, J. Zhao", j: "J. Phys. Chem. Lett.", d: "17, 7094" },
    { y: 2026, a: "H. Che, Y. Chen, W. Pei, X. Zhang, X. Yu*, Y. Su, J. Zhao", j: "J. Phys. Chem. Lett.", d: "17, 10456–10463", u: "https://doi.org/10.1021/acs.jpclett.6c02411" },
    { y: 2026, a: "M. Liu, S. Mei, M. A. Khan, W. Pei, F. Lu, L. Min, M. Zhou", j: "Small", d: "e75711", u: "https://doi.org/10.1002/smll.75711" },
    { y: 2026, a: "T. Du, W. Pei*, P. Han, X. Yang, J. Zhao*, S. Zhou*", j: "Mater. Futures", d: "5, 045601", u: "http://iopscience.iop.org/article/10.1088/2752-5724/ae828c" },
    { y: 2026, a: "Y. Zhou, Y. Song, X. Yu*, S. Zhou*, W. Pei*, J. Zhao", j: "J. Am. Chem. Soc.", d: "148, 27688–27696", u: "https://doi.org/10.1021/jacs.6c07842", sel: true, t: "Structure-Induced Spin Switching in Triple-Decker Metal–Ring–Metal Nanoclusters" },

    /* 2025 */
    { y: 2025, a: "W. Pei*, P. Han, S. Zhou*, X. Yu*, J. Zhao", j: "J. Am. Chem. Soc.", d: "147, 45832–45839", u: "https://doi.org/10.1021/jacs.5c19434", sel: true, t: "Fully Reversible Photoelectronic Switching Enabled by Delocalized Excitons in a Single Superatom Junction" },
    { y: 2025, a: "J. Yang, J. Zhou, X. Yu, W. Pei*, S. Zhou, J. Zhao", j: "Adv. Funct. Mater.", d: "2507144", u: "https://doi.org/10.1002/adfm.202507144", sel: true, t: "Heteroatomic Doping Induces High-low Spin Isomers in Atomically Precise Au Nanoclusters" },
    { y: 2025, a: "Y. Zhou, J. Zhou, X. Yu, W. Pei*, S. Zhou, J. Zhao", j: "J. Phys. Chem. Lett.", d: "16, 8613–8620" },
    { y: 2025, a: "J. Zhou, J. Yang, X. Yu, Y. Liu, S. Zhou*, J. Zhao, W. Pei*", j: "Appl. Phys. Lett.", d: "126" },
    { y: 2025, a: "J. Zhou, J. Yang, X. Yu, Y. Liu, W. Pei*, S. Zhou, J. Zhao", j: "Appl. Phys. Lett.", d: "127" },
    { y: 2025, a: "X. Yu, W. Pei, W.-w. Xu, Y. Su, J. Zhao", j: "Inorg. Chem.", d: "64, 1561–1568" },
    { y: 2025, a: "X. Yu, Q. Gao, B. Li, W. Pei, Y. Su, X. Zhang, Y. Liu, J. Zhao", j: "J. Phys. Chem. Lett.", d: "16, 6988–6995" },
    { y: 2025, a: "Q. Xie, L. Luo, D. Yan, D. Wu, X. Tang, M. Cai, R. Fan, W. Pei, S. Tian, Y. Tu", j: "Appl. Phys. Lett.", d: "127" },
    { y: 2025, a: "J. Tian, L. Hou, W. Pei, X. Yu", j: "Surf. Interfaces", d: "56, 105691", n: "本科生一作" },
    { y: 2025, a: "Y. Song, J. Yang, Y. Zhou, X. Yu, S. Zhou, J. Zhao, W. Pei", j: "J. Phys. D: Appl. Phys.", d: "58, 385302", n: "本科生一作" },
    { y: 2025, a: "N. Liu, P. Wang, H. Lin, W. Pei*", j: "J. Phys. Chem. A", d: "129, 1616–1622" },
    { y: 2025, a: "W. Huang, W. Zhao, Z. Guo, S. Du, J. Tian, R. Zhang, H. Han, Z. Zhao, W. Pei, R. Shi", j: "RSC Adv.", d: "15, 36084–36092" },
    { y: 2025, a: "T. Du, X. Yang, W. Pei, P. Han, Y. Feng, J. Zhao, S. Zhou", j: "APL Quantum", d: "2" },
    { y: 2025, a: "B. Li, Q. Gao, W. Pei, X. Zhang, Y. Liu, X. Yu, Y. Su, J. Zhao", j: "Phys. Rev. B", d: "112, 205414" },
    { y: 2025, a: "W. Yu, X. Wang, H. Zhu, Q. Xie, L. Zhao, W. Pei, D. Yan, S. Tian, Y. Liu", j: "Inorg. Chem.", d: "2025" },

    /* 2024 */
    { y: 2024, a: "W. Pei*, L. Hou, X. Yu, W. Xia, Z. Wang, Y. Liu, S. Zhou, Y. Tu, J. Zhao", j: "J. Catal.", d: "429, 115232" },
    { y: 2024, a: "W. Pei*, Z. Wang, W. Xia, Z. Huang, P. Wang, Y. Liu, S. Zhou, Y. Tu, J. Zhao", j: "J. Phys. Chem. Lett.", d: "15, 1161–1171" },
    { y: 2024, a: "W. Pei*, L. Hou, Z. Wang, J. Tian, Y. Liu, Y. Tu, J. Zhao, S. Zhou", j: "J. Phys. Chem. Lett.", d: "15, 7708–7715" },
    { y: 2024, a: "W. Pei*, L. Hou, J. Yang, S. Zhou, J. Zhao", j: "Nanoscale", d: "16, 14081–14088" },
    { y: 2024, a: "P. Wang, W. Xia, N. Liu, W. Pei*, S. Zhou, Y. Tu, J. Zhao", j: "J. Chem. Phys.", d: "160" },
    { y: 2024, a: "C. Shang, H. Dong, Y. Zhao, W. Pei, J. Zhao, J. Zhou, S. Zhou", j: "Phys. Rev. B", d: "110, 235428" },
    { y: 2024, a: "B. D. Peter, W. Pei#, G. N. Andrew, S. Zhou, Z. Luo", j: "Nanoscale", d: "16, 8090–8095" },
    { y: 2024, a: "Y. Liu*, Y. Ying, Q. Xie, Z. Gao, X. Shao, M. Zhou, W. Pei, X. Tang, Y. Tu", j: "Inorg. Chem.", d: "63, 16167–16176" },
    { y: 2024, a: "Y. Liu*, Q. Xie, Y. Ying, Z. Gao, X. Shao, W. Xia, M. Zhou, W. Pei, X. Tang, Y. Tu", j: "Chem. Eng. J.", d: "498, 155515" },
    { y: 2024, a: "Y. Liu*, X. Wang, Z. Gao, W. Yu, J. Yang, F. Xu, W. Pei, J. Wang, M. Zhou", j: "Adv. Mater. Interfaces", d: "11, 2400385" },
    { y: 2024, a: "Y. Liu*, X. Shao, Z. Gao, Q. Xie, Y. Ying, X. Zhu, Z. Pan, J. Yang, H. Lin, X. Tang, W. Chen, W. Pei, Y. Tu", j: "Small", d: "20, 2305664" },
    { y: 2024, a: "Z. Gao, X. Shao, Z. Huang, Q. Xie, Y. Ying, H. Lin, J. Wang, X. Tang, W. Chen, W. Pei, Y. Tu, Y. Liu*", j: "Appl. Phys. Lett.", d: "124, 041106" },

    /* 2023 */
    { y: 2023, a: "W. Pei*, W. Xia, X. Yu, L. Hou, P. Wang, Y. Liu, S. Zhou, Y. Tu, J. Zhao", j: "Appl. Surf. Sci.", d: "641, 158509" },
    { y: 2023, a: "W. Pei*, J. She, X. Yu, S. Zhou, J. Zhao", j: "J. Phys. D: Appl. Phys.", d: "56, 445304" },
    { y: 2023, a: "H. Li, W. Pei*, X. Yang, S. Zhou, J. Zhao", j: "Chin. Chem. Lett.", d: "34, 108292" },
    { y: 2023, a: "J. Tian, L. Hou, W. Xia, Z. Wang, Y. Tu, W. Pei*, S. Zhou, J. Zhao", j: "Phys. Chem. Chem. Phys.", d: "25, 28533–28540", n: "本科生一作" },
    { y: 2023, a: "Y. Guo, Y. Zhao, W. Pei, S. Zhou*, J. Zhao", j: "J. Mater. Chem. A", d: "11, 16059–16067" },
    { y: 2023, a: "X. Yu, W. Pei, W.-w. Xu, Y. Zhao, Y. Su, J. Zhao", j: "Inorg. Chem.", d: "62, 20450–20457" },
    { y: 2023, a: "X. Zhu, Z. Pan, T. Xu, X. Shao, Z. Gao, Q. Xie, Y. Ying, W. Pei, H. Lin, J. Wang, X. Tang, W. Chen, Y. Liu*", j: "Inorg. Chem.", d: "62, 9190–9198" },
    { y: 2023, a: "L. Zhao, W. Luo, Z. Huang, Z. Yan, H. Jia, W. Pei, Y. Tu*", j: "Appl. Surf. Sci.", d: "613, 155912" },
    { y: 2023, a: "Y. Liu*, X. Shao, Z. Gao, X. Zhu, Z. Pan, Y. Ying, J. Yang, W. Pei, J. Wang", j: "J. Lumin.", d: "257, 119693" },

    /* 2022 */
    { y: 2022, a: "W. Pei, P. Wang, S. Zhou*, J. Zhao", j: "J. Phys. Chem. Lett.", d: "13, 2523–2532" },
    { y: 2022, a: "J. She, W. Pei, S. Zhou*, J. Zhao", j: "J. Phys. Chem. Lett.", d: "13, 5873–5880" },
    { y: 2022, a: "X. Zhang, Z. Li, W. Pei, G. Li, W. Liu, P. Du, Z. Wang, Z. Qin, H. Qi, X. Liu, S. Zhou*, J. Zhao, B. Yang*, W. Shen", j: "ACS Catal.", d: "12, 3634–3643" },

    /* 2021 */
    { y: 2021, a: "D. Yang#, W. Pei#, Y. Zhang, W. Hu, X. Cai, Y. Sun, S. Li, X. Cheng, S. Zhou*, J. Zhao, Y. Zhu*, W. Ding, X. Liu", j: "Nano Res.", d: "14, 807–813" },
    { y: 2021, a: "P. Su#, W. Pei#, X. Wang, Y. Ma, Q. Jiang, J. Liang, S. Zhou*, J. Zhao, J. Liu*, G. Q. Lu", j: "Angew. Chem. Int. Ed.", d: "60, 16044–16050" },
    { y: 2021, a: "S. Zhou, X. Yang, W. Pei, Z. Jiang, J. Zhao*", j: "J. Phys. Energy", d: "3, 012002" },
    { y: 2021, a: "S. Zhou, W. Pei, Y. Zhao, X. Yang, N. Liu, J. Zhao*", j: "npj Comput. Mater.", d: "7, 186" },
    { y: 2021, a: "H. Liu, W.-H. Lai, Y. Liang, X. Liang, Z.-C. Yan, H.-L. Yang, Y.-J. Lei, P. Wei, S. Zhou, Q.-F. Gu, S.-L. Chou*, H. K. Liu, S. X. Dou, Y.-X. Wang", j: "J. Mater. Chem. A", d: "9, 566–574" },

    /* 2020 */
    { y: 2020, a: "W. Pei, S. Zhou*, J. Zhao, X. Xu, Y. Du, S. X. Dou", j: "Nano Energy", d: "76, 105049" },
    { y: 2020, a: "W. Pei, S. Zhou*, Y. Bai", j: "J. Cluster Sci.", d: "31, 627–635" },
    { y: 2020, a: "D. Yang#, W. Pei#, S. Zhou*, J. Zhao, W. Ding, Y. Zhu*", j: "Angew. Chem. Int. Ed.", d: "59, 1919–1924" },
    { y: 2020, a: "L. Xiu#, W. Pei#, S. Zhou#, Z. Wang*, P. Yang, J. Zhao, J. Qiu*", j: "Adv. Funct. Mater.", d: "30, 1910028" },
    { y: 2020, a: "Y. Sun#, W. Pei#, M. Xie, S. Xu, S. Zhou*, J. Zhao, K. Xiao, Y. Zhu*", j: "Chem. Sci.", d: "11, 2440–2447" },
    { y: 2020, a: "H. Liu, W. Pei, W.-H. Lai, Z. Yan, H. Yang, Y. Lei, Y.-X. Wang, Q. Gu, S. Zhou, S. Chou*, H. K. Liu, S. X. Dou", j: "ACS Nano", d: "14, 7259–7268" },
    { y: 2020, a: "Z. Kou, W. Zang, W. Pei, L. Zheng, S. Zhou, S. Zhang, L. Zhang, J. Wang", j: "J. Mater. Chem. A", d: "8, 3071–3082" },

    /* 2019 */
    { y: 2019, a: "M. Yu#, S. Zhou#, Z. Wang, W. Pei, X. Liu, C. Liu, C. Yan, X. Meng, S. Wang, J. Zhao, J. Qiu", j: "Adv. Funct. Mater.", d: "29, 1905986" },
    { y: 2019, a: "W. Ye#, W. Pei#, S. Zhou, H. Huang, Q. Li, J. Zhao, R. Lu*, Y. Ge, S. Zhang", j: "J. Mater. Chem. A", d: "7, 10363–10371" },
    { y: 2019, a: "Y. Li#, W. Pei#, J. He, K. Liu, W. Qi, X. Gao, S. Zhou*, H. Xie, K. Yin, Y. Gao, J. He, J. Zhao, J. Hu, T.-S. Chan, Z. Li, G. Zhang, M. Liu*", j: "ACS Catal.", d: "9, 10870–10875" },
    { y: 2019, a: "X. Wu, S. Zhou*, Z. Wang, J. Liu, W. Pei, P. Yang, J. Zhao, J. Qiu", j: "Adv. Energy Mater.", d: "9, 1901333" },
    { y: 2019, a: "S. Zhou, X. Yang, W. Pei, J. Zhao*, A. Du", j: "J. Phys. Chem. C", d: "123, 9973–9980" },
    { y: 2019, a: "S. Zhou, W. Pei, J. Zhao*, A. Du*", j: "Nanoscale", d: "11, 7734–7743" },
    { y: 2019, a: "S. Zhou, W. Pei, Q. Du, J. Zhao*", j: "Phys. Chem. Chem. Phys.", d: "21, 10587–10593" },

    /* 2018 */
    { y: 2018, a: "W. Pei, S. Zhou*, Y. Bai, J. Zhao", j: "Carbon", d: "133, 260–266" },
    { y: 2018, a: "S. Zhou, X. Yang, W. Pei, N. Liu, J. Zhao*", j: "Nanoscale", d: "10, 10876–10883" }
  ],

  /* ---------------- 科研项目 ---------------- */
  projects: [
    {
      kind: { zh: "国家自然科学基金 · 面上项目", en: "NSFC · General Program" },
      amount: "54", unit: { zh: "万元", en: "×10⁴ CNY" },
      period: "2027.01 – 2030.12",
      role: { zh: "主持", en: "PI" },
      title: {
        zh: "光控「超原子」团簇的异构化动态机制及其超快单团簇器件构筑的理论研究",
        en: "Theoretical study of photo-controlled isomerisation dynamics in superatomic clusters and the construction of ultrafast single-cluster devices"
      }
    },
    {
      kind: { zh: "国家自然科学基金 · 青年项目", en: "NSFC · Young Scientists Fund" },
      amount: "30", unit: { zh: "万元", en: "×10⁴ CNY" },
      period: "2024.01 – 2026.12",
      role: { zh: "主持", en: "PI" },
      title: {
        zh: "基于配体保护金纳米核壳团簇的单分子光电子器件理论研究和设计",
        en: "Theoretical study and design of single-molecule optoelectronic devices based on ligand-protected gold core–shell clusters"
      }
    },
    {
      kind: { zh: "江苏省自然科学基金 · 青年项目", en: "Jiangsu Provincial NSF · Young Scientists" },
      amount: "20", unit: { zh: "万元", en: "×10⁴ CNY" },
      period: "2023.09 – 2026.08",
      role: { zh: "主持", en: "PI" },
      title: {
        zh: "核壳电子耦合优化原子精确的金纳米团簇发光及电输运特性的研究",
        en: "Optimising luminescence and charge transport of atomically precise gold nanoclusters via core–shell electronic coupling"
      }
    },
    {
      kind: { zh: "江苏省教育厅 · 面上项目", en: "Jiangsu Provincial Department of Education · General Program" },
      amount: "3", unit: { zh: "万元", en: "×10⁴ CNY" },
      period: "2023.07 – 2025.07",
      role: { zh: "主持", en: "PI" },
      title: {
        zh: "配体金纳米团簇精准设计单分子器件的理论研究",
        en: "Theoretical study on the precise design of single-molecule devices from ligand-protected gold nanoclusters"
      }
    },
    {
      kind: { zh: "国家超级计算天津中心 · 开放课题", en: "National Supercomputer Center in Tianjin · Open Project" },
      amount: "3", unit: { zh: "万元", en: "×10⁴ CNY" },
      period: "2024.01 – 2024.12",
      role: { zh: "主持", en: "PI" },
      title: {
        zh: "面向单团簇器件模拟的大规模第一性原理计算",
        en: "Large-scale first-principles simulation of single-cluster devices"
      }
    }
  ],

  /* ---------------- 荣誉与学术服务 ---------------- */
  honors: [
    { t: "2026", zh: "博士生导师（破格遴选）", en: "Ph.D. supervisor (early appointment)" },
    { t: "2024", zh: "扬州大学校「青蓝工程」优秀青年骨干教师", en: "Outstanding Young Faculty, \"Qinglan Project\", Yangzhou University" },
    { t: "2023", zh: "扬州市「绿杨金凤」人才计划", en: "\"Lüyang Jinfeng\" Talent Program, Yangzhou City" }
  ],

  service: {
    roles: [
      { zh: "国家自然科学基金委 通讯评审专家", en: "Reviewer, National Natural Science Foundation of China" },
      { zh: "全国本科毕业论文（设计）抽检评审专家库 专家", en: "Expert, National Review Panel for Undergraduate Theses" },
      { zh: "《Carbon Neutralization》青年编委（中科院 1 区，Top）", en: "Young Editorial Board, Carbon Neutralization (CAS Tier 1, Top)" },
      { zh: "《Journal of Materials Informatics》青年编委（中科院 2 区）", en: "Young Editorial Board, Journal of Materials Informatics (CAS Tier 2)" },
      { zh: "《Frontiers in Chemistry》客座编辑（中科院 2 区）", en: "Guest Editor, Frontiers in Chemistry (CAS Tier 2)" },
      { zh: "《Nanomaterials》客座编辑（中科院 3 区）", en: "Guest Editor, Nanomaterials (CAS Tier 3)" }
    ],
    review: "ACS Catalysis · Applied Physics Letters · J. Phys. Chem. Lett. · Applied Energy · Materials Today Chemistry"
  },

  /* ---------------- 成员 ---------------- */
  members: [
    {
      key: "grad",
      title: { zh: "在读研究生", en: "Current graduate students" },
      note: { zh: "2025–2026 级 · 依据学院学籍信息", en: "2025–2026 cohorts · per university enrolment records" },
      people: [
        {
          zh: "周羽", en: "Yu Zhou", role: { zh: "硕士研究生 · 物理学", en: "M.Sc. student · Physics" },
          notes: [
            { zh: "2025、2026 年研究生国家奖学金（连续两年）", en: "2025 and 2026 National Scholarship for Graduate Students" },
            { zh: "JACS (2026) 第一作者：三层金属–环–金属团簇的结构诱导自旋翻转", en: "First author, JACS (2026): structure-induced spin switching in triple-decker clusters" }
          ]
        },
        {
          zh: "庞芳", en: "Fang Pang", role: { zh: "2025 级硕士", en: "M.Sc. 2025" },
          notes: [{ zh: "物理学 · 凝聚态物理 · 全日制学术型硕士", en: "Condensed matter physics · full-time M.Sc. by research" }]
        },
        {
          zh: "毛永强", en: "Yongqiang Mao", role: { zh: "2025 级硕士", en: "M.Sc. 2025" },
          notes: [{ zh: "电子信息 · 全日制专业学位硕士", en: "Electronic Information · professional M.Sc." }]
        },
        {
          zh: "鲍一凡", en: "Yifan Bao", role: { zh: "2026 级硕士", en: "M.Sc. 2026" },
          notes: [{ zh: "电子信息 · 全日制专业学位硕士", en: "Electronic Information · professional M.Sc." }]
        },
        {
          zh: "杜昕蒙", en: "Xinmeng Du", role: { zh: "2026 级硕士", en: "M.Sc. 2026" },
          notes: [{ zh: "物理学 · 凝聚态物理 · 全日制学术型硕士", en: "Condensed matter physics · full-time M.Sc. by research" }]
        },
        {
          zh: "余圣泽", en: "Shengze Yu", role: { zh: "2026 级硕士", en: "M.Sc. 2026" },
          notes: [{ zh: "物理学 · 凝聚态物理 · 全日制学术型硕士", en: "Condensed matter physics · full-time M.Sc. by research" }]
        }
      ]
    },
    {
      key: "alumni",
      title: { zh: "已毕业研究生", en: "Alumni" },
      note: { zh: "2024–2026 届", en: "Classes of 2024–2026" },
      people: [
        {
          zh: "杨晶", en: "Jing Yang", role: { zh: "2026 届硕士", en: "M.Sc. 2026" },
          notes: [
            { zh: "2024 年一等学业奖学金；2025 年研究生国家奖学金", en: "2024 First-class Academic Scholarship; 2025 National Scholarship" },
            { zh: "AFM (2025) 第一作者：异质原子掺杂诱导 Au 团簇高–低自旋异构", en: "First author, AFM (2025): heteroatom doping induced high–low spin isomers" }
          ],
          to: { zh: "华南师范大学 攻读博士", en: "Ph.D. at South China Normal University" }
        },
        {
          zh: "周吉祥", en: "Jixiang Zhou", role: { zh: "2026 届硕士", en: "M.Sc. 2026" },
          notes: [
            { zh: "2024 年一等学业奖学金；2025 年研究生国家奖学金", en: "2024 First-class Academic Scholarship; 2025 National Scholarship" },
            { zh: "Appl. Phys. Lett. (2025) 第一作者（两篇）", en: "First author of two papers in Appl. Phys. Lett. (2025)" }
          ],
          to: { zh: "事业单位就业", en: "Public institution" }
        },
        {
          zh: "侯蕾", en: "Lei Hou", role: { zh: "2024 届硕士", en: "M.Sc. 2024" },
          notes: [
            { zh: "2024 年研究生国家奖学金、特等学业奖学金", en: "2024 National Scholarship; Presidential Academic Scholarship" },
            { zh: "J. Catal. / J. Phys. Chem. Lett. / Nanoscale 共同作者", en: "Co-author in J. Catal., J. Phys. Chem. Lett., Nanoscale" }
          ],
          to: { zh: "就业", en: "Industry" }
        },
        {
          zh: "王梓", en: "Zi Wang", role: { zh: "2024 届硕士", en: "M.Sc. 2024" },
          notes: [{ zh: "2024 年研究生特等学业奖学金", en: "2024 Presidential Academic Scholarship" }],
          to: { zh: "中山大学 攻读博士", en: "Ph.D. at Sun Yat-sen University" }
        },
        {
          zh: "张文雅", en: "Wenya Zhang", role: { zh: "2024 届硕士", en: "M.Sc. 2024" },
          notes: [{ zh: "2024 年扬州大学优秀毕业生", en: "2024 Outstanding Graduate, Yangzhou University" }],
          to: { zh: "就业", en: "Industry" }
        },
        {
          zh: "夏伟智", en: "Weizhi Xia", role: { zh: "2024 届硕士", en: "M.Sc. 2024" },
          notes: [{ zh: "J. Phys. Chem. Lett. / Appl. Surf. Sci. 共同作者", en: "Co-author in J. Phys. Chem. Lett. and Appl. Surf. Sci." }],
          to: { zh: "就业", en: "Industry" }
        }
      ]
    },
    {
      key: "undergrad",
      title: { zh: "本科生", en: "Undergraduate researchers" },
      note: { zh: "科研训练与毕业论文", en: "Research training & theses" },
      people: [
        {
          zh: "田佳琪", en: "Jiaqi Tian", role: { zh: "本科生", en: "Undergraduate" },
          notes: [
            { zh: "2024 年本科生国家奖学金、扬州大学一等校长奖学金", en: "2024 National Scholarship; First-class Presidential Scholarship" },
            { zh: "第 18 届「挑战杯」主体赛国家特等奖（成员）", en: "National Grand Prize, 18th \"Challenge Cup\" (team member)" },
            { zh: "Surf. Interfaces / PCCP 第一作者", en: "First author, Surf. Interfaces and PCCP" }
          ],
          to: { zh: "推免南京大学 直博", en: "Direct Ph.D. at Nanjing University" }
        },
        {
          zh: "樊琦琦", en: "Qiqi Fan", role: { zh: "本科生", en: "Undergraduate" },
          notes: [
            { zh: "2023、2024 年国家励志奖学金", en: "2023 and 2024 National Inspirational Scholarship" },
            { zh: "扬州大学第十二届「挑战杯」一等奖", en: "First Prize, 12th \"Challenge Cup\", Yangzhou University" }
          ],
          to: { zh: "厦门大学 读研", en: "M.Sc. at Xiamen University" }
        },
        {
          zh: "陈莘", en: "Shen Chen", role: { zh: "本科生", en: "Undergraduate" },
          notes: [
            { zh: "2023 年校三好学生、二等校长奖学金", en: "2023 Merit Student; Second-class Presidential Scholarship" },
            { zh: "全国大学生高数竞赛三等奖、江苏省高数竞赛三等奖", en: "National and Jiangsu provincial mathematics competition awards" }
          ],
          to: { zh: "事业单位就业", en: "Public institution" }
        },
        {
          zh: "宋颖", en: "Ying Song", role: { zh: "本科生", en: "Undergraduate" },
          notes: [
            { zh: "第 21 届江苏省高校物理实验科技作品竞赛三等奖", en: "Third Prize, 21st Jiangsu Physics Experimental Competition" },
            { zh: "JACS (2026) / J. Phys. D 共同作者", en: "Co-author, JACS (2026) and J. Phys. D" }
          ],
          to: { zh: "推免复旦大学 攻读研究生", en: "Recommended for graduate study at Fudan University" }
        }
      ]
    }
  ],

  /* ---------------- 新闻动态 ---------------- */
  news: [
    {
      date: "2026-10-20", type: "award", pl: "", src: { zh: "课题组", en: "Group" },
      t: { zh: "周羽获 2026 年研究生国家奖学金，连续两年获此荣誉", en: "Yu Zhou receives the 2026 National Scholarship, his second consecutive award" },
      d: { zh: "硕士研究生周羽继 2025 年后再次获评研究生国家奖学金。其在学期间以第一作者在 JACS 发表三层金属–环–金属团簇自旋翻转工作。", en: "M.Sc. student Yu Zhou has been awarded the National Scholarship for Graduate Students for a second consecutive year, following his first-author JACS paper on spin switching in triple-decker clusters." }
    },
    {
      date: "2026-09-04", type: "media", pl: "wechat", src: { zh: "材料科学与工程（微信公众号）", en: "Materials Science & Engineering (WeChat)" },
      t: { zh: "纯计算一区顶刊 LPR：首次揭示黑磷量子点中的自陷激子", en: "LPR: self-trapped excitons in black phosphorus quantum dots" },
      d: { zh: "解读裴玮参与通讯的 LPR 工作，系统梳理尺寸、溶剂与边缘掺杂三个变量如何调控自陷激子的形成与发射。", en: "A detailed walkthrough of the LPR work co-corresponding to Wei Pei, covering how size, solvent and edge doping govern self-trapped exciton formation and emission." },
      u: "https://c.m.163.com/news/a/L60593OQ05118KMO.html"
    },
    {
      date: "2026-09-01", pin: 1, type: "group", pl: "", src: { zh: "课题组", en: "Group" },
      t: { zh: "2027 级硕士、博士研究生招生中", en: "Recruiting M.Sc. and Ph.D. students for 2027" },
      d: { zh: "招收物理学、微电子、光科等方向研究生。欢迎对团簇物理、激发态动力学与计算材料学感兴趣的同学来信联系。", en: "We welcome applicants in physics, microelectronics and optical science with an interest in cluster physics, excited-state dynamics and computational materials science." }
    },
    {
      date: "2026-08-21", type: "talk", pl: "web", src: { zh: "西北师范大学 物理与电子工程学院", en: "College of Physics & Electronic Engineering, NWNU" },
      t: { zh: "裴玮与于雪克应邀赴西北师大开展学术交流", en: "Invited talks at Northwest Normal University" },
      d: { zh: "7 月 13 日作题为「单团簇器件的理论设计」的报告，并与材料物理专业学生分享求学经历。", en: "Talk on \"Theoretical design of single-cluster devices\" on 13 July, followed by an informal session with materials physics students." },
      u: "https://wdxy.nwnu.edu.cn/2026/0821/c2487a282456/page.htm"
    },
    {
      date: "2026-08-05", type: "talk", pl: "web", src: { zh: "兰州理工大学 理学院", en: "School of Science, Lanzhou University of Technology" },
      t: { zh: "扬州大学裴玮来校学术交流：单团簇器件的理论设计", en: "Seminar at Lanzhou University of Technology" },
      d: { zh: "应理学院邀请作专题报告，介绍 M@Au₁₂ 核壳团簇中心原子替位掺杂调控超原子物性的最新进展。", en: "Invited seminar covering recent progress on tuning superatomic properties of M@Au₁₂ core–shell clusters via central-atom substitution." },
      u: "https://lixue.lut.edu.cn/info/1212/8071.htm"
    },
    {
      date: "2026-06-27", type: "media", pl: "wechat", src: { zh: "计算材料学（微信公众号）", en: "Computational Materials (WeChat)" },
      t: { zh: "（纯计算）扬州大学/华南师范大学 JACS：三层金属–环–金属纳米团簇中结构诱导的自旋翻转", en: "JACS: structure-induced spin switching in triple-decker metal–ring–metal clusters" },
      d: { zh: "梳理论文投稿与接收时间线，并逐图解读五幅核心图版。", en: "A figure-by-figure walkthrough of the paper, including its submission and acceptance timeline." },
      u: "http://mp.weixin.qq.com/s?__biz=MzA3NDk5NDA5OA==&mid=2454873413&idx=4&sn=d20ff0938f6d165af96d02126d9af7c4&chksm=894b454bf8ea6e3f1cbddfa446301a7cb89c8ae333e12b8c537dff95fa7f49d571b676a3fc3d#rd"
    },
    {
      date: "2026-06-26", type: "group", pl: "wechat", src: { zh: "扬州大学物理科学与技术学院（微信公众号）", en: "School of Physical Science and Technology, YZU (WeChat)" },
      t: { zh: "我院青年教师裴玮在单团簇自旋电子学领域取得重要研究进展", en: "Progress in single-cluster spintronics published in JACS" },
      d: { zh: "研究成果以 Structure-Induced Spin Switching in Triple-Decker Metal–Ring–Metal Nanoclusters 在线发表于 JACS；硕士研究生周羽为第一作者，裴玮、于雪克与周思为共同通讯作者。", en: "The work appeared in JACS, with M.Sc. student Yu Zhou as first author and Wei Pei, Xueke Yu and Si Zhou as co-corresponding authors." },
      u: "http://mp.weixin.qq.com/s?__biz=MzU0MzUwNTYxOA==&mid=2247688418&idx=1&sn=9cb678c4285d75968da052b6dae9b34f&chksm=fa5ccaff445614ac26bda6d7fae8742bb6e6e8be5adcfa9046ecef3db532cbcb2fe89403fb57#rd"
    },
    {
      date: "2026-06-25", type: "media", pl: "wechat", src: { zh: "化学加（微信公众号）", en: "Huaxuejia (WeChat)" },
      t: { zh: "【纳米】结构诱导的三层金属–环–金属纳米团簇自旋翻转", en: "Structure-induced spin switching in triple-decker clusters" },
      d: { zh: "以 [Cp–V(cyclo-Sb₅)V–Cp]⁻ 为模型体系，结合第一性原理、CASSCF 与非平衡格林函数，建立「结构形变—电子重构—磁性翻转—输运响应」的全链条图像。", en: "Using [Cp–V(cyclo-Sb₅)V–Cp]⁻ as a model, first-principles, CASSCF and NEGF methods establish a full chain from structural deformation to electronic reconstruction, magnetic switching and transport response." },
      u: "http://mp.weixin.qq.com/s?__biz=MzAwOTExNzg4Nw==&mid=2657946527&idx=6&sn=df027d769eb8fc0bc9079c1160b08b2d&chksm=8121a1a1728b7cfddc1b7f0cf1b1f6d30242427840d59f5bf9629e7660affb09a912131021dc#rd"
    },
    {
      date: "2025-12-08", type: "media", pl: "wechat", src: { zh: "扬州大学（微信公众号）", en: "Yangzhou University (WeChat)" },
      t: { zh: "周讯｜扬州大学新闻集锦：我校青年教师裴玮在 JACS 发表研究论文", en: "University weekly: JACS paper by Wei Pei featured" },
      d: { zh: "校方周讯收录该成果，介绍单超原子结中离域激子实现的全可逆光电开关。", en: "The university's weekly digest features the work on fully reversible photoelectronic switching via delocalised excitons." },
      u: "http://mp.weixin.qq.com/s?__biz=Mzg4NTk3ODkyNw==&mid=2247547200&idx=1&sn=6329bc79588e45bfa489aa765065664d&chksm=cee3babd8b64fe7d4a307e766dbe12d83c4614112356cbe42d57fef602d42ffed5b11ee1659b#rd"
    },
    {
      date: "2025-12-06", type: "media", pl: "wechat", src: { zh: "可研易绘（微信公众号）", en: "Keyan Yihui (WeChat)" },
      t: { zh: "JACS｜扬州大学裴玮/于雪克 & 华南师大周思：基于单超原子结中离域激子的全可逆光电开关", en: "JACS: fully reversible photoelectronic switching in a single superatom junction" },
      d: { zh: "从单分子开关的器件微型化背景出发，梳理超原子构型设计与器件性能之间的关系。", en: "Frames the work within device miniaturisation and explains how superatomic configuration governs device performance." },
      u: "http://mp.weixin.qq.com/s?__biz=Mzk0NjI1NDU1OQ==&mid=2247511056&idx=2&sn=239dc74a80fee3462b7503f2e93a2802&chksm=c21efcd522908c57ea8d6827276c1f171dcacddf99ec68a567316b20a11338c6f6ec556e5759#rd"
    },
    {
      date: "2025-12-05", type: "group", pl: "wechat", src: { zh: "扬州大学物理科学与技术学院（微信公众号）", en: "School of Physical Science and Technology, YZU (WeChat)" },
      t: { zh: "我院青年教师裴玮在《Journal of the American Chemical Society》期刊发表研究论文", en: "Paper published in the Journal of the American Chemical Society" },
      d: { zh: "M@Au₁₂ 超原子团簇在 0.50 V 低栅压下实现全可逆光电导开关，开关比达 10⁴–10⁵；裴玮为论文第一作者。", en: "M@Au₁₂ superatomic clusters deliver fully reversible photoconductive switching at 0.50 V gate bias with an on/off ratio of 10⁴–10⁵; Wei Pei is first author." },
      u: "http://mp.weixin.qq.com/s?__biz=MzU0MzUwNTYxOA==&mid=2247677712&idx=1&sn=ed0bcfa19b06803185e79994fefbc6cd&chksm=fa3cca289a23c1f4c97bc1f1064997f3399cdc6816bf24e5e295976f92c5050e2b98ba45479f#rd"
    },
    {
      date: "2025-10-15", type: "award", pl: "", src: { zh: "课题组", en: "Group" },
      t: { zh: "周羽、杨晶、周吉祥获 2025 年研究生国家奖学金", en: "Three group members receive the 2025 National Scholarship" },
      d: { zh: "三位研究生同时获评 2025 年研究生国家奖学金，此前均获校级学业奖学金。", en: "Three graduate students received the 2025 National Scholarship, following earlier academic scholarships at university level." }
    },
    {
      date: "2025-09-20", type: "media", pl: "wechat", src: { zh: "科匠文化（微信公众号）", en: "Kejiang Culture (WeChat)" },
      t: { zh: "扬大-裴玮团队 AFM：异质原子掺杂原子精确的金纳米团簇高–低自旋异构体", en: "AFM: heteroatom doping induces high–low spin isomers in atomically precise Au clusters" },
      d: { zh: "中心替位掺杂 Fe/Cr/Mn 构建 M@Au₈，高/低自旋异构由金属内核点群对称性主导；硕士研究生杨晶为第一作者。", en: "Central substitution with Fe/Cr/Mn yields M@Au₈, where high/low-spin isomers are governed by the point-group symmetry of the metal core; M.Sc. student Jing Yang is first author." },
      u: "http://mp.weixin.qq.com/s?__biz=MzkyMjIwMTA0MA==&mid=2247532703&idx=1&sn=b6634efe50588278a4deec3f190181dd&chksm=c05b1155727eb0e7554d78023c287cd802cdf432c3c7e7a0d034b3faa2105296fa8c57aa36a0#rd"
    },
    {
      date: "2024-11-15", type: "award", pl: "", src: { zh: "课题组", en: "Group" },
      t: { zh: "本科生田佳琪获第 18 届「挑战杯」主体赛国家特等奖", en: "Undergraduate Jiaqi Tian wins national grand prize at the 18th Challenge Cup" },
      d: { zh: "同期获本科生国家奖学金、扬州大学一等校长奖学金，推免至南京大学直接攻读博士学位。", en: "She also received the National Scholarship and the First-class Presidential Scholarship, and is now pursuing a direct Ph.D. at Nanjing University." }
    },
    {
      date: "2024-06-20", type: "award", pl: "", src: { zh: "扬州大学", en: "Yangzhou University" },
      t: { zh: "入选扬州大学「青蓝工程」优秀青年骨干教师", en: "Selected for the \"Qinglan Project\" Outstanding Young Faculty program" },
      d: { zh: "2023 年入选扬州市「绿杨金凤」人才计划，2024 年入选校「青蓝工程」优秀青年骨干教师。", en: "Selected for the Lüyang Jinfeng Talent Program (Yangzhou, 2023) and the Qinglan Project (YZU, 2024)." }
    }
  ],

  /* ---------------- 招生 ---------------- */
  join: {
    intro: {
      zh: "课题组每年招收物理学、微电子技术与光科方向的硕士与博士研究生，也欢迎本科生提前进入实验室参与科研训练。我们不要求你入学时就掌握所有计算方法，但希望你对该领域真正好奇，并愿意把一个问题追到底。",
      en: "We admit M.Sc. and Ph.D. students in physics, microelectronics and optical science each year, and we welcome undergraduates who wish to start research training early. You do not need to arrive with every computational method in hand — but genuine curiosity and the patience to follow a problem to the end are essential."
    },
    blocks: [
      {
        h: { zh: "招生方向", en: "What we work on" },
        p: {
          zh: "配体保护金属团簇的结构与电子结构、激发态动力学、功能团簇逆向设计、单团簇器件量子输运。具体课题会根据你的背景与兴趣，在组内现有项目框架下共同确定。",
          en: "Structure and electronic structure of ligand-protected metal clusters, excited-state dynamics, inverse design of functional clusters, and quantum transport in single-cluster devices. Specific projects are defined together, within the group's ongoing programmes, according to your background and interests."
        }
      },
      {
        h: { zh: "我们期待你具备", en: "What we look for" },
        list: [
          { zh: "物理、材料、化学或微电子相关背景，具备固体物理与量子力学基础", en: "A background in physics, materials, chemistry or microelectronics, with foundations in solid-state physics and quantum mechanics" },
          { zh: "愿意学习编程与计算工具（Python / Fortran / VASP / Gaussian 等），有 Linux 使用经验更佳", en: "Willingness to learn programming and computational tools (Python, Fortran, VASP, Gaussian); Linux experience is a plus" },
          { zh: "能阅读英文文献，并有把结果写清楚的意愿", en: "Ability to read English literature and a willingness to write results up clearly" },
          { zh: "主动、诚实、能与人合作——这三点比已有技能更重要", en: "Initiative, honesty and the ability to collaborate — these matter more than existing skills" }
        ]
      },
      {
        h: { zh: "你在这里能得到", en: "What we offer" },
        list: [
          { zh: "充足的计算资源：国家超级计算天津中心及校内外集群机时", en: "Generous computing resources, including allocations at the National Supercomputer Center in Tianjin and local clusters" },
          { zh: "从选题到论文写作的完整训练，组内每周个别讨论", en: "End-to-end training from problem selection to paper writing, with weekly individual discussions" },
          { zh: "与大连理工大学、华南师范大学等单位的常态化合作与交流机会", en: "Regular collaboration and exchange with groups at Dalian University of Technology, South China Normal University and elsewhere" },
          { zh: "按学校规定发放的奖助学金，以及成果发表后的组内奖励", en: "University scholarships and stipends, plus group-level awards for publications" }
        ]
      },
      {
        h: { zh: "如何申请", en: "How to apply" },
        p: {
          zh: "请将个人简历、成绩单（附排名）、简要的研究兴趣说明（不超过一页）合并为一个 PDF，发送至 pwei@yzu.edu.cn，邮件标题注明「研究生申请-姓名-学校」。我们会在两周内回复；若方向匹配，会安排一次线上交流。",
          en: "Send a single PDF containing your CV, transcript (with ranking) and a one-page statement of research interests to pwei@yzu.edu.cn, with the subject line \"Graduate application – Name – University\". We reply within two weeks, and arrange an online meeting when there is a good fit."
        }
      }
    ],
    aside: [
      { k: { zh: "招生专业", en: "Programs" }, v: { zh: "物理学、微电子技术、光科等硕士（学硕 + 专硕）", en: "M.Sc. in physics, microelectronics, optical science (academic and professional)" } },
      { k: { zh: "博士招生", en: "Ph.D." }, v: { zh: "凝聚态物理方向，2027 年起可招收博士生", en: "Condensed matter physics, from 2027" } },
      { k: { zh: "本科生", en: "Undergraduates" }, v: { zh: "常年接收科研训练与毕业论文，建议大二下学期起联系", en: "Research training and theses year-round; contact from the second year" } },
      { k: { zh: "博士后", en: "Postdocs" }, v: { zh: "欢迎计算材料学 / 凝聚态物理背景的博士联系", en: "Ph.D. holders in computational materials or condensed matter are welcome to get in touch" } }
    ]
  }
};
