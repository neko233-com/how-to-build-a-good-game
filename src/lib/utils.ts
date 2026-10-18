import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** 合并 Tailwind 类名，冲突时后者胜出（shadcn / ReactBits 组件的通用约定） */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
