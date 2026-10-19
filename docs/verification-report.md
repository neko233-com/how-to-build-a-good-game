# 站点内容验证报告

- 运行时间：2026-10-19T12:53:40.287Z
- 覆盖范围：首页 + 25 个章节/附录 + 1 个不存在路径，深浅两种模式
- 每个章节均通过「深链接兜底」链路访问（模拟 GitHub Pages 对未命中路径返回 404.html）
- 断言总数：730
- 外部链接：37 条（失效 0、拦截 1、本机网络不可达 0）
- 结果：✅ 全部通过

> 本报告由 `node scripts/verify-site.mjs` 自动生成，请勿手工修改。

## 未通过项

无。


## 全部断言

| 断言 | 结果 | 说明 |
| --- | --- | --- |
| 静态服务器就绪 | ✅ | /how-to-build-a-good-game/ |
| 暗色 · 首页 渲染 | ✅ | 如何构建一个好游戏 |
| 暗色 · 首页 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game / 实际 /how-to-build-a-good-game |
| 暗色 · 首页 有正文容器 | ✅ |  |
| 暗色 · 首页 无残留 Markdown | ✅ |  |
| 暗色 · 首页 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · 首页 图片实际加载成功 | ✅ | 共 6 张，失败 0 张 |
| 暗色 · 首页 标题锚点唯一且非空 | ✅ | 共 0 个标题 |
| 暗色 · 首页 右侧目录与标题一一对应 | ✅ | 目录 0 项 / 标题 0 项 |
| 暗色 · 首页 文字对比度 ≥ 4.5 | ✅ | 已测 2 项，最低 7.11 |
| 暗色 · 首页 标题层级不跳级 | ✅ |  |
| 暗色 · 首页 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · 首页 页面标题包含书名 | ✅ | 如何构建一个好游戏 |
| 暗色 · 首页 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/preface 渲染 | ✅ | 序言：这本书想解决什么 |
| 暗色 · chapters/preface 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/preface / 实际 /how-to-build-a-good-game/chapters/preface |
| 暗色 · chapters/preface 有正文容器 | ✅ |  |
| 暗色 · chapters/preface 无残留 Markdown | ✅ |  |
| 暗色 · chapters/preface 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/preface 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/preface 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/preface 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/preface 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.12 |
| 暗色 · chapters/preface 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/preface 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/preface 页面标题包含书名 | ✅ | 序言：这本书想解决什么 · 如何构建一个好游戏 |
| 暗色 · chapters/preface 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/preface 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/nintendo-three-rulers 渲染 | ✅ | 任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项 |
| 暗色 · chapters/nintendo-three-rulers 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/nintendo-three-rulers / 实际 /how-to-build-a-good-game/chapters/nintendo-three-rulers |
| 暗色 · chapters/nintendo-three-rulers 有正文容器 | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 无残留 Markdown | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 图片实际加载成功 | ✅ | 共 1 张，失败 0 张 |
| 暗色 · chapters/nintendo-three-rulers 标题锚点唯一且非空 | ✅ | 共 6 个标题 |
| 暗色 · chapters/nintendo-three-rulers 右侧目录与标题一一对应 | ✅ | 目录 6 项 / 标题 6 项 |
| 暗色 · chapters/nintendo-three-rulers 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/nintendo-three-rulers 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/nintendo-three-rulers 页面标题包含书名 | ✅ | 任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项 · 如何构建一个好游戏 |
| 暗色 · chapters/nintendo-three-rulers 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 已完成章节至少有一张图 | ✅ | 正文内视觉元素 8 个 |
| 暗色 · chapters/what-masters-bet-on 渲染 | ✅ | 顶级创作者的原话：他们各自押注的是什么 |
| 暗色 · chapters/what-masters-bet-on 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/what-masters-bet-on / 实际 /how-to-build-a-good-game/chapters/what-masters-bet-on |
| 暗色 · chapters/what-masters-bet-on 有正文容器 | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 无残留 Markdown | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/what-masters-bet-on 标题锚点唯一且非空 | ✅ | 共 9 个标题 |
| 暗色 · chapters/what-masters-bet-on 右侧目录与标题一一对应 | ✅ | 目录 9 项 / 标题 9 项 |
| 暗色 · chapters/what-masters-bet-on 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 6.73 |
| 暗色 · chapters/what-masters-bet-on 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/what-masters-bet-on 页面标题包含书名 | ✅ | 顶级创作者的原话：他们各自押注的是什么 · 如何构建一个好游戏 |
| 暗色 · chapters/what-masters-bet-on 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/mechanics-of-fun 渲染 | ✅ | 好玩的机制学：核心循环、发现与惊喜、心流 |
| 暗色 · chapters/mechanics-of-fun 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/mechanics-of-fun / 实际 /how-to-build-a-good-game/chapters/mechanics-of-fun |
| 暗色 · chapters/mechanics-of-fun 有正文容器 | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 无残留 Markdown | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/mechanics-of-fun 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/mechanics-of-fun 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/mechanics-of-fun 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/mechanics-of-fun 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/mechanics-of-fun 页面标题包含书名 | ✅ | 好玩的机制学：核心循环、发现与惊喜、心流 · 如何构建一个好游戏 |
| 暗色 · chapters/mechanics-of-fun 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 已完成章节至少有一张图 | ✅ | 正文内视觉元素 6 个 |
| 暗色 · chapters/sixty-is-zero 渲染 | ✅ | 60 分就是 0 分：当及格线由同行决定 |
| 暗色 · chapters/sixty-is-zero 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/sixty-is-zero / 实际 /how-to-build-a-good-game/chapters/sixty-is-zero |
| 暗色 · chapters/sixty-is-zero 有正文容器 | ✅ |  |
| 暗色 · chapters/sixty-is-zero 无残留 Markdown | ✅ |  |
| 暗色 · chapters/sixty-is-zero 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/sixty-is-zero 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/sixty-is-zero 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/sixty-is-zero 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/sixty-is-zero 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/sixty-is-zero 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/sixty-is-zero 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/sixty-is-zero 页面标题包含书名 | ✅ | 60 分就是 0 分：当及格线由同行决定 · 如何构建一个好游戏 |
| 暗色 · chapters/sixty-is-zero 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/sixty-is-zero 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/competence-floor 渲染 | ✅ | 能力地板：同行的平均分，就是你的 0 分 |
| 暗色 · chapters/competence-floor 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/competence-floor / 实际 /how-to-build-a-good-game/chapters/competence-floor |
| 暗色 · chapters/competence-floor 有正文容器 | ✅ |  |
| 暗色 · chapters/competence-floor 无残留 Markdown | ✅ |  |
| 暗色 · chapters/competence-floor 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/competence-floor 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/competence-floor 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/competence-floor 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/competence-floor 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/competence-floor 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/competence-floor 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/competence-floor 页面标题包含书名 | ✅ | 能力地板：同行的平均分，就是你的 0 分 · 如何构建一个好游戏 |
| 暗色 · chapters/competence-floor 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/competence-floor 已完成章节至少有一张图 | ✅ | 正文内视觉元素 5 个 |
| 暗色 · chapters/market-structure 渲染 | ✅ | 客群与流量：为什么同一套数值模型必然出错 |
| 暗色 · chapters/market-structure 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/market-structure / 实际 /how-to-build-a-good-game/chapters/market-structure |
| 暗色 · chapters/market-structure 有正文容器 | ✅ |  |
| 暗色 · chapters/market-structure 无残留 Markdown | ✅ |  |
| 暗色 · chapters/market-structure 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/market-structure 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/market-structure 标题锚点唯一且非空 | ✅ | 共 9 个标题 |
| 暗色 · chapters/market-structure 右侧目录与标题一一对应 | ✅ | 目录 9 项 / 标题 9 项 |
| 暗色 · chapters/market-structure 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/market-structure 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/market-structure 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/market-structure 页面标题包含书名 | ✅ | 客群与流量：为什么同一套数值模型必然出错 · 如何构建一个好游戏 |
| 暗色 · chapters/market-structure 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/market-structure 已完成章节至少有一张图 | ✅ | 正文内视觉元素 2 个 |
| 暗色 · chapters/monetization-math 渲染 | ✅ | 商业化算术：定价、内购、广告与 LTV/CAC |
| 暗色 · chapters/monetization-math 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/monetization-math / 实际 /how-to-build-a-good-game/chapters/monetization-math |
| 暗色 · chapters/monetization-math 有正文容器 | ✅ |  |
| 暗色 · chapters/monetization-math 无残留 Markdown | ✅ |  |
| 暗色 · chapters/monetization-math 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/monetization-math 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/monetization-math 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/monetization-math 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/monetization-math 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/monetization-math 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/monetization-math 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/monetization-math 页面标题包含书名 | ✅ | 商业化算术：定价、内购、广告与 LTV/CAC · 如何构建一个好游戏 |
| 暗色 · chapters/monetization-math 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/monetization-math 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/cross-industry-principles 渲染 | ✅ | 可跨行业复用的商业原理 |
| 暗色 · chapters/cross-industry-principles 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/cross-industry-principles / 实际 /how-to-build-a-good-game/chapters/cross-industry-principles |
| 暗色 · chapters/cross-industry-principles 有正文容器 | ✅ |  |
| 暗色 · chapters/cross-industry-principles 无残留 Markdown | ✅ |  |
| 暗色 · chapters/cross-industry-principles 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/cross-industry-principles 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/cross-industry-principles 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/cross-industry-principles 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/cross-industry-principles 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/cross-industry-principles 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/cross-industry-principles 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/cross-industry-principles 页面标题包含书名 | ✅ | 可跨行业复用的商业原理 · 如何构建一个好游戏 |
| 暗色 · chapters/cross-industry-principles 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/cross-industry-principles 已完成章节至少有一张图 | ✅ | 正文内视觉元素 5 个 |
| 暗色 · chapters/theme-and-core-loop 渲染 | ✅ | 选题与主玩法：先决定卖给谁，再决定怎么玩 |
| 暗色 · chapters/theme-and-core-loop 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/theme-and-core-loop / 实际 /how-to-build-a-good-game/chapters/theme-and-core-loop |
| 暗色 · chapters/theme-and-core-loop 有正文容器 | ✅ |  |
| 暗色 · chapters/theme-and-core-loop 无残留 Markdown | ✅ |  |
| 暗色 · chapters/theme-and-core-loop 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/theme-and-core-loop 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/theme-and-core-loop 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/theme-and-core-loop 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/theme-and-core-loop 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/theme-and-core-loop 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/theme-and-core-loop 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/theme-and-core-loop 页面标题包含书名 | ✅ | 选题与主玩法：先决定卖给谁，再决定怎么玩 · 如何构建一个好游戏 |
| 暗色 · chapters/theme-and-core-loop 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/theme-and-core-loop 已完成章节至少有一张图 | ✅ | 正文内视觉元素 6 个 |
| 暗色 · chapters/gameplay-stacking 渲染 | ✅ | 副玩法与玩法组合：为什么几乎没人只做一个玩法 |
| 暗色 · chapters/gameplay-stacking 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/gameplay-stacking / 实际 /how-to-build-a-good-game/chapters/gameplay-stacking |
| 暗色 · chapters/gameplay-stacking 有正文容器 | ✅ |  |
| 暗色 · chapters/gameplay-stacking 无残留 Markdown | ✅ |  |
| 暗色 · chapters/gameplay-stacking 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/gameplay-stacking 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/gameplay-stacking 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/gameplay-stacking 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/gameplay-stacking 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/gameplay-stacking 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/gameplay-stacking 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/gameplay-stacking 页面标题包含书名 | ✅ | 副玩法与玩法组合：为什么几乎没人只做一个玩法 · 如何构建一个好游戏 |
| 暗色 · chapters/gameplay-stacking 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/gameplay-stacking 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/art-style 渲染 | ✅ | 美术风格：风格是市场选择，不是审美选择 |
| 暗色 · chapters/art-style 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/art-style / 实际 /how-to-build-a-good-game/chapters/art-style |
| 暗色 · chapters/art-style 有正文容器 | ✅ |  |
| 暗色 · chapters/art-style 无残留 Markdown | ✅ |  |
| 暗色 · chapters/art-style 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/art-style 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/art-style 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/art-style 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/art-style 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/art-style 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/art-style 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/art-style 页面标题包含书名 | ✅ | 美术风格：风格是市场选择，不是审美选择 · 如何构建一个好游戏 |
| 暗色 · chapters/art-style 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/art-style 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/game-feel 渲染 | ✅ | 手感：一套可以调出来的东西 |
| 暗色 · chapters/game-feel 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/game-feel / 实际 /how-to-build-a-good-game/chapters/game-feel |
| 暗色 · chapters/game-feel 有正文容器 | ✅ |  |
| 暗色 · chapters/game-feel 无残留 Markdown | ✅ |  |
| 暗色 · chapters/game-feel 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/game-feel 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/game-feel 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/game-feel 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/game-feel 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/game-feel 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/game-feel 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/game-feel 页面标题包含书名 | ✅ | 手感：一套可以调出来的东西 · 如何构建一个好游戏 |
| 暗色 · chapters/game-feel 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/game-feel 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/feedback-and-juice 渲染 | ✅ | 反馈感：飘字、震动、顿帧与音效的配方 |
| 暗色 · chapters/feedback-and-juice 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/feedback-and-juice / 实际 /how-to-build-a-good-game/chapters/feedback-and-juice |
| 暗色 · chapters/feedback-and-juice 有正文容器 | ✅ |  |
| 暗色 · chapters/feedback-and-juice 无残留 Markdown | ✅ |  |
| 暗色 · chapters/feedback-and-juice 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/feedback-and-juice 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/feedback-and-juice 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/feedback-and-juice 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/feedback-and-juice 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/feedback-and-juice 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/feedback-and-juice 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/feedback-and-juice 页面标题包含书名 | ✅ | 反馈感：飘字、震动、顿帧与音效的配方 · 如何构建一个好游戏 |
| 暗色 · chapters/feedback-and-juice 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/feedback-and-juice 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/2d-and-3d 渲染 | ✅ | 2D 与 3D：不是技术选择，而是市场定位 |
| 暗色 · chapters/2d-and-3d 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/2d-and-3d / 实际 /how-to-build-a-good-game/chapters/2d-and-3d |
| 暗色 · chapters/2d-and-3d 有正文容器 | ✅ |  |
| 暗色 · chapters/2d-and-3d 无残留 Markdown | ✅ |  |
| 暗色 · chapters/2d-and-3d 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/2d-and-3d 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/2d-and-3d 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/2d-and-3d 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/2d-and-3d 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/2d-and-3d 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/2d-and-3d 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/2d-and-3d 页面标题包含书名 | ✅ | 2D 与 3D：不是技术选择，而是市场定位 · 如何构建一个好游戏 |
| 暗色 · chapters/2d-and-3d 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/2d-and-3d 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/data-driven-why 渲染 | ✅ | 数值的虚假重要性：为什么完美的数值论证什么也证明不了 |
| 暗色 · chapters/data-driven-why 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/data-driven-why / 实际 /how-to-build-a-good-game/chapters/data-driven-why |
| 暗色 · chapters/data-driven-why 有正文容器 | ✅ |  |
| 暗色 · chapters/data-driven-why 无残留 Markdown | ✅ |  |
| 暗色 · chapters/data-driven-why 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/data-driven-why 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/data-driven-why 标题锚点唯一且非空 | ✅ | 共 9 个标题 |
| 暗色 · chapters/data-driven-why 右侧目录与标题一一对应 | ✅ | 目录 9 项 / 标题 9 项 |
| 暗色 · chapters/data-driven-why 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 6.73 |
| 暗色 · chapters/data-driven-why 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/data-driven-why 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/data-driven-why 页面标题包含书名 | ✅ | 数值的虚假重要性：为什么完美的数值论证什么也证明不了 · 如何构建一个好游戏 |
| 暗色 · chapters/data-driven-why 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/data-driven-why 已完成章节至少有一张图 | ✅ | 正文内视觉元素 7 个 |
| 暗色 · chapters/shorten-validation 渲染 | ✅ | 把验证时间压到最短：素材测试、试玩广告与灰盒原型 |
| 暗色 · chapters/shorten-validation 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/shorten-validation / 实际 /how-to-build-a-good-game/chapters/shorten-validation |
| 暗色 · chapters/shorten-validation 有正文容器 | ✅ |  |
| 暗色 · chapters/shorten-validation 无残留 Markdown | ✅ |  |
| 暗色 · chapters/shorten-validation 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/shorten-validation 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/shorten-validation 标题锚点唯一且非空 | ✅ | 共 11 个标题 |
| 暗色 · chapters/shorten-validation 右侧目录与标题一一对应 | ✅ | 目录 11 项 / 标题 11 项 |
| 暗色 · chapters/shorten-validation 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/shorten-validation 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/shorten-validation 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/shorten-validation 页面标题包含书名 | ✅ | 把验证时间压到最短：素材测试、试玩广告与灰盒原型 · 如何构建一个好游戏 |
| 暗色 · chapters/shorten-validation 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/shorten-validation 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/metrics-and-traps 渲染 | ✅ | 指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差 |
| 暗色 · chapters/metrics-and-traps 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/metrics-and-traps / 实际 /how-to-build-a-good-game/chapters/metrics-and-traps |
| 暗色 · chapters/metrics-and-traps 有正文容器 | ✅ |  |
| 暗色 · chapters/metrics-and-traps 无残留 Markdown | ✅ |  |
| 暗色 · chapters/metrics-and-traps 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/metrics-and-traps 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/metrics-and-traps 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/metrics-and-traps 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/metrics-and-traps 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/metrics-and-traps 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/metrics-and-traps 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/metrics-and-traps 页面标题包含书名 | ✅ | 指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差 · 如何构建一个好游戏 |
| 暗色 · chapters/metrics-and-traps 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/metrics-and-traps 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · chapters/from-zero-to-one 渲染 | ✅ | 从 0 到 1 的可执行检查清单 |
| 暗色 · chapters/from-zero-to-one 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/from-zero-to-one / 实际 /how-to-build-a-good-game/chapters/from-zero-to-one |
| 暗色 · chapters/from-zero-to-one 有正文容器 | ✅ |  |
| 暗色 · chapters/from-zero-to-one 无残留 Markdown | ✅ |  |
| 暗色 · chapters/from-zero-to-one 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/from-zero-to-one 图片实际加载成功 | ✅ | 共 1 张，失败 0 张 |
| 暗色 · chapters/from-zero-to-one 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/from-zero-to-one 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/from-zero-to-one 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/from-zero-to-one 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/from-zero-to-one 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/from-zero-to-one 页面标题包含书名 | ✅ | 从 0 到 1 的可执行检查清单 · 如何构建一个好游戏 |
| 暗色 · chapters/from-zero-to-one 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/from-zero-to-one 已完成章节至少有一张图 | ✅ | 正文内视觉元素 8 个 |
| 暗色 · chapters/how-games-die 渲染 | ✅ | 常见死法与复盘 |
| 暗色 · chapters/how-games-die 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/how-games-die / 实际 /how-to-build-a-good-game/chapters/how-games-die |
| 暗色 · chapters/how-games-die 有正文容器 | ✅ |  |
| 暗色 · chapters/how-games-die 无残留 Markdown | ✅ |  |
| 暗色 · chapters/how-games-die 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/how-games-die 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/how-games-die 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · chapters/how-games-die 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · chapters/how-games-die 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/how-games-die 标题层级不跳级 | ✅ |  |
| 暗色 · chapters/how-games-die 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · chapters/how-games-die 页面标题包含书名 | ✅ | 常见死法与复盘 · 如何构建一个好游戏 |
| 暗色 · chapters/how-games-die 站内链接指向存在的路由 | ✅ |  |
| 暗色 · chapters/how-games-die 已完成章节至少有一张图 | ✅ | 正文内视觉元素 2 个 |
| 暗色 · appendix/references 渲染 | ✅ | 附录 A：引用与出处总表 |
| 暗色 · appendix/references 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/references / 实际 /how-to-build-a-good-game/appendix/references |
| 暗色 · appendix/references 有正文容器 | ✅ |  |
| 暗色 · appendix/references 无残留 Markdown | ✅ |  |
| 暗色 · appendix/references 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/references 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/references 标题锚点唯一且非空 | ✅ | 共 11 个标题 |
| 暗色 · appendix/references 右侧目录与标题一一对应 | ✅ | 目录 11 项 / 标题 11 项 |
| 暗色 · appendix/references 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/references 标题层级不跳级 | ✅ |  |
| 暗色 · appendix/references 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · appendix/references 页面标题包含书名 | ✅ | 附录 A：引用与出处总表 · 如何构建一个好游戏 |
| 暗色 · appendix/references 站内链接指向存在的路由 | ✅ |  |
| 暗色 · appendix/references 已完成章节至少有一张图 | ✅ | 正文内视觉元素 8 个 |
| 暗色 · appendix/glossary 渲染 | ✅ | 附录 B：术语表 |
| 暗色 · appendix/glossary 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/glossary / 实际 /how-to-build-a-good-game/appendix/glossary |
| 暗色 · appendix/glossary 有正文容器 | ✅ |  |
| 暗色 · appendix/glossary 无残留 Markdown | ✅ |  |
| 暗色 · appendix/glossary 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/glossary 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/glossary 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · appendix/glossary 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · appendix/glossary 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/glossary 标题层级不跳级 | ✅ |  |
| 暗色 · appendix/glossary 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · appendix/glossary 页面标题包含书名 | ✅ | 附录 B：术语表 · 如何构建一个好游戏 |
| 暗色 · appendix/glossary 站内链接指向存在的路由 | ✅ |  |
| 暗色 · appendix/glossary 已完成章节至少有一张图 | ✅ | 正文内视觉元素 6 个 |
| 暗色 · appendix/bibliography 渲染 | ✅ | 附录 C：参考文献 |
| 暗色 · appendix/bibliography 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/bibliography / 实际 /how-to-build-a-good-game/appendix/bibliography |
| 暗色 · appendix/bibliography 有正文容器 | ✅ |  |
| 暗色 · appendix/bibliography 无残留 Markdown | ✅ |  |
| 暗色 · appendix/bibliography 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/bibliography 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/bibliography 标题锚点唯一且非空 | ✅ | 共 6 个标题 |
| 暗色 · appendix/bibliography 右侧目录与标题一一对应 | ✅ | 目录 6 项 / 标题 6 项 |
| 暗色 · appendix/bibliography 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/bibliography 标题层级不跳级 | ✅ |  |
| 暗色 · appendix/bibliography 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · appendix/bibliography 页面标题包含书名 | ✅ | 附录 C：参考文献 · 如何构建一个好游戏 |
| 暗色 · appendix/bibliography 站内链接指向存在的路由 | ✅ |  |
| 暗色 · appendix/bibliography 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 暗色 · appendix/worksheets 渲染 | ✅ | 附录 D：工作表与模板 |
| 暗色 · appendix/worksheets 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/worksheets / 实际 /how-to-build-a-good-game/appendix/worksheets |
| 暗色 · appendix/worksheets 有正文容器 | ✅ |  |
| 暗色 · appendix/worksheets 无残留 Markdown | ✅ |  |
| 暗色 · appendix/worksheets 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/worksheets 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/worksheets 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · appendix/worksheets 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · appendix/worksheets 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/worksheets 标题层级不跳级 | ✅ |  |
| 暗色 · appendix/worksheets 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · appendix/worksheets 页面标题包含书名 | ✅ | 附录 D：工作表与模板 · 如何构建一个好游戏 |
| 暗色 · appendix/worksheets 站内链接指向存在的路由 | ✅ |  |
| 暗色 · appendix/worksheets 已完成章节至少有一张图 | ✅ | 正文内视觉元素 7 个 |
| 暗色 · appendix/about 渲染 | ✅ | 附录 E：关于本书 |
| 暗色 · appendix/about 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/about / 实际 /how-to-build-a-good-game/appendix/about |
| 暗色 · appendix/about 有正文容器 | ✅ |  |
| 暗色 · appendix/about 无残留 Markdown | ✅ |  |
| 暗色 · appendix/about 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/about 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/about 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · appendix/about 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · appendix/about 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/about 标题层级不跳级 | ✅ |  |
| 暗色 · appendix/about 表格都有表头 | ✅ | 0 个无表头 |
| 暗色 · appendix/about 页面标题包含书名 | ✅ | 附录 E：关于本书 · 如何构建一个好游戏 |
| 暗色 · appendix/about 站内链接指向存在的路由 | ✅ |  |
| 暗色 · appendix/about 已完成章节至少有一张图 | ✅ | 正文内视觉元素 1 个 |
| 暗色 · 不存在的章节（应显示 404） 显示应用内 404 | ✅ | 正确 |
| 亮色 · 首页 渲染 | ✅ | 如何构建一个好游戏 |
| 亮色 · 首页 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game / 实际 /how-to-build-a-good-game |
| 亮色 · 首页 有正文容器 | ✅ |  |
| 亮色 · 首页 无残留 Markdown | ✅ |  |
| 亮色 · 首页 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · 首页 图片实际加载成功 | ✅ | 共 6 张，失败 0 张 |
| 亮色 · 首页 标题锚点唯一且非空 | ✅ | 共 0 个标题 |
| 亮色 · 首页 右侧目录与标题一一对应 | ✅ | 目录 0 项 / 标题 0 项 |
| 亮色 · 首页 文字对比度 ≥ 4.5 | ✅ | 已测 2 项，最低 5.89 |
| 亮色 · 首页 标题层级不跳级 | ✅ |  |
| 亮色 · 首页 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · 首页 页面标题包含书名 | ✅ | 如何构建一个好游戏 |
| 亮色 · 首页 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/preface 渲染 | ✅ | 序言：这本书想解决什么 |
| 亮色 · chapters/preface 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/preface / 实际 /how-to-build-a-good-game/chapters/preface |
| 亮色 · chapters/preface 有正文容器 | ✅ |  |
| 亮色 · chapters/preface 无残留 Markdown | ✅ |  |
| 亮色 · chapters/preface 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/preface 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/preface 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/preface 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/preface 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.91 |
| 亮色 · chapters/preface 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/preface 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/preface 页面标题包含书名 | ✅ | 序言：这本书想解决什么 · 如何构建一个好游戏 |
| 亮色 · chapters/preface 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/preface 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/nintendo-three-rulers 渲染 | ✅ | 任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项 |
| 亮色 · chapters/nintendo-three-rulers 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/nintendo-three-rulers / 实际 /how-to-build-a-good-game/chapters/nintendo-three-rulers |
| 亮色 · chapters/nintendo-three-rulers 有正文容器 | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 无残留 Markdown | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 图片实际加载成功 | ✅ | 共 1 张，失败 0 张 |
| 亮色 · chapters/nintendo-three-rulers 标题锚点唯一且非空 | ✅ | 共 6 个标题 |
| 亮色 · chapters/nintendo-three-rulers 右侧目录与标题一一对应 | ✅ | 目录 6 项 / 标题 6 项 |
| 亮色 · chapters/nintendo-three-rulers 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/nintendo-three-rulers 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/nintendo-three-rulers 页面标题包含书名 | ✅ | 任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项 · 如何构建一个好游戏 |
| 亮色 · chapters/nintendo-three-rulers 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 已完成章节至少有一张图 | ✅ | 正文内视觉元素 8 个 |
| 亮色 · chapters/what-masters-bet-on 渲染 | ✅ | 顶级创作者的原话：他们各自押注的是什么 |
| 亮色 · chapters/what-masters-bet-on 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/what-masters-bet-on / 实际 /how-to-build-a-good-game/chapters/what-masters-bet-on |
| 亮色 · chapters/what-masters-bet-on 有正文容器 | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 无残留 Markdown | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/what-masters-bet-on 标题锚点唯一且非空 | ✅ | 共 9 个标题 |
| 亮色 · chapters/what-masters-bet-on 右侧目录与标题一一对应 | ✅ | 目录 9 项 / 标题 9 项 |
| 亮色 · chapters/what-masters-bet-on 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/what-masters-bet-on 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/what-masters-bet-on 页面标题包含书名 | ✅ | 顶级创作者的原话：他们各自押注的是什么 · 如何构建一个好游戏 |
| 亮色 · chapters/what-masters-bet-on 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/mechanics-of-fun 渲染 | ✅ | 好玩的机制学：核心循环、发现与惊喜、心流 |
| 亮色 · chapters/mechanics-of-fun 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/mechanics-of-fun / 实际 /how-to-build-a-good-game/chapters/mechanics-of-fun |
| 亮色 · chapters/mechanics-of-fun 有正文容器 | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 无残留 Markdown | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/mechanics-of-fun 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/mechanics-of-fun 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/mechanics-of-fun 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/mechanics-of-fun 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/mechanics-of-fun 页面标题包含书名 | ✅ | 好玩的机制学：核心循环、发现与惊喜、心流 · 如何构建一个好游戏 |
| 亮色 · chapters/mechanics-of-fun 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 已完成章节至少有一张图 | ✅ | 正文内视觉元素 6 个 |
| 亮色 · chapters/sixty-is-zero 渲染 | ✅ | 60 分就是 0 分：当及格线由同行决定 |
| 亮色 · chapters/sixty-is-zero 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/sixty-is-zero / 实际 /how-to-build-a-good-game/chapters/sixty-is-zero |
| 亮色 · chapters/sixty-is-zero 有正文容器 | ✅ |  |
| 亮色 · chapters/sixty-is-zero 无残留 Markdown | ✅ |  |
| 亮色 · chapters/sixty-is-zero 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/sixty-is-zero 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/sixty-is-zero 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/sixty-is-zero 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/sixty-is-zero 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/sixty-is-zero 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/sixty-is-zero 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/sixty-is-zero 页面标题包含书名 | ✅ | 60 分就是 0 分：当及格线由同行决定 · 如何构建一个好游戏 |
| 亮色 · chapters/sixty-is-zero 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/sixty-is-zero 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/competence-floor 渲染 | ✅ | 能力地板：同行的平均分，就是你的 0 分 |
| 亮色 · chapters/competence-floor 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/competence-floor / 实际 /how-to-build-a-good-game/chapters/competence-floor |
| 亮色 · chapters/competence-floor 有正文容器 | ✅ |  |
| 亮色 · chapters/competence-floor 无残留 Markdown | ✅ |  |
| 亮色 · chapters/competence-floor 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/competence-floor 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/competence-floor 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/competence-floor 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/competence-floor 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/competence-floor 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/competence-floor 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/competence-floor 页面标题包含书名 | ✅ | 能力地板：同行的平均分，就是你的 0 分 · 如何构建一个好游戏 |
| 亮色 · chapters/competence-floor 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/competence-floor 已完成章节至少有一张图 | ✅ | 正文内视觉元素 5 个 |
| 亮色 · chapters/market-structure 渲染 | ✅ | 客群与流量：为什么同一套数值模型必然出错 |
| 亮色 · chapters/market-structure 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/market-structure / 实际 /how-to-build-a-good-game/chapters/market-structure |
| 亮色 · chapters/market-structure 有正文容器 | ✅ |  |
| 亮色 · chapters/market-structure 无残留 Markdown | ✅ |  |
| 亮色 · chapters/market-structure 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/market-structure 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/market-structure 标题锚点唯一且非空 | ✅ | 共 9 个标题 |
| 亮色 · chapters/market-structure 右侧目录与标题一一对应 | ✅ | 目录 9 项 / 标题 9 项 |
| 亮色 · chapters/market-structure 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/market-structure 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/market-structure 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/market-structure 页面标题包含书名 | ✅ | 客群与流量：为什么同一套数值模型必然出错 · 如何构建一个好游戏 |
| 亮色 · chapters/market-structure 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/market-structure 已完成章节至少有一张图 | ✅ | 正文内视觉元素 2 个 |
| 亮色 · chapters/monetization-math 渲染 | ✅ | 商业化算术：定价、内购、广告与 LTV/CAC |
| 亮色 · chapters/monetization-math 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/monetization-math / 实际 /how-to-build-a-good-game/chapters/monetization-math |
| 亮色 · chapters/monetization-math 有正文容器 | ✅ |  |
| 亮色 · chapters/monetization-math 无残留 Markdown | ✅ |  |
| 亮色 · chapters/monetization-math 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/monetization-math 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/monetization-math 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/monetization-math 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/monetization-math 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/monetization-math 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/monetization-math 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/monetization-math 页面标题包含书名 | ✅ | 商业化算术：定价、内购、广告与 LTV/CAC · 如何构建一个好游戏 |
| 亮色 · chapters/monetization-math 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/monetization-math 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/cross-industry-principles 渲染 | ✅ | 可跨行业复用的商业原理 |
| 亮色 · chapters/cross-industry-principles 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/cross-industry-principles / 实际 /how-to-build-a-good-game/chapters/cross-industry-principles |
| 亮色 · chapters/cross-industry-principles 有正文容器 | ✅ |  |
| 亮色 · chapters/cross-industry-principles 无残留 Markdown | ✅ |  |
| 亮色 · chapters/cross-industry-principles 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/cross-industry-principles 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/cross-industry-principles 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/cross-industry-principles 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/cross-industry-principles 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/cross-industry-principles 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/cross-industry-principles 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/cross-industry-principles 页面标题包含书名 | ✅ | 可跨行业复用的商业原理 · 如何构建一个好游戏 |
| 亮色 · chapters/cross-industry-principles 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/cross-industry-principles 已完成章节至少有一张图 | ✅ | 正文内视觉元素 5 个 |
| 亮色 · chapters/theme-and-core-loop 渲染 | ✅ | 选题与主玩法：先决定卖给谁，再决定怎么玩 |
| 亮色 · chapters/theme-and-core-loop 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/theme-and-core-loop / 实际 /how-to-build-a-good-game/chapters/theme-and-core-loop |
| 亮色 · chapters/theme-and-core-loop 有正文容器 | ✅ |  |
| 亮色 · chapters/theme-and-core-loop 无残留 Markdown | ✅ |  |
| 亮色 · chapters/theme-and-core-loop 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/theme-and-core-loop 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/theme-and-core-loop 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/theme-and-core-loop 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/theme-and-core-loop 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/theme-and-core-loop 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/theme-and-core-loop 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/theme-and-core-loop 页面标题包含书名 | ✅ | 选题与主玩法：先决定卖给谁，再决定怎么玩 · 如何构建一个好游戏 |
| 亮色 · chapters/theme-and-core-loop 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/theme-and-core-loop 已完成章节至少有一张图 | ✅ | 正文内视觉元素 6 个 |
| 亮色 · chapters/gameplay-stacking 渲染 | ✅ | 副玩法与玩法组合：为什么几乎没人只做一个玩法 |
| 亮色 · chapters/gameplay-stacking 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/gameplay-stacking / 实际 /how-to-build-a-good-game/chapters/gameplay-stacking |
| 亮色 · chapters/gameplay-stacking 有正文容器 | ✅ |  |
| 亮色 · chapters/gameplay-stacking 无残留 Markdown | ✅ |  |
| 亮色 · chapters/gameplay-stacking 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/gameplay-stacking 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/gameplay-stacking 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/gameplay-stacking 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/gameplay-stacking 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/gameplay-stacking 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/gameplay-stacking 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/gameplay-stacking 页面标题包含书名 | ✅ | 副玩法与玩法组合：为什么几乎没人只做一个玩法 · 如何构建一个好游戏 |
| 亮色 · chapters/gameplay-stacking 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/gameplay-stacking 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/art-style 渲染 | ✅ | 美术风格：风格是市场选择，不是审美选择 |
| 亮色 · chapters/art-style 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/art-style / 实际 /how-to-build-a-good-game/chapters/art-style |
| 亮色 · chapters/art-style 有正文容器 | ✅ |  |
| 亮色 · chapters/art-style 无残留 Markdown | ✅ |  |
| 亮色 · chapters/art-style 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/art-style 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/art-style 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/art-style 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/art-style 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/art-style 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/art-style 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/art-style 页面标题包含书名 | ✅ | 美术风格：风格是市场选择，不是审美选择 · 如何构建一个好游戏 |
| 亮色 · chapters/art-style 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/art-style 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/game-feel 渲染 | ✅ | 手感：一套可以调出来的东西 |
| 亮色 · chapters/game-feel 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/game-feel / 实际 /how-to-build-a-good-game/chapters/game-feel |
| 亮色 · chapters/game-feel 有正文容器 | ✅ |  |
| 亮色 · chapters/game-feel 无残留 Markdown | ✅ |  |
| 亮色 · chapters/game-feel 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/game-feel 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/game-feel 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/game-feel 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/game-feel 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/game-feel 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/game-feel 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/game-feel 页面标题包含书名 | ✅ | 手感：一套可以调出来的东西 · 如何构建一个好游戏 |
| 亮色 · chapters/game-feel 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/game-feel 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/feedback-and-juice 渲染 | ✅ | 反馈感：飘字、震动、顿帧与音效的配方 |
| 亮色 · chapters/feedback-and-juice 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/feedback-and-juice / 实际 /how-to-build-a-good-game/chapters/feedback-and-juice |
| 亮色 · chapters/feedback-and-juice 有正文容器 | ✅ |  |
| 亮色 · chapters/feedback-and-juice 无残留 Markdown | ✅ |  |
| 亮色 · chapters/feedback-and-juice 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/feedback-and-juice 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/feedback-and-juice 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/feedback-and-juice 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/feedback-and-juice 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/feedback-and-juice 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/feedback-and-juice 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/feedback-and-juice 页面标题包含书名 | ✅ | 反馈感：飘字、震动、顿帧与音效的配方 · 如何构建一个好游戏 |
| 亮色 · chapters/feedback-and-juice 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/feedback-and-juice 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/2d-and-3d 渲染 | ✅ | 2D 与 3D：不是技术选择，而是市场定位 |
| 亮色 · chapters/2d-and-3d 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/2d-and-3d / 实际 /how-to-build-a-good-game/chapters/2d-and-3d |
| 亮色 · chapters/2d-and-3d 有正文容器 | ✅ |  |
| 亮色 · chapters/2d-and-3d 无残留 Markdown | ✅ |  |
| 亮色 · chapters/2d-and-3d 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/2d-and-3d 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/2d-and-3d 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/2d-and-3d 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/2d-and-3d 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/2d-and-3d 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/2d-and-3d 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/2d-and-3d 页面标题包含书名 | ✅ | 2D 与 3D：不是技术选择，而是市场定位 · 如何构建一个好游戏 |
| 亮色 · chapters/2d-and-3d 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/2d-and-3d 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/data-driven-why 渲染 | ✅ | 数值的虚假重要性：为什么完美的数值论证什么也证明不了 |
| 亮色 · chapters/data-driven-why 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/data-driven-why / 实际 /how-to-build-a-good-game/chapters/data-driven-why |
| 亮色 · chapters/data-driven-why 有正文容器 | ✅ |  |
| 亮色 · chapters/data-driven-why 无残留 Markdown | ✅ |  |
| 亮色 · chapters/data-driven-why 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/data-driven-why 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/data-driven-why 标题锚点唯一且非空 | ✅ | 共 9 个标题 |
| 亮色 · chapters/data-driven-why 右侧目录与标题一一对应 | ✅ | 目录 9 项 / 标题 9 项 |
| 亮色 · chapters/data-driven-why 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/data-driven-why 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/data-driven-why 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/data-driven-why 页面标题包含书名 | ✅ | 数值的虚假重要性：为什么完美的数值论证什么也证明不了 · 如何构建一个好游戏 |
| 亮色 · chapters/data-driven-why 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/data-driven-why 已完成章节至少有一张图 | ✅ | 正文内视觉元素 7 个 |
| 亮色 · chapters/shorten-validation 渲染 | ✅ | 把验证时间压到最短：素材测试、试玩广告与灰盒原型 |
| 亮色 · chapters/shorten-validation 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/shorten-validation / 实际 /how-to-build-a-good-game/chapters/shorten-validation |
| 亮色 · chapters/shorten-validation 有正文容器 | ✅ |  |
| 亮色 · chapters/shorten-validation 无残留 Markdown | ✅ |  |
| 亮色 · chapters/shorten-validation 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/shorten-validation 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/shorten-validation 标题锚点唯一且非空 | ✅ | 共 11 个标题 |
| 亮色 · chapters/shorten-validation 右侧目录与标题一一对应 | ✅ | 目录 11 项 / 标题 11 项 |
| 亮色 · chapters/shorten-validation 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/shorten-validation 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/shorten-validation 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/shorten-validation 页面标题包含书名 | ✅ | 把验证时间压到最短：素材测试、试玩广告与灰盒原型 · 如何构建一个好游戏 |
| 亮色 · chapters/shorten-validation 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/shorten-validation 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/metrics-and-traps 渲染 | ✅ | 指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差 |
| 亮色 · chapters/metrics-and-traps 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/metrics-and-traps / 实际 /how-to-build-a-good-game/chapters/metrics-and-traps |
| 亮色 · chapters/metrics-and-traps 有正文容器 | ✅ |  |
| 亮色 · chapters/metrics-and-traps 无残留 Markdown | ✅ |  |
| 亮色 · chapters/metrics-and-traps 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/metrics-and-traps 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/metrics-and-traps 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/metrics-and-traps 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/metrics-and-traps 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/metrics-and-traps 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/metrics-and-traps 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/metrics-and-traps 页面标题包含书名 | ✅ | 指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差 · 如何构建一个好游戏 |
| 亮色 · chapters/metrics-and-traps 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/metrics-and-traps 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · chapters/from-zero-to-one 渲染 | ✅ | 从 0 到 1 的可执行检查清单 |
| 亮色 · chapters/from-zero-to-one 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/from-zero-to-one / 实际 /how-to-build-a-good-game/chapters/from-zero-to-one |
| 亮色 · chapters/from-zero-to-one 有正文容器 | ✅ |  |
| 亮色 · chapters/from-zero-to-one 无残留 Markdown | ✅ |  |
| 亮色 · chapters/from-zero-to-one 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/from-zero-to-one 图片实际加载成功 | ✅ | 共 1 张，失败 0 张 |
| 亮色 · chapters/from-zero-to-one 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/from-zero-to-one 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/from-zero-to-one 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/from-zero-to-one 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/from-zero-to-one 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/from-zero-to-one 页面标题包含书名 | ✅ | 从 0 到 1 的可执行检查清单 · 如何构建一个好游戏 |
| 亮色 · chapters/from-zero-to-one 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/from-zero-to-one 已完成章节至少有一张图 | ✅ | 正文内视觉元素 8 个 |
| 亮色 · chapters/how-games-die 渲染 | ✅ | 常见死法与复盘 |
| 亮色 · chapters/how-games-die 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/how-games-die / 实际 /how-to-build-a-good-game/chapters/how-games-die |
| 亮色 · chapters/how-games-die 有正文容器 | ✅ |  |
| 亮色 · chapters/how-games-die 无残留 Markdown | ✅ |  |
| 亮色 · chapters/how-games-die 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/how-games-die 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/how-games-die 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · chapters/how-games-die 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · chapters/how-games-die 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/how-games-die 标题层级不跳级 | ✅ |  |
| 亮色 · chapters/how-games-die 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · chapters/how-games-die 页面标题包含书名 | ✅ | 常见死法与复盘 · 如何构建一个好游戏 |
| 亮色 · chapters/how-games-die 站内链接指向存在的路由 | ✅ |  |
| 亮色 · chapters/how-games-die 已完成章节至少有一张图 | ✅ | 正文内视觉元素 2 个 |
| 亮色 · appendix/references 渲染 | ✅ | 附录 A：引用与出处总表 |
| 亮色 · appendix/references 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/references / 实际 /how-to-build-a-good-game/appendix/references |
| 亮色 · appendix/references 有正文容器 | ✅ |  |
| 亮色 · appendix/references 无残留 Markdown | ✅ |  |
| 亮色 · appendix/references 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/references 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/references 标题锚点唯一且非空 | ✅ | 共 11 个标题 |
| 亮色 · appendix/references 右侧目录与标题一一对应 | ✅ | 目录 11 项 / 标题 11 项 |
| 亮色 · appendix/references 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/references 标题层级不跳级 | ✅ |  |
| 亮色 · appendix/references 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · appendix/references 页面标题包含书名 | ✅ | 附录 A：引用与出处总表 · 如何构建一个好游戏 |
| 亮色 · appendix/references 站内链接指向存在的路由 | ✅ |  |
| 亮色 · appendix/references 已完成章节至少有一张图 | ✅ | 正文内视觉元素 8 个 |
| 亮色 · appendix/glossary 渲染 | ✅ | 附录 B：术语表 |
| 亮色 · appendix/glossary 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/glossary / 实际 /how-to-build-a-good-game/appendix/glossary |
| 亮色 · appendix/glossary 有正文容器 | ✅ |  |
| 亮色 · appendix/glossary 无残留 Markdown | ✅ |  |
| 亮色 · appendix/glossary 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/glossary 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/glossary 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · appendix/glossary 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · appendix/glossary 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/glossary 标题层级不跳级 | ✅ |  |
| 亮色 · appendix/glossary 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · appendix/glossary 页面标题包含书名 | ✅ | 附录 B：术语表 · 如何构建一个好游戏 |
| 亮色 · appendix/glossary 站内链接指向存在的路由 | ✅ |  |
| 亮色 · appendix/glossary 已完成章节至少有一张图 | ✅ | 正文内视觉元素 6 个 |
| 亮色 · appendix/bibliography 渲染 | ✅ | 附录 C：参考文献 |
| 亮色 · appendix/bibliography 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/bibliography / 实际 /how-to-build-a-good-game/appendix/bibliography |
| 亮色 · appendix/bibliography 有正文容器 | ✅ |  |
| 亮色 · appendix/bibliography 无残留 Markdown | ✅ |  |
| 亮色 · appendix/bibliography 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/bibliography 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/bibliography 标题锚点唯一且非空 | ✅ | 共 6 个标题 |
| 亮色 · appendix/bibliography 右侧目录与标题一一对应 | ✅ | 目录 6 项 / 标题 6 项 |
| 亮色 · appendix/bibliography 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/bibliography 标题层级不跳级 | ✅ |  |
| 亮色 · appendix/bibliography 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · appendix/bibliography 页面标题包含书名 | ✅ | 附录 C：参考文献 · 如何构建一个好游戏 |
| 亮色 · appendix/bibliography 站内链接指向存在的路由 | ✅ |  |
| 亮色 · appendix/bibliography 已完成章节至少有一张图 | ✅ | 正文内视觉元素 4 个 |
| 亮色 · appendix/worksheets 渲染 | ✅ | 附录 D：工作表与模板 |
| 亮色 · appendix/worksheets 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/worksheets / 实际 /how-to-build-a-good-game/appendix/worksheets |
| 亮色 · appendix/worksheets 有正文容器 | ✅ |  |
| 亮色 · appendix/worksheets 无残留 Markdown | ✅ |  |
| 亮色 · appendix/worksheets 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/worksheets 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/worksheets 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · appendix/worksheets 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · appendix/worksheets 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/worksheets 标题层级不跳级 | ✅ |  |
| 亮色 · appendix/worksheets 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · appendix/worksheets 页面标题包含书名 | ✅ | 附录 D：工作表与模板 · 如何构建一个好游戏 |
| 亮色 · appendix/worksheets 站内链接指向存在的路由 | ✅ |  |
| 亮色 · appendix/worksheets 已完成章节至少有一张图 | ✅ | 正文内视觉元素 7 个 |
| 亮色 · appendix/about 渲染 | ✅ | 附录 E：关于本书 |
| 亮色 · appendix/about 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/about / 实际 /how-to-build-a-good-game/appendix/about |
| 亮色 · appendix/about 有正文容器 | ✅ |  |
| 亮色 · appendix/about 无残留 Markdown | ✅ |  |
| 亮色 · appendix/about 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/about 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/about 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · appendix/about 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · appendix/about 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/about 标题层级不跳级 | ✅ |  |
| 亮色 · appendix/about 表格都有表头 | ✅ | 0 个无表头 |
| 亮色 · appendix/about 页面标题包含书名 | ✅ | 附录 E：关于本书 · 如何构建一个好游戏 |
| 亮色 · appendix/about 站内链接指向存在的路由 | ✅ |  |
| 亮色 · appendix/about 已完成章节至少有一张图 | ✅ | 正文内视觉元素 1 个 |
| 亮色 · 不存在的章节（应显示 404） 显示应用内 404 | ✅ | 正确 |
| 外部链接健康（共 37 条，失效 0 条） | ✅ |  |

