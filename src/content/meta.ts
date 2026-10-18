/**
 * 全书章节清单。
 *
 * 站点目录、上下章导航、首页概览都以此为唯一数据源，
 * 章节正文（MDX）通过 slug 与本清单对应，避免标题在两处重复维护。
 */

export type PartId = 'preface' | 'craft' | 'market' | 'data' | 'delivery' | 'appendix';

export interface Part {
  id: PartId;
  /** 分篇序号；序章与附录不参与编号 */
  number: number | null;
  title: string;
  description: string;
  /** 该篇章节所在的 URL 前缀 */
  basePath: string;
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
  },
  {
    id: 'market',
    number: 2,
    title: '市场与竞争',
    description: '好游戏不等于能活下来。这一篇谈货架、流量、定价与可跨行业复用的商业原理。',
    basePath: '/chapters',
  },
  {
    id: 'data',
    number: 3,
    title: '数据驱动',
    description: '数据什么时候是对的、什么时候是错的，以及如何把验证时间压到最短。',
    basePath: '/chapters',
  },
  {
    id: 'delivery',
    number: 4,
    title: '落地',
    description: '把前面所有原则收拢成一份可以照着做的清单。',
    basePath: '/chapters',
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
  },
  {
    slug: 'what-masters-bet-on',
    order: '02',
    title: '顶级创作者的原话：他们各自押注的是什么',
    short: '创作者们在赌什么',
    summary:
      '宫本茂、岩田聪、樱井政博、席德·梅尔、Raph Koster、Jesse Schell……把他们的原话放回语境，看他们真正在赌什么。',
    part: 'craft',
  },
  {
    slug: 'mechanics-of-fun',
    order: '03',
    title: '好玩的机制学：核心循环、发现与惊喜、心流',
    short: '好玩的机制学',
    summary: '把「好玩」拆成可操作的结构：核心循环、风险与回报、学习曲线，以及惊喜的投放节奏。',
    part: 'craft',
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
  },
  {
    slug: 'competence-floor',
    order: '05',
    title: '能力地板：同行的平均分，就是你的 0 分',
    short: '能力地板',
    summary: '把竞争强度量化：先测出「同行都能做到多少分」，再谈你的差异化究竟值多少。',
    part: 'market',
  },
  {
    slug: 'market-structure',
    order: '06',
    title: '市场结构：品类、平台、买量与货架',
    short: '市场结构',
    summary: '货架在哪里、流量归谁、品类天花板有多高——先看清场子，再决定打法。',
    part: 'market',
  },
  {
    slug: 'monetization-math',
    order: '07',
    title: '商业化算术：定价、内购、广告与 LTV/CAC',
    short: '商业化算术',
    summary: '把商业化还原成算术题：LTV、CAC、回收周期，以及什么时候该停下来。',
    part: 'market',
  },
  {
    slug: 'cross-industry-principles',
    order: '08',
    title: '可跨行业复用的商业原理',
    short: '跨行业商业原理',
    summary: '为什么「游戏行业经验」常常不通用，而商业原理永远通用：需求、渠道、复购与品牌。',
    part: 'market',
  },
  {
    slug: 'data-driven-why',
    order: '09',
    title: '数据驱动为什么是对的（以及何时是错的）',
    short: '数据驱动为什么对',
    summary: '数据不是裁判，是测量工具。它擅长否证，不擅长发明。',
    part: 'data',
  },
  {
    slug: 'shorten-validation',
    order: '10',
    title: '把验证时间压到最短：素材测试、试玩广告与灰盒原型',
    short: '把验证时间压到最短',
    summary: '用最低成本换最早的真实反馈：把数月的赌博，压缩成数周的实验。',
    part: 'data',
    featured: true,
  },
  {
    slug: 'metrics-and-traps',
    order: '11',
    title: '指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差',
    short: '指标与陷阱',
    summary: '哪些指标真的预测生死，哪些只是安慰剂；以及幸存者偏差如何系统性地骗过所有人。',
    part: 'data',
  },
  {
    slug: 'from-zero-to-one',
    order: '12',
    title: '从 0 到 1 的可执行检查清单',
    short: '0 到 1 检查清单',
    summary: '把前面所有章节收拢成一份可以照着做的清单。',
    part: 'delivery',
  },
  {
    slug: 'how-games-die',
    order: '13',
    title: '常见死法与复盘',
    short: '常见死法与复盘',
    summary: '项目不是突然死的，是每天死一点：常见死法清单与复盘方法。',
    part: 'delivery',
  },
  {
    slug: 'references',
    order: 'A',
    title: '附录 A：引用与出处总表',
    short: '引用与出处总表',
    summary: '书中所有引述的来源、可信度分级与核实状态。',
    part: 'appendix',
  },
  {
    slug: 'glossary',
    order: 'B',
    title: '附录 B：术语表',
    short: '术语表',
    summary: 'D1/D7、LTV、CAC、CPI、回收周期……本书用到的行业术语。',
    part: 'appendix',
  },
  {
    slug: 'bibliography',
    order: 'C',
    title: '附录 C：参考文献',
    short: '参考文献',
    summary: '书籍、演讲、访谈与研究报告清单。',
    part: 'appendix',
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

/** 从 React Router 的 location.pathname 反推当前章节 slug（basename 已被剥离） */
export function slugFromPath(pathname: string): string | undefined {
  const matched = pathname.match(/^\/(?:chapters|appendix)\/([^/]+)\/?$/);
  return matched?.[1];
}
