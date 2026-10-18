export { Callout } from './Callout';
export { CompareTable } from './CompareTable';
export { Figure } from './Figure';
export { KeyPoints } from './KeyPoints';
export { PullQuote } from './PullQuote';
export { QuoteCard } from './QuoteCard';
export { StatCard } from './StatCard';

import { Callout } from './Callout';
import { CompareTable } from './CompareTable';
import { Figure } from './Figure';
import { KeyPoints } from './KeyPoints';
import { PullQuote } from './PullQuote';
import { QuoteCard } from './QuoteCard';
import { StatCard } from './StatCard';

/**
 * 注入给 MDX 正文的组件表（见 vite.config.ts 的 providerImportSource）。
 * 正文里可以直接写 <QuoteCard … />，不必逐章 import。
 */
export const mdxComponents = {
  Callout,
  CompareTable,
  Figure,
  KeyPoints,
  PullQuote,
  QuoteCard,
  StatCard,
};
