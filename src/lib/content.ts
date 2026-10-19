import type { ComponentType } from 'react';

import type { Chapter } from '@/content/meta';

type MdxComponent = ComponentType<Record<string, unknown>>;

interface MdxModule {
  default: MdxComponent;
}

/**
 * 章节正文用 MDX 写，按 slug 与 meta.ts 对应：
 * 文件名即 slug，避免标题与编号在两处重复维护。
 *
 * 两个目录一次收集完，免得新增目录时还要改两处。
 *
 * 注意：Vite 把 import.meta.glob 的展开结果烘进本文件的转换产物里，
 * 而那份缓存以**文件内容哈希**为键。所以新增 mdx 之后，如果本文件没变，
 * 开发期的测试会读不到新文件（构建不受影响）。
 * 处理办法：改动本文件的内容，或删除 node_modules/.vite。
 * 对应的报错线索见 content.test.ts 的提示。
 */
const modules = import.meta.glob<MdxModule>(
  ['../content/chapters/*.mdx', '../content/appendix/*.mdx'],
  { eager: true },
);

function slugOf(path: string): string {
  return path.slice(path.lastIndexOf('/') + 1).replace(/\.mdx$/, '');
}

function toRegistry(entries: Record<string, MdxModule>): Map<string, MdxComponent> {
  const registry = new Map<string, MdxComponent>();
  for (const [path, module] of Object.entries(entries)) {
    registry.set(slugOf(path), module.default);
  }
  return registry;
}

const REGISTRY = toRegistry(modules);

/** 取某章正文组件；章节已建但正文未写时返回 undefined */
export function getChapterBody(chapter: Chapter | undefined): MdxComponent | undefined {
  return chapter ? REGISTRY.get(chapter.slug) : undefined;
}

export function hasBody(chapter: Chapter): boolean {
  return REGISTRY.has(chapter.slug);
}

/** 已存在的正文文件 slug 列表，用于检查 meta 与正文文件是否一一对应 */
export function chapterRegistrySlugs(): string[] {
  return [...REGISTRY.keys()];
}
