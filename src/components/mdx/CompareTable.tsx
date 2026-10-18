import type { ReactNode } from 'react';

export interface CompareTableProps {
  caption?: ReactNode;
  children: ReactNode;
}

/**
 * 包住 Markdown 表格，负责横向滚动与边框；表格的排版细节交给 .prose-book。
 * 用它而不是直接写 Markdown 表格，是为了在窄屏上不把正文撑破。
 */
export function CompareTable({ caption, children }: CompareTableProps) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-xl border">
        <div className="[&_table]:w-full [&_table]:border-collapse [&_th]:bg-muted/60 [&_td]:border-t [&_th]:border-b [&_td]:px-4 [&_td]:py-3 [&_th]:px-4 [&_th]:py-3 [&_td]:text-left [&_th]:text-left [&_td]:align-top [&_td]:text-sm [&_th]:text-sm [&_th]:font-semibold">
          {children}
        </div>
      </div>
      {caption ? (
        <figcaption className="text-muted-foreground mt-3 text-center text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
