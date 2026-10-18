import type { ComponentType } from 'react';

import type { Chapter } from '@/content/meta';

type MdxComponent = ComponentType<Record<string, unknown>>;

interface MdxModule {
  default: MdxComponent;
}

/**
 * 章节正文用 MDX 写，按 slug 与 meta.ts 对应：
 * 文件名即 slug，避免标题与编号在两处重复维护。
 */
const chapterModules = import.meta.glob<MdxModule>('../content/chapters/*.mdx', { eager: true });
const appendixModules = import.meta.glob<MdxModule>('../content/appendix/*.mdx', { eager: true });

function slugOf(path: string): string {
  return path.slice(path.lastIndexOf('/') + 1).replace(/\.mdx$/, '');
}

function toRegistry(modules: Record<string, MdxModule>): Map<string, MdxComponent> {
  const registry = new Map<string, MdxComponent>();
  for (const [path, module] of Object.entries(modules)) {
    registry.set(slugOf(path), module.default);
  }
  return registry;
}

const REGISTRY = new Map<string, MdxComponent>([
  ...toRegistry(chapterModules),
  ...toRegistry(appendixModules),
]);

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
