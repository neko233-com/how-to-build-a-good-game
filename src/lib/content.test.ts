import { describe, expect, it } from 'vitest';

import { CHAPTERS } from '@/content/meta';
import { chapterRegistrySlugs, getChapterBody, hasBody } from '@/lib/content';

describe('章节清单与正文文件的对应关系', () => {
  it('清单里的每一章都有对应的 mdx 文件', () => {
    const missing = CHAPTERS.filter((chapter) => !hasBody(chapter)).map((chapter) => chapter.slug);
    // 若这里失败且文件明明存在，大概率是 Vite 的转换缓存过期：
    // import.meta.glob 的展开结果被烘进了 content.ts 的转换产物，缓存以内容哈希为键。
    // 修法：改动 src/lib/content.ts 的内容，或删除 node_modules/.vite。
    expect(
      missing,
      missing.length
        ? '缺少章节正文。若这些文件确实存在，请改动 src/lib/content.ts 或删除 node_modules/.vite 以刷新 glob 缓存。'
        : undefined,
    ).toEqual([]);
  });

  it('没有清单之外的孤立 mdx 文件', () => {
    const known = new Set(CHAPTERS.map((chapter) => chapter.slug));
    const orphans = chapterRegistrySlugs().filter((slug) => !known.has(slug));
    expect(orphans).toEqual([]);
  });

  it('取不存在的章节时返回 undefined 而不是抛错', () => {
    expect(getChapterBody(undefined)).toBeUndefined();
  });
});
