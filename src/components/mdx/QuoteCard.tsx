export type Credibility = 'primary' | 'media' | 'secondary' | 'unverified';

export interface QuoteCardProps {
  quote: string;
  author: string;
  role?: string;
  /** 出处名称，例如「GDC 2011 主题演讲」 */
  source?: string;
  /** 出处链接。本书要求每条引述都能点回去核实 */
  sourceUrl?: string;
  credibility?: Credibility;
}

const CREDIBILITY: Record<Credibility, { label: string; className: string }> = {
  primary: {
    label: '一手来源',
    className: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  },
  media: {
    label: '权威媒体',
    className: 'border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400',
  },
  secondary: {
    label: '二手转述',
    className: 'border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400',
  },
  unverified: {
    label: '未核实',
    className: 'border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-400',
  },
};

/** 带出处与可信度分级的引述卡片 */
export function QuoteCard({
  quote,
  author,
  role,
  source,
  sourceUrl,
  credibility = 'secondary',
}: QuoteCardProps) {
  const badge = CREDIBILITY[credibility];

  return (
    <figure className="bg-card my-8 rounded-xl border p-6">
      <blockquote className="text-[1.0625rem] leading-relaxed">
        <p className="before:content-['“'] after:content-['”']">{quote}</p>
      </blockquote>

      <figcaption className="text-muted-foreground mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
        <span className="text-foreground font-medium">{author}</span>
        {role ? <span>{role}</span> : null}
        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${badge.className}`}>
          {badge.label}
        </span>
        {source ? (
          <span className="w-full sm:w-auto">
            {sourceUrl ? (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4"
              >
                {source}
              </a>
            ) : (
              <span>{source}</span>
            )}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
