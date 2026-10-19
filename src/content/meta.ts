/**
 * 全书章节清单。
 *
 * 站点目录、上下章导航、首页概览都以此为唯一数据源，
 * 章节正文（MDX）通过 slug 与本清单对应，避免标题在两处重复维护。
 */

export type PartId = 'preface' | 'craft' | 'market' | 'design' | 'data' | 'delivery' | 'appendix';

export interface Part {
  id: PartId;
  /** 分篇序号；序章与附录不参与编号 */
  number: number | null;
  title: string;
  description: string;
  /** 该篇章节所在的 URL 前缀 */
  basePath: string;
  /** 分篇开篇插画：public/images 下的相对路径与替代文本 */
  plate?: { src: string; alt: string };
}

export interface Chapter {
  slug: string;
  /** 展示用编号 */
  order: string;
  title: string;
  /** 目录与导航里使用的短标题，避免长标题把侧边栏撑开 */
  short: string;
  summary: string;
  part: PartId;
  /** 首批样章，首页单独推荐 */
  featured?: boolean;
  /** 缺省视为草稿；正文写完后再显式标为 written */
  status?: 'draft' | 'written';
}

export interface BookMeta {
  title: string;
  tagline: string;
  description: string;
  repo: string;
  site: string;
}

export const BOOK: BookMeta = {
  title: '如何构建一个好游戏',
  tagline: '当同行都能做到 60 分，60 分就是 0 分',
  description:
    '一本把「做好游戏」拆成可讨论、可验证、可复用经验的书：从任天堂与顶级创作者的设计哲学，到市场竞争、商业化，再到数据驱动与验证效率。',
  repo: 'https://github.com/neko233-com/how-to-build-a-good-game',
  site: 'https://neko233-com.github.io/how-to-build-a-good-game/',
};

export const PARTS: Part[] = [
  {
    id: 'preface',
    number: null,
    title: '序',
    description: '这本书想解决什么，以及怎么读。',
    basePath: '/chapters',
  },
  {
    id: 'craft',
    number: 1,
    title: '好游戏的三把尺子',
    description: '先搞清楚「好」是什么：可引用的定义、可拆解的机制，以及及格线为什么会漂移。',
    basePath: '/chapters',
    plate: {
      src: 'images/part-craft.jpg',
      alt: '分篇插画：一把巨大的几何直尺斜立着，尺身有三道刻度缺口，旁边地面上散落着立方体、圆锥与球体',
    },
  },
  {
    id: 'market',
    number: 2,
    title: '市场与竞争',
    description: '好游戏不等于能活下来。这一篇谈货架、流量、定价与可跨行业复用的商业原理。',
    basePath: '/chapters',
    plate: {
      src: 'images/part-market.jpg',
      alt: '分篇插画：一组等距排列的几何货架，格子里放着形态各异的小型几何体，地面上铺着由琥珀色箭头组成的路线',
    },
  },
  {
    id: 'design',
    number: 3,
    title: '设计与工艺',
    description:
      '知道场子在哪之后才谈设计：先选题与主玩法，再搭副玩法、定美术风格，最后把手感与反馈这些「看不见的工艺」做对。',
    basePath: '/chapters',
    plate: {
      src: 'images/part-design.jpg',
      alt: '分篇插画：等距工作台上摆着正在组装中的几何角色构件、三块质感色板，以及一段弹簧与阶梯',
    },
  },
  {
    id: 'data',
    number: 4,
    title: '数据驱动',
    description: '数据什么时候是对的、什么时候是错的，以及如何把验证时间压到最短。',
    basePath: '/chapters',
    plate: {
      src: 'images/part-data.jpg',
      alt: '分篇插画：等距桌面上摊开一张几何网格图表板，立着高低不同的琥珀色柱体与一条上扬折线，旁边是一个几何漏斗',
    },
  },
  {
    id: 'delivery',
    number: 5,
    title: '落地',
    description: '把前面所有原则收拢成一份可以照着做的清单。',
    basePath: '/chapters',
    plate: {
      src: 'images/part-delivery.jpg',
      alt: '分篇插画：一段正在垒砌的几何砖墙台阶，右侧放着一只半开的几何工具箱，一条路径通向台阶顶端',
    },
  },
  {
    id: 'appendix',
    number: null,
    title: '附录',
    description: '引用出处、术语与参考文献。',
    basePath: '/appendix',
  },
];