## 外部链接健康

分类口径：**失效**（404/5xx，真问题）；**站点拦截**（401/403/429，不接受自动请求，需人工在浏览器确认）；**本机网络无法访问**（校验环境的网络限制，不等于链接失效）。

| 状态 | 状态码 | 链接 |
| --- | --- | --- |
| ✅ 可访问 | 200 | http://www.gamelook.com.cn/2024/01/536001 |
| ✅ 可访问 | 200 | https://apps.apple.com/cn/app/id6450645450 |
| ✅ 可访问 | 200 | https://developers.weixin.qq.com/minigame/introduction/commercialization/guide/ad-monetization.html |
| ✅ 可访问 | 200 | https://en.wikipedia.org/wiki/Campbell%27s_law |
| ✅ 可访问 | 200 | https://en.wikipedia.org/wiki/Goodhart%27s_law |
| ✅ 可访问 | 200 | https://en.wikipedia.org/wiki/Hindsight_bias |
| ✅ 可访问 | 200 | https://en.wikipedia.org/wiki/Just-so_story |
| ✅ 可访问 | 200 | https://en.wikipedia.org/wiki/Survivorship_bias |
| ✅ 可访问 | 200 | https://en.wikipedia.org/wiki/Texas_sharpshooter_fallacy |
| ✅ 可访问 | 200 | https://flashofsteel.com/index.php/2008/07/07/quote-misquote-cite |
| ✅ 可访问 | 200 | https://fs.blog/is-everything-obvious-once-you-know-the-answer |
| ✅ 可访问 | 200 | https://game.watch.impress.co.jp/docs/news/430831.html |
| ✅ 可访问 | 200 | https://github.com/neko233-com/how-to-build-a-good-game |
| ✅ 可访问 | 200 | https://github.com/neko233-com/how-to-build-a-good-game/issues |
| ✅ 可访问 | 200 | https://hbr.org/2003/07/delusions-of-success-how-optimism-undermines-executives-decisions |
| ✅ 可访问 | 200 | https://press.princeton.edu/books/hardcover/9780691174952/the-tyranny-of-metrics |
| ✅ 可访问 | 203 | https://pubmed.ncbi.nlm.nih.gov/16469928 |
| ✅ 可访问 | 200 | https://quoteinvestigator.com/2018/02/12/movies |
| ✅ 可访问 | 200 | https://sensortower.com/blog/genshin-impact-one-billion-revenue |
| ✅ 可访问 | 200 | https://shmuplations.com/miyamotodesign |
| ✅ 可访问 | 200 | https://time.com/3747342/nintendo-ceo-satoru-iwata |
| ✅ 可访问 | 200 | https://training.tencentads.com/uploads/202406/XjoUfkBl_ExGwb9.pdf |
| ✅ 可访问 | 200 | https://www.21jingji.com/article/20250708/herald/9f7cfc40d29ae0a1f9d9daac629e0972.html |
| ✅ 可访问 | 200 | https://www.4gamer.net/games/129/G012964/20110303003 |
| ⚠️ 站点拦截自动请求 | 403 | https://www.bakerinstitute.org/research/china-and-globalization-gaming-industry |
| ✅ 可访问 | 200 | https://www.bbc.com/news/newsbeat-58707297 |
| ✅ 可访问 | 200 | https://www.cna.org/reports/2022/09/Goodharts-Law-Recognizing-Mitigating-Manipulation-Measures-in-Analysis.pdf |
| ✅ 可访问 | 200 | https://www.gamedeveloper.com/business/video-satoru-iwata-s-heart-of-a-gamer-keynote-at-gdc-2005 |
| ✅ 可访问 | 200 | https://www.gameres.com/901203031.html |
| ✅ 可访问 | 200 | https://www.gamesindustry.biz/the-games-industry-is-stifled-by-a-culture-of-fear |
| ✅ 可访问 | 200 | https://www.itmedia.co.jp/makoto/articles/1002/10/news012_5.html |
| ✅ 可访问 | 200 | https://www.lennysnewsletter.com/p/geoffrey-moore-on-finding-your-beachhead |
| ✅ 可访问 | 200 | https://www.nintendo.co.jp/event/gdc2011/index.html |
| ✅ 可访问 | 200 | https://www.princeton.edu/~mjs3/salganik_dodds_watts06_full.pdf |
| ✅ 可访问 | 200 | https://www.stcn.com/article/detail/1449474.html |
| ✅ 可访问 | 200 | https://www.youtube.com/@sora_sakurai_jp |
| ✅ 可访问 | 200 | https://www.youtube.com/watch?v=5_0dVHMpJlo |
