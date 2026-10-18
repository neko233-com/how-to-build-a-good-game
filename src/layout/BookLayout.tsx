import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { slugFromPath } from '@/content/meta';
import { SiteHeader } from '@/layout/SiteHeader';
import { Sidebar } from '@/layout/Sidebar';
import type { Theme } from '@/lib/theme';
import { useTheme } from '@/lib/theme';

/** 通过 Outlet context 把当前主题传给页面，供需要感知明暗的组件（如 ReactBits 的卡片效果）使用 */
export interface BookOutletContext {
  theme: Theme;
}

/** 站点外壳：固定头部 + 可折叠目录 + 正文区，章节页与首页共用 */
export function BookLayout() {
  const { theme, toggle } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();

  // 切换章节后自动收起移动端目录
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh">
      <SiteHeader
        theme={theme}
        onToggleTheme={toggle}
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((open) => !open)}
      />

      <a
        href="#content"
        className="focus:bg-background sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm"
      >
        跳到正文
      </a>

      <div className="mx-auto flex w-full max-w-[84rem] gap-10 px-4 sm:px-6">
        <Sidebar
          activeSlug={slugFromPath(pathname)}
          open={navOpen}
          onClose={() => setNavOpen(false)}
        />
        <main id="content" className="min-w-0 flex-1 py-10 lg:py-14">
          <Outlet context={{ theme }} />
        </main>
      </div>
    </div>
  );
}
