# ryveo-lab.github.io

RYVEO LAB 官方网站源码。基于 [Astro](https://astro.build) + React Islands + Tailwind CSS v4 + [Motion](https://motion.dev)。

## 特性

- **双语言**：简体中文为默认（`/`），英文为完整镜像（`/en/`），均为静态生成的独立入口。
- **双主题**：深色 / 浅色，默认跟随系统（`prefers-color-scheme`），导航栏可手动切换并记忆偏好。
- **动效**：Hero 悬浮与鼠标视差、分层入场、滚动 Reveal，全部遵循 `prefers-reduced-motion`。
- **SEO**：独立语言元数据、canonical、hreflang、Open Graph 与自动 sitemap。
- **部署**：GitHub Actions 自动构建并发布到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + astro build，产物在 dist/
npm run preview  # 预览生产构建
```

## 目录结构

```text
src/
├── pages/          # /（中文）+ /en/（英文）两套静态入口，各含首页与 /community/ 社区页
├── layouts/        # BaseLayout：SEO、主题初始化、导航与页脚骨架
├── sections/       # Hero / Vision / Explore / Philosophy / OpenSource / Community / About
├── components/     # React Islands：SiteNav、Hero、Reveal
├── content/        # zh.ts / en.ts 双语内容（含 SEO 文案）
├── i18n/           # 类型与界面字符串
└── styles/         # global.css：主题 tokens、基础样式、动效关键帧
```

## 内容维护

- 页面文案集中在 `src/content/{zh,en}.ts`，按语言分别编写，非逐句直译。
- 品牌 Logo 资源位于 `public/brand/`：`ryveo-mark.png`（源图，勿改动比例与色彩）。
- GitHub 组织入口统一由 `src/i18n/content.ts` 的 `ORG_URL` 控制。

## 主题与语言行为

- 主题：无本地偏好时跟随系统并实时响应系统切换；手动切换后覆盖系统（存 `localStorage`）。
- 语言：未保存偏好时始终展示中文；曾在导航选择英文后，访问 `/` 会规范跳转到 `/en/`；`/en/` 与 `/` 的直链互不重定向。

## 部署

推送 `main` 后由 `.github/workflows/deploy.yml` 自动部署。Pages 源需在仓库 Settings → Pages 中选择 **GitHub Actions**。