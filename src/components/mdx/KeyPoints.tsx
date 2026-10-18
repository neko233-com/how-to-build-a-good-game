import type { ReactNode } from 'react';

export interface KeyPointsProps {
  title?: string;
  items: ReactNode[];
}

/** 章节末尾的要点收束：让读者带走的是几句能复述的话 */
export function KeyPoints({ title = '这一章要记住的', items }: KeyPointsProps) {
  return (
    <section className="bg-muted/50 my-10 rounded-xl border p-6">
      <h2 className="mt-0 mb-4 border-0 pb-0 text-base font-semibold tracking-normal">{title}</h2>
      <ul className="space-y-3 pl-0">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-[0.9875rem] leading-relaxed">
            <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
