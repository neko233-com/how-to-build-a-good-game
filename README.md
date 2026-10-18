# 如何构建一个好游戏

> 当同行都能做到 60 分，60 分就是 0 分。

一本讲「如何构建一个好游戏」的书。**站点即书**：正文、插图、图表都与代码放在同一个仓库里，一起版本管理。

- 在线阅读：<https://neko233-com.github.io/how-to-build-a-good-game/>
- 仓库：<https://github.com/neko233-com/how-to-build-a-good-game>

## 这本书想解决什么

市面上关于游戏设计的讨论，很容易落到两头：一头是「跟着感觉走」的经验之谈，一头是只有大厂才做得起的方法论。这本书试图把「做好游戏」拆成三件可以讨论、可以验证的事：

1. **好游戏的判断标准**——不引用查无实据的说法，只用能点回原作者的原话；
2. **市场与商业化**——好游戏不等于能活下来，货架、流量、定价是另一套算术；
3. **验证效率**——把「花两年才知道行不行」压缩成「花几周就能否证」。

书里还刻意做了一件事：**只保留能跨行业复用的经验**。因为世界上的商业原理是相通的，而具体打法几乎全不通。

## 当前进度

| 部分                            | 状态                                |
| ------------------------------- | ----------------------------------- |
| 站点骨架与内容系统              | ✅ 完成                             |
| 4 篇 14 章 + 3 则附录的完整目录 | ✅ 完成（每章列出待回答的具体问题） |
| 手写 SVG 图表                   | ✅ 5 张                             |
| 封面与分篇插画                  | ✅ 5 张（统一风格锚点生成）         |
| 样章正文                        | ✅ 3 章（01 / 04 / 10）             |
| 其余 11 章正文                  | ⬜ 待写                             |

三章样章各自代表一种写法：

- **第 01 章**《任天堂的三把尺子》——立引用：一个流传很广的说法查无一手来源，于是改引可核实的原话；
- **第 04 章**《60 分就是 0 分》——立主张：及格线由同行水位决定，所以它不是绝对刻度；
- **第 10 章**《把验证时间压到最短》——立方法：四级验证漏斗的分工与通过标准。

## 技术栈

