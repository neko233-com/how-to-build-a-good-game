import { compile } from '@mdx-js/mdx';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import remarkGfm from 'remark-gfm';
import { describe, expect, it } from 'vitest';

/**
 * MDX 语法守卫。
 *
 * 这里守的是**静默失败**：不报错、不中断构建，
 * 但读者会在正文里直接看到字面星号（`**`）或错位的结构。
 * 它们都源于 CommonMark 的强调规则与 CJK 标点的边界行为，
 * 已在真实写作中踩过三次，因此固化下来。
 *
 * 注意：不要用正则去判断「粗体里有没有 CJK 引号」这类问题——
 * 正则无法区分开标签与闭标签，会跨粗体片段误报。
 * 唯一可靠的办法是让真正的编译器跑一遍。
 */

const CONTENT_DIRS = ['chapters', 'appendix'];

function listMdxFiles(): Array<{ name: string; source: string }> {
  const files: Array<{ name: string; source: string }> = [];
  for (const dir of CONTENT_DIRS) {
    const absolute = join(process.cwd(), 'src/content', dir);
    for (const name of readdirSync(absolute).filter((file) => file.endsWith('.mdx'))) {
      files.push({ name: `${dir}/${name}`, source: readFileSync(join(absolute, name), 'utf8') });
    }
  }
  return files;
}

/** 容器类组件：有子内容，必须显式闭合 */
const CONTAINER_TAGS = ['Callout', 'CompareTable', 'PullQuote', 'KeyPoints', 'SeeAlso', 'Figure'];

describe('MDX 正文语法', () => {
  const files = listMdxFiles();

  it('至少扫描到全部章节与附录', () => {
    expect(files.length).toBeGreaterThanOrEqual(17);
  });

  it('容器组件的 JSX 标签全部配平', () => {
    const problems: string[] = [];

    for (const file of files) {
      for (const tag of CONTAINER_TAGS) {
        const opened = (file.source.match(new RegExp(`<${tag}\\b`, 'g')) ?? []).length;
        // 自闭合可能跨行（属性很多），[^>]* 能跨行匹配
        const selfClosed = (file.source.match(new RegExp(`<${tag}\\b[^>]*/>`, 'g')) ?? []).length;
        const closed = (file.source.match(new RegExp(`</${tag}>`, 'g')) ?? []).length;
        const needsClosing = opened - selfClosed;

        if (needsClosing !== closed) {
          problems.push(
            `${file.name} <${tag}>：需要闭合 ${needsClosing} 个，实际闭合 ${closed} 个`,
          );
        }
      }
    }

    expect(problems).toEqual([]);
  });

  it('用真正的 MDX 编译器跑一遍，不残留字面星号', async () => {
    const problems: string[] = [];

    for (const file of files) {
      const output = String(await compile(file.source, { remarkPlugins: [remarkGfm] }));
      if (output.includes('**')) problems.push(file.name);
    }

    // 失败时看这里：文件名会告诉你哪一章的粗体被解析成了字面星号
    expect(problems).toEqual([]);
  });

  it('正文与清单引用的图片都真实存在', () => {
    // 重命名图片后最容易漏的是正文里的 <Figure src="…">：
    // 构建不会报错，但线上会是一张破图。这里在测试阶段就拦下。
    const missing: string[] = [];

    for (const file of files) {
      for (const match of file.source.matchAll(/src="(images\/[^"]+)"/g)) {
        if (!existsSync(join(process.cwd(), 'public', match[1]))) {
          missing.push(`${file.name} → ${match[1]}`);
        }
      }
    }

    const meta = readFileSync(join(process.cwd(), 'src/content/meta.ts'), 'utf8');
    for (const match of meta.matchAll(/src: '(images\/[^']+)'/g)) {
      if (!existsSync(join(process.cwd(), 'public', match[1]))) {
        missing.push(`meta.ts → ${match[1]}`);
      }
    }

    expect(missing).toEqual([]);
  });
});
