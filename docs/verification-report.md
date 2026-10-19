# 站点内容验证报告

- 运行时间：2026-10-19T01:56:06.579Z
- 覆盖范围：首页 + 17 个章节/附录 + 1 个不存在路径，深浅两种模式
- 每个章节均通过「深链接兜底」链路访问（模拟 GitHub Pages 对未命中路径返回 404.html）
- 断言总数：327
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
| 暗色 · 首页 图片实际加载成功 | ✅ | 共 5 张，失败 0 张 |
| 暗色 · 首页 标题锚点唯一且非空 | ✅ | 共 0 个标题 |
| 暗色 · 首页 右侧目录与标题一一对应 | ✅ | 目录 0 项 / 标题 0 项 |
| 暗色 · 首页 文字对比度 ≥ 4.5 | ✅ | 已测 2 项，最低 7.11 |
| 暗色 · chapters/preface 渲染 | ✅ | 序言：这本书想解决什么 |
| 暗色 · chapters/preface 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/preface / 实际 /how-to-build-a-good-game/chapters/preface |
| 暗色 · chapters/preface 有正文容器 | ✅ |  |
| 暗色 · chapters/preface 无残留 Markdown | ✅ |  |
| 暗色 · chapters/preface 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/preface 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/preface 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/preface 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/preface 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.12 |
| 暗色 · chapters/nintendo-three-rulers 渲染 | ✅ | 任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项 |
| 暗色 · chapters/nintendo-three-rulers 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/nintendo-three-rulers / 实际 /how-to-build-a-good-game/chapters/nintendo-three-rulers |
| 暗色 · chapters/nintendo-three-rulers 有正文容器 | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 无残留 Markdown | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/nintendo-three-rulers 图片实际加载成功 | ✅ | 共 1 张，失败 0 张 |
| 暗色 · chapters/nintendo-three-rulers 标题锚点唯一且非空 | ✅ | 共 5 个标题 |
| 暗色 · chapters/nintendo-three-rulers 右侧目录与标题一一对应 | ✅ | 目录 5 项 / 标题 5 项 |
| 暗色 · chapters/nintendo-three-rulers 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/what-masters-bet-on 渲染 | ✅ | 顶级创作者的原话：他们各自押注的是什么 |
| 暗色 · chapters/what-masters-bet-on 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/what-masters-bet-on / 实际 /how-to-build-a-good-game/chapters/what-masters-bet-on |
| 暗色 · chapters/what-masters-bet-on 有正文容器 | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 无残留 Markdown | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/what-masters-bet-on 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/what-masters-bet-on 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/what-masters-bet-on 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/what-masters-bet-on 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.11 |
| 暗色 · chapters/mechanics-of-fun 渲染 | ✅ | 好玩的机制学：核心循环、发现与惊喜、心流 |
| 暗色 · chapters/mechanics-of-fun 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/mechanics-of-fun / 实际 /how-to-build-a-good-game/chapters/mechanics-of-fun |
| 暗色 · chapters/mechanics-of-fun 有正文容器 | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 无残留 Markdown | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/mechanics-of-fun 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/mechanics-of-fun 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/mechanics-of-fun 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/mechanics-of-fun 文字对比度 ≥ 4.5 | ✅ | 已测 6 项，最低 7.11 |
| 暗色 · chapters/sixty-is-zero 渲染 | ✅ | 60 分就是 0 分：当及格线由同行决定 |
| 暗色 · chapters/sixty-is-zero 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/sixty-is-zero / 实际 /how-to-build-a-good-game/chapters/sixty-is-zero |
| 暗色 · chapters/sixty-is-zero 有正文容器 | ✅ |  |
| 暗色 · chapters/sixty-is-zero 无残留 Markdown | ✅ |  |
| 暗色 · chapters/sixty-is-zero 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/sixty-is-zero 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/sixty-is-zero 标题锚点唯一且非空 | ✅ | 共 6 个标题 |
| 暗色 · chapters/sixty-is-zero 右侧目录与标题一一对应 | ✅ | 目录 6 项 / 标题 6 项 |
| 暗色 · chapters/sixty-is-zero 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/competence-floor 渲染 | ✅ | 能力地板：同行的平均分，就是你的 0 分 |
| 暗色 · chapters/competence-floor 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/competence-floor / 实际 /how-to-build-a-good-game/chapters/competence-floor |
| 暗色 · chapters/competence-floor 有正文容器 | ✅ |  |
| 暗色 · chapters/competence-floor 无残留 Markdown | ✅ |  |
| 暗色 · chapters/competence-floor 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/competence-floor 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/competence-floor 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/competence-floor 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/competence-floor 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.11 |
| 暗色 · chapters/market-structure 渲染 | ✅ | 客群与流量：为什么同一套数值模型必然出错 |
| 暗色 · chapters/market-structure 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/market-structure / 实际 /how-to-build-a-good-game/chapters/market-structure |
| 暗色 · chapters/market-structure 有正文容器 | ✅ |  |
| 暗色 · chapters/market-structure 无残留 Markdown | ✅ |  |
| 暗色 · chapters/market-structure 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/market-structure 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/market-structure 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/market-structure 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/market-structure 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/monetization-math 渲染 | ✅ | 商业化算术：定价、内购、广告与 LTV/CAC |
| 暗色 · chapters/monetization-math 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/monetization-math / 实际 /how-to-build-a-good-game/chapters/monetization-math |
| 暗色 · chapters/monetization-math 有正文容器 | ✅ |  |
| 暗色 · chapters/monetization-math 无残留 Markdown | ✅ |  |
| 暗色 · chapters/monetization-math 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/monetization-math 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/monetization-math 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/monetization-math 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/monetization-math 文字对比度 ≥ 4.5 | ✅ | 已测 6 项，最低 7.11 |
| 暗色 · chapters/cross-industry-principles 渲染 | ✅ | 可跨行业复用的商业原理 |
| 暗色 · chapters/cross-industry-principles 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/cross-industry-principles / 实际 /how-to-build-a-good-game/chapters/cross-industry-principles |
| 暗色 · chapters/cross-industry-principles 有正文容器 | ✅ |  |
| 暗色 · chapters/cross-industry-principles 无残留 Markdown | ✅ |  |
| 暗色 · chapters/cross-industry-principles 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/cross-industry-principles 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/cross-industry-principles 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/cross-industry-principles 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/cross-industry-principles 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.11 |
| 暗色 · chapters/data-driven-why 渲染 | ✅ | 数值的虚假重要性：为什么完美的数值论证什么也证明不了 |
| 暗色 · chapters/data-driven-why 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/data-driven-why / 实际 /how-to-build-a-good-game/chapters/data-driven-why |
| 暗色 · chapters/data-driven-why 有正文容器 | ✅ |  |
| 暗色 · chapters/data-driven-why 无残留 Markdown | ✅ |  |
| 暗色 · chapters/data-driven-why 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/data-driven-why 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/data-driven-why 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 暗色 · chapters/data-driven-why 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 暗色 · chapters/data-driven-why 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 6.73 |
| 暗色 · chapters/shorten-validation 渲染 | ✅ | 把验证时间压到最短：素材测试、试玩广告与灰盒原型 |
| 暗色 · chapters/shorten-validation 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/shorten-validation / 实际 /how-to-build-a-good-game/chapters/shorten-validation |
| 暗色 · chapters/shorten-validation 有正文容器 | ✅ |  |
| 暗色 · chapters/shorten-validation 无残留 Markdown | ✅ |  |
| 暗色 · chapters/shorten-validation 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/shorten-validation 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/shorten-validation 标题锚点唯一且非空 | ✅ | 共 10 个标题 |
| 暗色 · chapters/shorten-validation 右侧目录与标题一一对应 | ✅ | 目录 10 项 / 标题 10 项 |
| 暗色 · chapters/shorten-validation 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 7.11 |
| 暗色 · chapters/metrics-and-traps 渲染 | ✅ | 指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差 |
| 暗色 · chapters/metrics-and-traps 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/metrics-and-traps / 实际 /how-to-build-a-good-game/chapters/metrics-and-traps |
| 暗色 · chapters/metrics-and-traps 有正文容器 | ✅ |  |
| 暗色 · chapters/metrics-and-traps 无残留 Markdown | ✅ |  |
| 暗色 · chapters/metrics-and-traps 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/metrics-and-traps 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/metrics-and-traps 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/metrics-and-traps 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/metrics-and-traps 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.11 |
| 暗色 · chapters/from-zero-to-one 渲染 | ✅ | 从 0 到 1 的可执行检查清单 |
| 暗色 · chapters/from-zero-to-one 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/from-zero-to-one / 实际 /how-to-build-a-good-game/chapters/from-zero-to-one |
| 暗色 · chapters/from-zero-to-one 有正文容器 | ✅ |  |
| 暗色 · chapters/from-zero-to-one 无残留 Markdown | ✅ |  |
| 暗色 · chapters/from-zero-to-one 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/from-zero-to-one 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/from-zero-to-one 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/from-zero-to-one 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/from-zero-to-one 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.11 |
| 暗色 · chapters/how-games-die 渲染 | ✅ | 常见死法与复盘 |
| 暗色 · chapters/how-games-die 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/how-games-die / 实际 /how-to-build-a-good-game/chapters/how-games-die |
| 暗色 · chapters/how-games-die 有正文容器 | ✅ |  |
| 暗色 · chapters/how-games-die 无残留 Markdown | ✅ |  |
| 暗色 · chapters/how-games-die 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · chapters/how-games-die 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · chapters/how-games-die 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 暗色 · chapters/how-games-die 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 暗色 · chapters/how-games-die 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 7.11 |
| 暗色 · appendix/references 渲染 | ✅ | 附录 A：引用与出处总表 |
| 暗色 · appendix/references 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/references / 实际 /how-to-build-a-good-game/appendix/references |
| 暗色 · appendix/references 有正文容器 | ✅ |  |
| 暗色 · appendix/references 无残留 Markdown | ✅ |  |
| 暗色 · appendix/references 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/references 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/references 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 暗色 · appendix/references 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 暗色 · appendix/references 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/glossary 渲染 | ✅ | 附录 B：术语表 |
| 暗色 · appendix/glossary 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/glossary / 实际 /how-to-build-a-good-game/appendix/glossary |
| 暗色 · appendix/glossary 有正文容器 | ✅ |  |
| 暗色 · appendix/glossary 无残留 Markdown | ✅ |  |
| 暗色 · appendix/glossary 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/glossary 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/glossary 标题锚点唯一且非空 | ✅ | 共 3 个标题 |
| 暗色 · appendix/glossary 右侧目录与标题一一对应 | ✅ | 目录 3 项 / 标题 3 项 |
| 暗色 · appendix/glossary 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · appendix/bibliography 渲染 | ✅ | 附录 C：参考文献 |
| 暗色 · appendix/bibliography 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/bibliography / 实际 /how-to-build-a-good-game/appendix/bibliography |
| 暗色 · appendix/bibliography 有正文容器 | ✅ |  |
| 暗色 · appendix/bibliography 无残留 Markdown | ✅ |  |
| 暗色 · appendix/bibliography 图片有 alt 且带 base 前缀 | ✅ |  |
| 暗色 · appendix/bibliography 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 暗色 · appendix/bibliography 标题锚点唯一且非空 | ✅ | 共 5 个标题 |
| 暗色 · appendix/bibliography 右侧目录与标题一一对应 | ✅ | 目录 5 项 / 标题 5 项 |
| 暗色 · appendix/bibliography 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 7.11 |
| 暗色 · 不存在的章节（应显示 404） 显示应用内 404 | ✅ | 正确 |
| 亮色 · 首页 渲染 | ✅ | 如何构建一个好游戏 |
| 亮色 · 首页 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game / 实际 /how-to-build-a-good-game |
| 亮色 · 首页 有正文容器 | ✅ |  |
| 亮色 · 首页 无残留 Markdown | ✅ |  |
| 亮色 · 首页 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · 首页 图片实际加载成功 | ✅ | 共 5 张，失败 0 张 |
| 亮色 · 首页 标题锚点唯一且非空 | ✅ | 共 0 个标题 |
| 亮色 · 首页 右侧目录与标题一一对应 | ✅ | 目录 0 项 / 标题 0 项 |
| 亮色 · 首页 文字对比度 ≥ 4.5 | ✅ | 已测 2 项，最低 5.89 |
| 亮色 · chapters/preface 渲染 | ✅ | 序言：这本书想解决什么 |
| 亮色 · chapters/preface 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/preface / 实际 /how-to-build-a-good-game/chapters/preface |
| 亮色 · chapters/preface 有正文容器 | ✅ |  |
| 亮色 · chapters/preface 无残留 Markdown | ✅ |  |
| 亮色 · chapters/preface 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/preface 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/preface 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/preface 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/preface 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.91 |
| 亮色 · chapters/nintendo-three-rulers 渲染 | ✅ | 任天堂的三把尺子：社交性、口碑，与那个被遗忘的第三项 |
| 亮色 · chapters/nintendo-three-rulers 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/nintendo-three-rulers / 实际 /how-to-build-a-good-game/chapters/nintendo-three-rulers |
| 亮色 · chapters/nintendo-three-rulers 有正文容器 | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 无残留 Markdown | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/nintendo-three-rulers 图片实际加载成功 | ✅ | 共 1 张，失败 0 张 |
| 亮色 · chapters/nintendo-three-rulers 标题锚点唯一且非空 | ✅ | 共 5 个标题 |
| 亮色 · chapters/nintendo-three-rulers 右侧目录与标题一一对应 | ✅ | 目录 5 项 / 标题 5 项 |
| 亮色 · chapters/nintendo-three-rulers 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/what-masters-bet-on 渲染 | ✅ | 顶级创作者的原话：他们各自押注的是什么 |
| 亮色 · chapters/what-masters-bet-on 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/what-masters-bet-on / 实际 /how-to-build-a-good-game/chapters/what-masters-bet-on |
| 亮色 · chapters/what-masters-bet-on 有正文容器 | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 无残留 Markdown | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/what-masters-bet-on 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/what-masters-bet-on 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/what-masters-bet-on 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/what-masters-bet-on 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.89 |
| 亮色 · chapters/mechanics-of-fun 渲染 | ✅ | 好玩的机制学：核心循环、发现与惊喜、心流 |
| 亮色 · chapters/mechanics-of-fun 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/mechanics-of-fun / 实际 /how-to-build-a-good-game/chapters/mechanics-of-fun |
| 亮色 · chapters/mechanics-of-fun 有正文容器 | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 无残留 Markdown | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/mechanics-of-fun 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/mechanics-of-fun 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/mechanics-of-fun 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/mechanics-of-fun 文字对比度 ≥ 4.5 | ✅ | 已测 6 项，最低 5.89 |
| 亮色 · chapters/sixty-is-zero 渲染 | ✅ | 60 分就是 0 分：当及格线由同行决定 |
| 亮色 · chapters/sixty-is-zero 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/sixty-is-zero / 实际 /how-to-build-a-good-game/chapters/sixty-is-zero |
| 亮色 · chapters/sixty-is-zero 有正文容器 | ✅ |  |
| 亮色 · chapters/sixty-is-zero 无残留 Markdown | ✅ |  |
| 亮色 · chapters/sixty-is-zero 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/sixty-is-zero 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/sixty-is-zero 标题锚点唯一且非空 | ✅ | 共 6 个标题 |
| 亮色 · chapters/sixty-is-zero 右侧目录与标题一一对应 | ✅ | 目录 6 项 / 标题 6 项 |
| 亮色 · chapters/sixty-is-zero 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/competence-floor 渲染 | ✅ | 能力地板：同行的平均分，就是你的 0 分 |
| 亮色 · chapters/competence-floor 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/competence-floor / 实际 /how-to-build-a-good-game/chapters/competence-floor |
| 亮色 · chapters/competence-floor 有正文容器 | ✅ |  |
| 亮色 · chapters/competence-floor 无残留 Markdown | ✅ |  |
| 亮色 · chapters/competence-floor 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/competence-floor 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/competence-floor 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/competence-floor 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/competence-floor 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.89 |
| 亮色 · chapters/market-structure 渲染 | ✅ | 客群与流量：为什么同一套数值模型必然出错 |
| 亮色 · chapters/market-structure 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/market-structure / 实际 /how-to-build-a-good-game/chapters/market-structure |
| 亮色 · chapters/market-structure 有正文容器 | ✅ |  |
| 亮色 · chapters/market-structure 无残留 Markdown | ✅ |  |
| 亮色 · chapters/market-structure 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/market-structure 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/market-structure 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/market-structure 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/market-structure 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/monetization-math 渲染 | ✅ | 商业化算术：定价、内购、广告与 LTV/CAC |
| 亮色 · chapters/monetization-math 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/monetization-math / 实际 /how-to-build-a-good-game/chapters/monetization-math |
| 亮色 · chapters/monetization-math 有正文容器 | ✅ |  |
| 亮色 · chapters/monetization-math 无残留 Markdown | ✅ |  |
| 亮色 · chapters/monetization-math 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/monetization-math 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/monetization-math 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/monetization-math 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/monetization-math 文字对比度 ≥ 4.5 | ✅ | 已测 6 项，最低 5.89 |
| 亮色 · chapters/cross-industry-principles 渲染 | ✅ | 可跨行业复用的商业原理 |
| 亮色 · chapters/cross-industry-principles 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/cross-industry-principles / 实际 /how-to-build-a-good-game/chapters/cross-industry-principles |
| 亮色 · chapters/cross-industry-principles 有正文容器 | ✅ |  |
| 亮色 · chapters/cross-industry-principles 无残留 Markdown | ✅ |  |
| 亮色 · chapters/cross-industry-principles 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/cross-industry-principles 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/cross-industry-principles 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/cross-industry-principles 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/cross-industry-principles 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.89 |
| 亮色 · chapters/data-driven-why 渲染 | ✅ | 数值的虚假重要性：为什么完美的数值论证什么也证明不了 |
| 亮色 · chapters/data-driven-why 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/data-driven-why / 实际 /how-to-build-a-good-game/chapters/data-driven-why |
| 亮色 · chapters/data-driven-why 有正文容器 | ✅ |  |
| 亮色 · chapters/data-driven-why 无残留 Markdown | ✅ |  |
| 亮色 · chapters/data-driven-why 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/data-driven-why 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/data-driven-why 标题锚点唯一且非空 | ✅ | 共 8 个标题 |
| 亮色 · chapters/data-driven-why 右侧目录与标题一一对应 | ✅ | 目录 8 项 / 标题 8 项 |
| 亮色 · chapters/data-driven-why 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/shorten-validation 渲染 | ✅ | 把验证时间压到最短：素材测试、试玩广告与灰盒原型 |
| 亮色 · chapters/shorten-validation 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/shorten-validation / 实际 /how-to-build-a-good-game/chapters/shorten-validation |
| 亮色 · chapters/shorten-validation 有正文容器 | ✅ |  |
| 亮色 · chapters/shorten-validation 无残留 Markdown | ✅ |  |
| 亮色 · chapters/shorten-validation 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/shorten-validation 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/shorten-validation 标题锚点唯一且非空 | ✅ | 共 10 个标题 |
| 亮色 · chapters/shorten-validation 右侧目录与标题一一对应 | ✅ | 目录 10 项 / 标题 10 项 |
| 亮色 · chapters/shorten-validation 文字对比度 ≥ 4.5 | ✅ | 已测 8 项，最低 5.89 |
| 亮色 · chapters/metrics-and-traps 渲染 | ✅ | 指标体系与陷阱：D1/D7、付费漏斗、幸存者偏差 |
| 亮色 · chapters/metrics-and-traps 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/metrics-and-traps / 实际 /how-to-build-a-good-game/chapters/metrics-and-traps |
| 亮色 · chapters/metrics-and-traps 有正文容器 | ✅ |  |
| 亮色 · chapters/metrics-and-traps 无残留 Markdown | ✅ |  |
| 亮色 · chapters/metrics-and-traps 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/metrics-and-traps 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/metrics-and-traps 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/metrics-and-traps 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/metrics-and-traps 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.89 |
| 亮色 · chapters/from-zero-to-one 渲染 | ✅ | 从 0 到 1 的可执行检查清单 |
| 亮色 · chapters/from-zero-to-one 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/from-zero-to-one / 实际 /how-to-build-a-good-game/chapters/from-zero-to-one |
| 亮色 · chapters/from-zero-to-one 有正文容器 | ✅ |  |
| 亮色 · chapters/from-zero-to-one 无残留 Markdown | ✅ |  |
| 亮色 · chapters/from-zero-to-one 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/from-zero-to-one 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/from-zero-to-one 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/from-zero-to-one 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/from-zero-to-one 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.89 |
| 亮色 · chapters/how-games-die 渲染 | ✅ | 常见死法与复盘 |
| 亮色 · chapters/how-games-die 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/chapters/how-games-die / 实际 /how-to-build-a-good-game/chapters/how-games-die |
| 亮色 · chapters/how-games-die 有正文容器 | ✅ |  |
| 亮色 · chapters/how-games-die 无残留 Markdown | ✅ |  |
| 亮色 · chapters/how-games-die 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · chapters/how-games-die 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · chapters/how-games-die 标题锚点唯一且非空 | ✅ | 共 1 个标题 |
| 亮色 · chapters/how-games-die 右侧目录与标题一一对应 | ✅ | 目录 1 项 / 标题 1 项 |
| 亮色 · chapters/how-games-die 文字对比度 ≥ 4.5 | ✅ | 已测 5 项，最低 5.89 |
| 亮色 · appendix/references 渲染 | ✅ | 附录 A：引用与出处总表 |
| 亮色 · appendix/references 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/references / 实际 /how-to-build-a-good-game/appendix/references |
| 亮色 · appendix/references 有正文容器 | ✅ |  |
| 亮色 · appendix/references 无残留 Markdown | ✅ |  |
| 亮色 · appendix/references 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/references 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/references 标题锚点唯一且非空 | ✅ | 共 7 个标题 |
| 亮色 · appendix/references 右侧目录与标题一一对应 | ✅ | 目录 7 项 / 标题 7 项 |
| 亮色 · appendix/references 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/glossary 渲染 | ✅ | 附录 B：术语表 |
| 亮色 · appendix/glossary 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/glossary / 实际 /how-to-build-a-good-game/appendix/glossary |
| 亮色 · appendix/glossary 有正文容器 | ✅ |  |
| 亮色 · appendix/glossary 无残留 Markdown | ✅ |  |
| 亮色 · appendix/glossary 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/glossary 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/glossary 标题锚点唯一且非空 | ✅ | 共 3 个标题 |
| 亮色 · appendix/glossary 右侧目录与标题一一对应 | ✅ | 目录 3 项 / 标题 3 项 |
| 亮色 · appendix/glossary 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · appendix/bibliography 渲染 | ✅ | 附录 C：参考文献 |
| 亮色 · appendix/bibliography 路由地址正确（含深链接兜底还原） | ✅ | 期望 /how-to-build-a-good-game/appendix/bibliography / 实际 /how-to-build-a-good-game/appendix/bibliography |
| 亮色 · appendix/bibliography 有正文容器 | ✅ |  |
| 亮色 · appendix/bibliography 无残留 Markdown | ✅ |  |
| 亮色 · appendix/bibliography 图片有 alt 且带 base 前缀 | ✅ |  |
| 亮色 · appendix/bibliography 图片实际加载成功 | ✅ | 共 0 张，失败 0 张 |
| 亮色 · appendix/bibliography 标题锚点唯一且非空 | ✅ | 共 5 个标题 |
| 亮色 · appendix/bibliography 右侧目录与标题一一对应 | ✅ | 目录 5 项 / 标题 5 项 |
| 亮色 · appendix/bibliography 文字对比度 ≥ 4.5 | ✅ | 已测 7 项，最低 5.89 |
| 亮色 · 不存在的章节（应显示 404） 显示应用内 404 | ✅ | 正确 |