| 层          | 选型                                                                 | 版本                    |
| ----------- | -------------------------------------------------------------------- | ----------------------- |
| 工具链      | [Vite+](https://viteplus.dev)（统一管理 dev / build / check / test） | `vite-plus` 1.3.0       |
| 构建        | Vite（由 Vite+ 内置，Rolldown 打包）                                 | 8.3.4 / rolldown 1.2.14 |
| 测试        | Vitest（Vite+ 内置）                                                 | 5.0.5                   |
| 格式与 Lint | Oxfmt / Oxlint（Vite+ 内置）                                         | 0.73.0 / 1.88.0         |
| 框架        | React                                                                | 19.3.1                  |
| 路由        | React Router                                                         | 7.18.4                  |
| 样式        | Tailwind CSS v4 + `@tailwindcss/vite`                                | 4.3.3                   |
| 正文格式    | MDX（`@mdx-js/rollup` + `@mdx-js/react`）+ `remark-gfm`              | 3.1.1 / 4.0.1           |
| 动效组件    | [ReactBits](https://reactbits.dev)（复制式安装）                     | —                       |
| 部署        | GitHub Pages（仅打 tag 时发布）                                      | —                       |
| Node        | 24                                                                   | —                       |

图标、图表全部是手写 SVG，没有引入图标库或图表库。

## 本地开发

需要 Node 24。有两种方式，任选其一。

**方式一：不装全局 CLI（推荐先试这个）**

```bash
npm install
npm run dev
```

`vite-plus` 已在 `devDependencies` 里，所有脚本都会用到项目内那一份。

**方式二：安装 Vite+ CLI**

```bash
# Windows
irm https://viteplus.dev/install.ps1 | iex

# Linux / macOS
curl -fsSL https://vite.plus | bash
```

之后可以直接用 `vp`：

| 命令           | 作用                                       |
| -------------- | ------------------------------------------ |
| `vp dev`       | 启动开发服务器                             |
| `vp build`     | 生产构建到 `dist/`                         |
| `vp preview`   | 预览生产构建                               |
| `vp check`     | 格式 + Lint + 类型检查（`--fix` 自动修复） |
| `vp test`      | 运行单元测试                               |
| `vp toolchain` | 查看内置工具的确切版本                     |

`npm run dev` / `build` / `check` / `test` 是上面这些命令的等价封装。

## 目录结构

```
├─ .github/workflows/
│  ├─ ci.yml                   # 分支推送与 PR：只校验，不发布
│  └─ deploy.yml               # 仅 push tag v* 或手动触发：校验后发布 Pages
├─ public/
│  ├─ 404.html                 # GitHub Pages 的深链接兜底
│  ├─ favicon.svg
│  └─ images/                  # 封面与分篇插画
├─ src/
│  ├─ components/
│  │  ├─ bits/                 # ReactBits 组件（复制式安装，非依赖）
│  │  ├─ charts/               # 手写 SVG 图表
│  │  └─ mdx/                  # 注入给 MDX 正文的组件
│  ├─ content/
│  │  ├─ meta.ts               # 全书章节清单，目录与导航的唯一数据源
│  │  ├─ chapters/*.mdx        # 章节正文
│  │  └─ appendix/*.mdx        # 附录
│  ├─ layout/                  # 站点外壳：头部、全书目录、章节页、右侧小节目录
│  ├─ lib/                     # 内容加载、标题锚点、主题、SEO、工具
│  ├─ pages/                   # 封面页、章节页、404
│  └─ styles/index.css         # 设计 token 与正文排版
├─ index.html                  # 首屏主题脚本 + 深链接还原脚本
└─ vite.config.ts              # Vite+ 统一配置
```

## 怎么写一章

1. **登记章节。** 在 `src/content/meta.ts` 的 `CHAPTERS` 数组里加一条：`slug`、`order`、`title`、`short`、`summary`、`part`。数组顺序就是阅读顺序，上下章导航与目录都由它驱动。
2. **建正文文件。** 新建 `src/content/chapters/<slug>.mdx`。文件名必须等于 `slug`——`src/lib/content.test.ts` 会检查两者一一对应，漏建或孤儿文件都会让测试失败。
3. **写正文。** 结构建议：钩子 → 论点 → 证据 → 图 → 反方观点 → 可执行清单。
4. **标为完成。** 在该章条目上加 `status: 'written'`，草稿提示会自动消失。

### 正文里可以直接用的组件

| 组件                 | 用途                               | 关键属性                                                        |
| -------------------- | ---------------------------------- | --------------------------------------------------------------- |
| `Figure`             | 插图                               | `src`、`alt`、`caption`、`width`、`height`                      |
| `QuoteCard`          | 带出处与可信度分级的引述           | `quote`、`author`、`role`、`source`、`sourceUrl`、`credibility` |
| `PullQuote`          | 从正文里拔出来的强调句             | `attribution`                                                   |
| `Callout`            | 提示框                             | `type`（`note` / `warning` / `tip` / `idea`）、`title`          |
| `CompareTable`       | 包住 Markdown 表格，窄屏可横向滚动 | `caption`                                                       |
| `StatCard`           | 关键数字，滚动到视口时计数         | `value`、`label`、`prefix`、`suffix`                            |
| `KeyPoints`          | 章节末尾的要点收束                 | `title`、`items`                                                |
| `ScoreFloorChart` 等 | 手写 SVG 图表                      | `caption`                                                       |

> ⚠️ 在 `CompareTable` 这类 JSX 块里写 Markdown 表格时，**标签与表格之间必须留空行**，否则 MDX 不会把表格解析成表格，而会当成一行普通文本输出。

### 新增图表

图表是 `src/components/charts/` 下的普通 React 组件，用 Tailwind 的颜色类上色（而不是写死色值），这样深浅两种主题都能自动适配。写完在 `src/components/charts/index.ts` 里注册，它就会自动出现在 MDX 可用组件表里。

### 新增 ReactBits 组件

```bash
npx shadcn@latest add @react-bits/CountUp-TS-TW
```

`components.json` 里的 `aliases.components` 指向 `@/components/bits`，所以安装的组件会落到 `src/components/bits/`。如果 CLI 不认你的工程，也可以按 ReactBits 组件页提供的方式手动复制源码。

## 写作与引用规范

这本书对「说得对」的要求高于「说得好听」：

- **每一处引述都必须带可访问的出处链接**，并标注可信度：一手来源 / 权威媒体 / 二手转述 / 未核实。
- **找不到一手来源的说法一律不当作论据**，如果一定要提，就如实写明「查无一手出处」。第 01 章就是这样一个例子。
- **不编造数据。** 书里出现的数字若属于推理用的模型而非实测统计，必须在正文或提示框里明确标注「示意」。
- **图片必须有 `alt`，并且正文要指得到它。** 图不放装饰性配图。

## 发布

**只有打 tag 才会发布线上站点。** 普通 push 只跑校验，不会动线上。

```bash
git tag -a v0.2.0 -m "v0.2.0：写完第 02、03 章"
git push origin v0.2.0
```

随后 `deploy.yml` 会依次执行 `vp install --frozen-lockfile`、`vp check`、`vp test`、`vp build`，全部通过后上传产物并发布到 GitHub Pages。

> 首次启用时有一个必做的设置：`github-pages` 环境默认只允许默认分支部署，**tag 不在允许列表里**，会导致部署被拒。需要在 `Settings → Environments → github-pages` 的 Deployment branches and tags 里放行 tag 规则（本项目已放行 `main` 分支与 `v*` tag）。

## 设计说明

- **深浅双主题。** 主题在首屏绘制之前由 `index.html` 的内联脚本定好，避免「先亮后暗」的闪烁（带颜色过渡的元素会闪一下灰）。默认跟随系统，用户切换后写入 `localStorage`。
- **插画是深色图版。** 封面与分篇插画统一为深墨蓝底 + 暖琥珀主色，在亮色模式下读作书里的彩色插页，这是刻意的选择。
- **正文排版集中管理。** 字号、行高、段落间距都在 `src/styles/index.css` 的 `.prose-book` 里；那里的规则一律使用**直接子元素选择器**，以免覆盖组件自己的样式。

## 许可

- **代码**（构建、组件、脚本）：[MIT](./LICENSE)
- **正文与插图**（`src/content/` 下的文字、`public/images/` 下的图片）：[CC BY-NC-SA 4.0](./LICENSE-CONTENT)