/** 数组顺序即全书阅读顺序 */
export const CHAPTERS: Chapter[] = [
  {
    slug: 'preface',
    order: '序',
    title: '序言：这本书想解决什么',
    short: '序言',
    summary: '为什么大多数游戏不是「不好」，而是「不必要」；以及本书的组织方式与三种读法。',
    part: 'preface',
    status: 'written',
  },
  {
    slug: 'nintendo-three-rulers',
    order: '01',
    title: '任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项',
    short: '任天堂的三把尺子',
    summary:
      '一个流传甚广却查无实据的说法，以及岩田聪真正说过的话：MUST-HAVE 游戏的四个要素，和让口碑自行扩散的两个条件。',
    part: 'craft',
    featured: true,
    status: 'written',
  },
  {
    slug: 'what-masters-bet-on',
    order: '02',
    title: '顶级创作者的原话：他们各自押注的是什么',
    short: '创作者们在赌什么',
    summary:
      '宫本茂、岩田聪、樱井政博、席德·梅尔、Raph Koster、Jesse Schell……把他们的原话放回语境，看他们真正在赌什么。',
    part: 'craft',
    status: 'written',
  },
  {
    slug: 'mechanics-of-fun',
    order: '03',
    title: '好玩的机制学：核心循环、发现与惊喜、心流',
    short: '好玩的机制学',
    summary: '把「好玩」拆成可操作的结构：核心循环、风险与回报、学习曲线，以及惊喜的投放节奏。',
    part: 'craft',
    status: 'written',
  },
  {
    slug: 'sixty-is-zero',
    order: '04',
    title: '60 分就是 0 分：当及格线由同行决定',
    short: '60 分就是 0 分',
    summary:
      '当同行都能做到 60 分，60 分就不再是分数，而是入场券。及格线不是绝对值，而是行业水位。',
    part: 'craft',
    featured: true,
    status: 'written',
  },
  {
    slug: 'competence-floor',
    order: '05',
    title: '能力地板：同行的平均分，就是你的 0 分',
    short: '能力地板',
    summary: '把竞争强度量化：先测出「同行都能做到多少分」，再谈你的差异化究竟值多少。',
    part: 'market',
    status: 'written',
  },
  {
    slug: 'market-structure',
    order: '06',
    title: '客群与流量：为什么同一套数值模型必然出错',
    short: '客群与流量',
    summary:
      '同叫「游戏」，原神与《寻道大千》的受众几乎不重叠。客群结构、流量入口与留存机制决定了数值的可能范围——跳过它们直接谈数值，必然出错。',
    part: 'market',
    status: 'written',
  },
  {
    slug: 'monetization-math',
    order: '07',
    title: '商业化算术：定价、内购、广告与 LTV/CAC',
    short: '商业化算术',
    summary: '把商业化还原成算术题：LTV、CAC、回收周期，以及什么时候该停下来。',
    part: 'market',
    status: 'written',
  },
  {
    slug: 'cross-industry-principles',
    order: '08',
    title: '可跨行业复用的商业原理',
    short: '跨行业商业原理',
    summary: '为什么「游戏行业经验」常常不通用，而商业原理永远通用：需求、渠道、复购与品牌。',
    part: 'market',
    status: 'written',
  },
  {
    slug: 'theme-and-core-loop',
    order: '09',
    title: '选题与主玩法：先决定卖给谁，再决定怎么玩',
    short: '选题与主玩法',
    summary:
      '选题是市场决策、玩法是产品决策——先定「卖给谁、卖什么」，再定「怎么玩」。顺序反了，就会做出没人要的好游戏。',
    part: 'design',
    status: 'written',
  },
  {
    slug: 'gameplay-stacking',
    order: '10',
    title: '副玩法与玩法组合：为什么几乎没人只做一个玩法',
    short: '副玩法与组合',
    summary:
      '副玩法不是「多加点东西」，而是承担留存延长、付费分层与买量素材多样性三件事；每种组合都有它的代价。',
    part: 'design',
    status: 'written',
  },
  {
    slug: 'art-style',
    order: '11',
    title: '美术风格：风格是市场选择，不是审美选择',
    short: '美术风格',
    summary: '风格决定了买量素材的辨识度、目标人群的第一眼接受度和生产成本——它首先是一条商业决策。',
    part: 'design',
    status: 'written',
  },
  {
    slug: 'game-feel',
    order: '12',
    title: '手感：一套可以调出来的东西',
    short: '手感',
    summary:
      '手感由一组具体参数构成：重力、初速、加速度、输入缓冲、土狼时间、顿帧与相机跟随。配可交互调参器。',
    part: 'design',
    status: 'written',
  },
  {
    slug: 'feedback-and-juice',
    order: '13',
    title: '反馈感：飘字、震动、顿帧与音效的配方',
    short: '反馈感',
    summary: '把反馈拆成视觉、听觉、触觉三类逐一列举，并给出「过犹不及」的边界。配可交互实验台。',
    part: 'design',
    status: 'written',
  },
  {
    slug: '2d-and-3d',
    order: '14',
    title: '2D 与 3D：不是技术选择，而是市场定位',
    short: '2D 与 3D',
    summary:
      '从玩家视角与推广视角对比 2D/3D 的真实差异：操作直观性、空间认知、素材可读性、平台适配与成本。',
    part: 'design',
    status: 'written',
  },
  {
    slug: 'data-driven-why',
    order: '15',
    title: '数值的虚假重要性：为什么完美的数值论证什么也证明不了',
    short: '数值的虚假重要性',
    summary:
      '成功与失败都能被同一套数值解释通，说明它没有区分力；很多数值还是从营业额目标反推出来的——它是目标的下游产物，不是成功的原因。',
    part: 'data',
    status: 'written',
  },
  {
    slug: 'shorten-validation',
    order: '16',
    title: '把验证时间压到最短：素材测试、试玩广告与灰盒原型',
    short: '把验证时间压到最短',
    summary: '用最低成本换最早的真实反馈：把数月的赌博，压缩成数周的实验。',
    part: 'data',
    featured: true,
    status: 'written',
  },
  {
    slug: 'metrics-and-traps',
    order: '17',
    title: '指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差',
    short: '指标与陷阱',
    summary: '哪些指标真的预测生死，哪些只是安慰剂；以及幸存者偏差如何系统性地骗过所有人。',
    part: 'data',
    status: 'written',
  },
  {
    slug: 'from-zero-to-one',
    order: '18',
    title: '从 0 到 1 的可执行检查清单',
    short: '0 到 1 检查清单',
    summary: '把前面所有章节收拢成一份可以照着做的清单。',
    part: 'delivery',
    status: 'written',
  },
  {
    slug: 'how-games-die',
    order: '19',
    title: '常见死法与复盘',
    short: '常见死法与复盘',
    summary: '项目不是突然死的，是每天死一点：常见死法清单与复盘方法。',
    part: 'delivery',
    status: 'written',
  },
  {
    slug: 'references',
    order: 'A',
    title: '附录 A：引用与出处总表',
    short: '引用与出处总表',
    summary: '书中所有引述的来源、可信度分级与核实状态。',
    part: 'appendix',
    status: 'written',
  },
  {
    slug: 'glossary',
    order: 'B',
    title: '附录 B：术语表',
    short: '术语表',
    summary: 'D1/D7、LTV、CAC、CPI、回收周期……本书用到的行业术语。',
    part: 'appendix',
    status: 'written',
  },
  {
    slug: 'bibliography',
    order: 'C',
    title: '附录 C：参考文献',
    short: '参考文献',
    summary: '书籍、演讲、访谈与研究报告清单。',
    part: 'appendix',
    status: 'written',
  },
  {
    slug: 'worksheets',
    order: 'D',
    title: '附录 D：工作表与模板',
    short: '工作表与模板',
    summary:
      '把书里的方法做成可以直接填的表：能力地板、客群四问、循环诊断、验证漏斗、数值自检、复盘规则、总清单。',
    part: 'appendix',
    status: 'written',
  },
  {
    slug: 'about',
    order: 'E',
    title: '附录 E：关于本书',
    short: '关于本书',
    summary: '版本与修订、如何引用、写作与核实方法、勘误渠道与许可。',
    part: 'appendix',
    status: 'written',
  },
];

