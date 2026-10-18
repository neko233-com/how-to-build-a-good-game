import { describe, expect, it } from 'vitest';

import { slugifyHeading } from '@/lib/toc';

describe('标题锚点生成', () => {
  it('保留中文，让中文标题也有可读锚点', () => {
    expect(slugifyHeading('任天堂的三把尺子')).toBe('任天堂的三把尺子');
  });

  it('去掉中英文标点，并把空格换成连字符', () => {
    expect(slugifyHeading('60 分就是 0 分：当及格线由同行决定')).toBe(
      '60-分就是-0-分当及格线由同行决定',
    );
  });

  it('压缩连续连字符并去掉首尾连字符', () => {
    expect(slugifyHeading('  D1 / D7 —— 留存  ')).toBe('d1-d7-留存');
  });
});
