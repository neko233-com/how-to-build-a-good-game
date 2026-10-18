import { useEffect, useState, type RefObject } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * 由标题文本生成锚点 id。
 * 保留中日韩等字母类字符，所以中文标题也能得到可读的锚点，而不是一串空字符串。
 */
export function slugifyHeading(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]+/gu, '')
    .replace(/[\s\u3000]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * 从已渲染的正文里提取 h2/h3 生成右侧目录。
 * 正文是 MDX，标题在构建期不可枚举，所以直接在挂载后读 DOM；顺带给标题写回锚点 id。
 */
export function useHeadingOutline(
  containerRef: RefObject<HTMLElement | null>,
  key: string | undefined,
): Heading[] {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) {
      setHeadings([]);
      return;
    }

    const found: Heading[] = [];
    const used = new Map<string, number>();

    for (const element of root.querySelectorAll<HTMLElement>('h2, h3')) {
      const text = (element.textContent ?? '').trim();
      if (!text) continue;

      const base = slugifyHeading(text) || 'section';
      const seen = used.get(base) ?? 0;
      used.set(base, seen + 1);
      const id = seen === 0 ? base : `${base}-${seen + 1}`;

      element.id = id;
      found.push({ id, text, level: element.tagName === 'H2' ? 2 : 3 });
    }

    setHeadings(found);
  }, [containerRef, key]);

  return headings;
}

/** 读取当前滚动位置所在的标题，用于高亮右侧目录 */
export function useActiveHeading(headings: Heading[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (headings.length === 0) {
      setActiveId(undefined);
      return;
    }

    const update = () => {
      // 取最后一个已经滚过视口上沿的标题
      let current = headings[0]?.id;
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top <= 96) current = heading.id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [headings]);

  return activeId;
}
