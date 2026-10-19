import { describe, expect, it } from 'vitest';

import {
  CHAPTERS,
  FEATURED_CHAPTERS,
  PARTS,
  type Chapter,
  chapterHref,
  chaptersOfPart,
  findChapter,
  getSiblings,
  isDraft,
} from '@/content/meta';

function mustFind(slug: string) {
  const chapter = findChapter(slug);
  if (!chapter) throw new Error(`章节不存在：${slug}`);
  return chapter;
}

describe('章节清单', () => {
  it('slug 不重复', () => {
    const slugs = CHAPTERS.map((chapter) => chapter.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('每章都有标题、短标题与摘要', () => {
    for (const chapter of CHAPTERS) {
      expect(chapter.title.trim(), chapter.slug).not.toBe('');
      expect(chapter.short.trim(), chapter.slug).not.toBe('');
      expect(chapter.summary.trim(), chapter.slug).not.toBe('');
    }
  });

  it('每章都归属一个已定义的分篇', () => {
    const partIds = new Set(PARTS.map((part) => part.id));
    for (const chapter of CHAPTERS) {
      expect(partIds.has(chapter.part), chapter.slug).toBe(true);
    }
  });

  it('每个分篇至少有一章，目录里不会出现空篇', () => {
    for (const part of PARTS) {
      expect(chaptersOfPart(part.id).length, part.id).toBeGreaterThan(0);
    }
  });

  it('链接前缀由所属分篇决定', () => {
    expect(chapterHref(mustFind('preface'))).toBe('/chapters/preface');
    expect(chapterHref(mustFind('references'))).toBe('/appendix/references');
  });

  it('阅读顺序的首章没有上一章，末章没有下一章', () => {
    const first = CHAPTERS[0];
    const last = CHAPTERS[CHAPTERS.length - 1];
    expect(getSiblings(first.slug).prev).toBeNull();
    expect(getSiblings(last.slug).next).toBeNull();
  });

  it('相邻章节首尾相接，导航不会断链', () => {
    for (let index = 1; index < CHAPTERS.length; index += 1) {
      const current = CHAPTERS[index];
      const previous = CHAPTERS[index - 1];
      expect(getSiblings(current.slug).prev?.slug).toBe(previous.slug);
      expect(getSiblings(previous.slug).next?.slug).toBe(current.slug);
    }
  });

  it('首批样章恰好三章', () => {
    expect(FEATURED_CHAPTERS).toHaveLength(3);
  });

  it('未显式标注状态的章节按草稿处理', () => {
    // 不依赖某个具体章节：全部章节现在都已完稿，所以这里显式造一个没有状态的条目
    const withoutStatus: Chapter = { ...CHAPTERS[0], status: undefined };
    expect(isDraft(withoutStatus)).toBe(true);
    expect(isDraft({ ...withoutStatus, status: 'written' })).toBe(false);
  });
});
