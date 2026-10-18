import type { ReactNode } from 'react';

export interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
}

/** 从正文里「拔」出来强调的一句话，用于章节情绪的转折点 */
export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <aside className="my-10 border-y py-8">
      <p className="text-primary text-xl leading-relaxed font-semibold text-balance sm:text-2xl">
        {children}
      </p>
      {attribution ? <p className="text-muted-foreground mt-4 text-sm">— {attribution}</p> : null}
    </aside>
  );
}