export function findPart(partId: PartId): Part | undefined {
  return PARTS.find((part) => part.id === partId);
}

export function chapterHref(chapter: Chapter): string {
  const base = findPart(chapter.part)?.basePath ?? '/chapters';
  return `${base}/${chapter.slug}`;
}

export function findChapter(slug: string | undefined): Chapter | undefined {
  if (!slug) return undefined;
  return CHAPTERS.find((chapter) => chapter.slug === slug);
}

export function chaptersOfPart(partId: PartId): Chapter[] {
  return CHAPTERS.filter((chapter) => chapter.part === partId);
}

/** 按全书阅读顺序取上下章，跨篇也连续 */
export function getSiblings(slug: string | undefined): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const index = CHAPTERS.findIndex((chapter) => chapter.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: CHAPTERS[index - 1] ?? null,
    next: CHAPTERS[index + 1] ?? null,
  };
}

export const FEATURED_CHAPTERS: Chapter[] = CHAPTERS.filter((chapter) => chapter.featured);

/** 还没有完成正文的章节，站点会据此显示草稿提示 */
export function isDraft(chapter: Chapter): boolean {
  return chapter.status !== 'written';
}

/** 从 React Router 的 location.pathname 反推当前章节 slug（basename 已被剥离） */
export function slugFromPath(pathname: string): string | undefined {
  const matched = pathname.match(/^\/(?:chapters|appendix)\/([^/]+)\/?$/);
  return matched?.[1];
}
