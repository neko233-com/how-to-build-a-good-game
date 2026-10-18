import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'hbg-theme';

function readInitialTheme(): Theme {
  // index.html 里的内联脚本已经在首屏绘制前把主题写到 <html> 上，
  // 这里直接读 DOM，保证 React 的初始状态与已经渲染出来的画面一致。
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

/** 明暗模式：首屏由 index.html 决定（无闪烁），用户切换后写入 localStorage */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }, [theme]);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    // 只记住用户明确选择过的主题；没点过就一直跟随系统设置
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
