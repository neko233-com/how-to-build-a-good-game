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
| 手写 SVG 图表                   | ✅ 7 张                             |
| 封面与分篇插画                  | ✅ 5 张（统一风格锚点生成）         |
| 已完成正文                      | ✅ 19 章 + 5 则附录                 |
| 站点内容自动验证                | ✅ 覆盖全站，见下方「验证」一节     |

各章各自代表一种写法：

- **第 01 章**《任天堂的三把尺子》——立引用：一个流传很广的说法查无一手来源，于是改引可核实的原话；
- **第 04 章**《60 分就是 0 分》——立主张：及格线由同行水位决定，所以它不是绝对刻度；
- **第 06 章**《客群与流量》——立方法：原神与《寻道大千》的受众几乎不重叠，因此跨品类的数值模型必然出错；
- **第 09 章**《数值的虚假重要性》——立论证：成功与失败都能被同一套数值解释通；很多数值其实是从营业额目标反推出来的；
- **第 10 章**《把验证时间压到最短》——立流程：四级验证漏斗的分工与通过标准；
- **第 12 章**《从 0 到 1 的可执行检查清单》——立收束：把全书论证压成一份带止损条件的清单。

其余各章（02、03、05、07、08、11、13）同样完成，结构见书内目录。

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

> 给 AI 编码代理（Codex / Cursor / Copilot / Codely 等）的说明在 [AGENTS.md](./AGENTS.md)——包含写一章的流程、硬性规范与全部踩过的坑，读完可直接接手开发。

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

| 命令             | 作用                                       |
| ---------------- | ------------------------------------------ |
| `vp dev`         | 启动开发服务器                             |
| `vp build`       | 生产构建到 `dist/`                         |
| `vp preview`     | 预览生产构建                               |
| `vp check`       | 格式 + Lint + 类型检查（`--fix` 自动修复） |
| `vp test`        | 运行单元测试                               |
| `vp toolchain`   | 查看内置工具的确切版本                     |
| `npm run verify` | 渲染全站页面并逐项断言（见下方「验证」）   |

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

## 交互样例（这不是纸质书）

手感与反馈是「只能体感」的东西，用文字描述效率很低。所以第 12、13 章各配了一个能直接上手操作的组件：

- **手感调参器**（第 12 章）：一个极小的横版跳跃沙盒。滑块可调重力、起跳初速、水平最大速度、加速度、摩擦、输入缓冲与土狼时间，并给出「马里奥式 / 银河恶魔城式 / 魂系 / 移动端轻触」四套预设，一键切换即可感受流派差异。
- **反馈感实验台**（第 13 章）：同一个「点击命中」动作，把飘字、缩放弹跳、闪白、粒子、屏幕震动、顿帧、音效、震动反馈拆成独立开关，可一键全关 / 全开对比。

两个组件都是纯前端实现，没有引入任何第三方库：音效用 WebAudio 实时合成（不加载音频文件），动画用 CSS keyframes，配色跟随明暗主题。组件在 `src/components/demos/`。

## 验证

书站是单页应用，静态 HTML 看不出「渲染后到底对不对」——残留的 Markdown、没加载成功的图片、对不上的锚点、对比度不足的文字，只有把页面真的渲染出来才能发现。所以仓库里带了一个可重跑的验证脚本：

```bash
vp build
npm run verify
```

它会自己起一个静态服务器（**刻意模拟 GitHub Pages 对未命中路径返回 `404.html` 的行为**，所以每个章节都是通过真实的深链接兜底链路访问的），用本机浏览器的无头模式渲染每个页面，由一个同源探针页在浏览器内完成测量并把结果回传成 JSON，最后在 `docs/verification-report.md` 生成报告。

覆盖的断言：

| 断言                      | 说明                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 页面渲染                  | 每页都能渲染出内容；不存在的路径应显示应用内 404                                                               |
| 路由地址正确              | 深链接兜底还原后的地址与预期一致（可发现 `//chapters/...` 这类拼接错误）                                       |
| 正文容器存在              | `.prose-book` 挂载成功                                                                                         |
| 无残留 Markdown           | 表格分隔行、`**`、反引号、`##`、`](` 等不应泄漏到正文文本里                                                    |
| 图片有 alt 且有 base 前缀 | 同时满足无障碍要求与子路径部署要求                                                                             |
| 图片实际加载成功          | 逐张检查 `naturalWidth`，可发现 404 的图                                                                       |
| 标题锚点唯一且非空        | 目录跳转的前提                                                                                                 |
| 右侧目录与标题一一对应    | 目录项与正文标题的数量、顺序、id 完全一致                                                                      |
| 文字对比度 ≥ 4.5          | 用 canvas 把 `oklch` / `oklab` 等颜色归一化成 sRGB 后按 WCAG 计算，支持半透明背景的层层合成                    |
| 标题层级不跳级            | h1 直接跟 h3 会让目录与语义结构都变得含混                                                                      |
| 表格都有表头              | 无表头的表格对读屏与理解都不友好                                                                               |
| 页面标题包含书名          | `document.title` 每页正确                                                                                      |
| 站内链接指向存在的路由    | 防止站内死链                                                                                                   |
| 已完成章节至少有一张图    | 「图文并茂」的结构性保障                                                                                       |
| 外部链接健康              | 404/5xx 才算失效；401/403/429 归为「站点拦截自动请求」，网络错误归为「本机网络无法访问」——后两者不等于链接失效 |

深浅两种模式各跑一遍，即 19 个页面 × 2 种模式 = 38 次真实渲染。

