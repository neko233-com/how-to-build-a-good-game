import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** 合并 Tailwind 类名，冲突时后者胜出（shadcn / ReactBits 组件的通用约定） */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * public/ 下的静态资源路径。
 * 站点部署在 GitHub Pages 子路径下，运行时拼出来的路径不会被 Vite 自动加 base 前缀，
 * 所以凡是 public/ 资源都要经过这里。
 */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
