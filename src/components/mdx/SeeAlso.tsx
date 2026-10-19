import { Link } from 'react-router-dom';

import { type Chapter, chapterHref, findChapter } from '@/content/meta';

export interface SeeAlsoItem {
  /** 目标章节的 slug（必须存在于 meta.ts） */
  slug: string;
  /** 一句话说明为什么该去读这一章 */
  note?: string;
}

export interface SeeAlsoProps {
  title?: string;
  items: SeeAlsoItem[];
}

/**
 * 章节末尾的延伸阅读。
 * 每一条都要写明「为什么相关」——只列标题的链接列表没有信息量。
 * 查不到的 slug 会被静默跳过，避免正文写错一个字就整页崩掉。
 */
export function SeeAlso({ title = '延伸阅读', items }: SeeAlsoProps) {
  const resolved = items
    .map((item) => ({ chapter: findChapter(item.slug), note: item.note }))
    .filter((entry): entry is { chapter: Chapter; note?: string } => entry.chapter !== undefined);

  if (resolved.length === 0) return null;

  return (
    <section className="my-10 rounded-xl border p-6">
      <h2 className="mt-0 mb-4 border-0 pb-0 text-base font-semibold tracking-normal">{title}</h2>
      <ul className="space-y-3 pl-0">
        {resolved.map((entry) => (
          <li key={entry.chapter.slug} className="text-[0.9875rem] leading-relaxed">
            <Link to={chapterHref(entry.chapter)} className="font-medium">
              {entry.chapter.order} · {entry.chapter.short}
            </Link>
            {entry.note ? <span className="text-muted-foreground"> —— {entry.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
