import { describe, expect, it } from 'vitest';

import { CHAPTERS } from '@/content/meta';
import { chapterRegistrySlugs, getChapterBody, hasBody } from '@/lib/content';

describe('章节清单与正文文件的对应关系', () => {
  it('清单里的每一章都有对应的 mdx 文件', () => {
    const missing = CHAPTERS.filter((chapter) => !hasBody(chapter)).map((chapter) => chapter.slug);
    expect(missing).toEqual([]);
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