可用环境变量：`VERIFY_ONLY`（只跑标签包含该子串的页面，便于迭代）、`VERIFY_PORT`、`VERIFY_BROWSER`（指定浏览器路径）、`VERIFY_REPORT`（报告输出路径）。

## 发布

**只有打 tag 才会发布线上站点。** 普通 push 只跑校验，不会动线上。

```bash
git tag -a v1.3.0 -m "v1.3.0：……"
git push origin v1.3.0
```

同一个 tag 会同时触发两条部署链路，两者的 `base` 不同：

| 目标             | 地址                                                    | base                         | 工作流                  |
| ---------------- | ------------------------------------------------------- | ---------------------------- | ----------------------- |
| GitHub Pages     | https://neko233-com.github.io/how-to-build-a-good-game/ | `/how-to-build-a-good-game/` | `deploy.yml`            |
| Cloudflare Pages | https://note.neko233.com/                               | `/`                          | `deploy-cloudflare.yml` |

`base` 由环境变量 `SITE_BASE` 控制（见 `vite.config.ts`）：GitHub Pages 用默认值，Cloudflare 工作流里设成 `/`。改域名或子路径时只改这一个变量——`index.html` 里的深链接还原脚本与 `404.html` 都会在构建期按当前 base 自动生成。

### Cloudflare Pages 首次配置

1. **创建项目。** Cloudflare Dashboard → Workers & Pages → Create → Pages，选「Direct Upload」（部署交给 GitHub Actions，不需要 Cloudflare 侧的 Git 集成）。项目名默认 `neko233-note`，可用仓库 Variable `CF_PAGES_PROJECT` 覆盖。
2. **添加两个 GitHub Secret**（见下节「密钥安全」）。
3. **绑定自定义域名。** Pages 项目 → Custom domains → 添加 `note.neko233.com`。域名已托管在 Cloudflare 的话通常一步完成，证书自动签发。
4. 之后打 tag 即可发布。

### 密钥安全

| Secret 名称             | 用途                | 需要的权限                    |
| ----------------------- | ------------------- | ----------------------------- |
| `CLOUDFLARE_API_TOKEN`  | 调用 Pages 部署接口 | 至少 `Cloudflare Pages: Edit` |
| `CLOUDFLARE_ACCOUNT_ID` | 指定账号            | —                             |

**添加方式**（推荐命令行，`gh secret set` 交互式读取，不回显、不进 shell 历史）：

```bash
gh secret set CLOUDFLARE_API_TOKEN
gh secret set CLOUDFLARE_ACCOUNT_ID
```

也可以在 `Settings → Secrets and variables → Actions` 网页添加。

**几条硬约束：**

- 凭据只放在 GitHub Secrets，工作流里通过 `${{ secrets.* }}` 注入，**不落盘、不打印**。
- `.gitignore` 已排除 `.dev.vars*`、`.wrangler/`、`.env.local` 等本地凭据文件。
- `deploy-cloudflare.yml` 里有一道兜底检查：构建产物中若出现凭据形态的字符串，直接中止发布。
- 给 token 设最小权限与有效期；一旦怀疑泄漏，立刻在 Cloudflare 后台吊销并重置 secret。

> GitHub Pages 首次启用还有一个必做的设置：`github-pages` 环境默认只允许默认分支部署，**tag 不在允许列表里**，会导致部署被拒。需要在 `Settings → Environments → github-pages` 的 Deployment branches and tags 里放行 tag 规则（本项目已放行 `main` 分支与 `v*` tag）。

## 设计说明

- **深浅双主题。** 主题在首屏绘制之前由 `index.html` 的内联脚本定好，避免「先亮后暗」的闪烁（带颜色过渡的元素会闪一下灰）。默认跟随系统，用户切换后写入 `localStorage`。
- **插画是深色图版。** 封面与分篇插画统一为深墨蓝底 + 暖琥珀主色，在亮色模式下读作书里的彩色插页，这是刻意的选择。
- **正文排版集中管理。** 字号、行高、段落间距都在 `src/styles/index.css` 的 `.prose-book` 里；那里的规则一律使用**直接子元素选择器**，以免覆盖组件自己的样式。

## 游戏诊断 skill

书里的判断框架被提炼成了一个可复用的 Codely CLI skill：[`skills/game-audit/`](./skills/game-audit/SKILL.md)。

它把本书的七个框架变成一套**结构化访谈 + 诊断报告**的流程：能力地板（第 04/05 章）、客群与流量四问（第 06 章）、核心循环闭合（第 03 章）、验证漏斗与事前门槛（第 10 章）、数值检验五问（第 09 章）、LTV/CAC 回收点（第 07 章）、岩田聪四要素两条件（第 01 章），最后输出「最薄弱的一环 + 下一个最小动作」。

三条设计纪律写死在 skill 里：先访谈再判断；不编造行业基准（所有数字必须来自用户自己的数据或可访问的公开来源）；数值是描述不是解释。

安装为用户级（所有项目可用）：

```bash
codely skills install ./skills/game-audit --scope user --consent
```

装好后在任何项目里说「帮我诊断一下我的游戏」即可触发。skill 的源文件随本仓库版本管理，改完重新执行上面的命令即可更新。

## 许可

- **代码**（构建、组件、脚本）：[MIT](./LICENSE)
- **正文与插图**（`src/content/` 下的文字、`public/images/` 下的图片）：[CC BY-NC-SA 4.0](./LICENSE-CONTENT)
