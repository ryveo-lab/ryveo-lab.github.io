import type { SiteContent } from '../i18n/content';

const content: SiteContent = {
  locale: 'zh-CN',
  seo: {
    title: 'RYVEO LAB — 探索影视科技与数字创意的未来',
    description:
      'RYVEO LAB 致力于探索人工智能、影视科技、生成式媒体与数字创意的融合，重新想象未来的创作与叙事方式。',
  },
  navLinks: [
    { href: '#vision', label: '愿景' },
    { href: '#explore', label: '探索' },
    { href: '#opensource', label: '开源' },
    { href: '#about', label: '关于' },
  ],
  hero: {
    lines: ['让想象，', '成为影像。'],
    sub: '探索人工智能、影视科技与数字创意的无限可能。',
    primaryLabel: '探索愿景',
    githubLabel: 'GitHub',
    scrollHint: '向下滚动探索',
  },
  vision: {
    kicker: '愿景 · Vision',
    heading: '重新想象创作的边界。',
    body: [
      'RYVEO LAB 相信，创作工具的下一次跃迁来自人工智能与影视技术的交汇。',
      '我们正在构建连接创作者、开发者与全球观众的开放生态——让技术退后一步，让故事走到台前。',
    ],
  },
  explore: {
    kicker: '探索方向 · Explore',
    heading: '探索未来的更多可能。',
    intro: '我们关注的六个技术方向，更多探索仍在路上。',
    items: [
      {
        index: '01',
        term: '人工智能',
        desc: '将机器学习与生成能力融入创作流程的每一环。',
      },
      {
        index: '02',
        term: '生成式媒体',
        desc: '探索由模型生成影像、声音与叙事的新介质。',
      },
      {
        index: '03',
        term: '影视技术',
        desc: '从前期到后期，支撑现代影视工业的制作工具链。',
      },
      {
        index: '04',
        term: '创意工具',
        desc: '为创作者与开发者构建直觉、高效的表达工具。',
      },
      {
        index: '05',
        term: '互动体验',
        desc: '让故事随观众的每一次选择与注视而改变。',
      },
      {
        index: '06',
        term: '开放技术',
        desc: '以开源与开放标准，推动生态的长期演进。',
      },
    ],
  },
  philosophy: {
    kicker: '信念 · Philosophy',
    lines: ['技术是媒介，', '创造力才是目的。'],
    note: '这是 RYVEO LAB 的核心信念：工具终将隐入幕后，被留下的永远是作品。',
  },
  opensource: {
    kicker: '开源 · Open Source',
    heading: '开放探索，共同创造。',
    body: [
      '我们相信媒体技术的未来将在开放中诞生。工具与基础设施从设计之初就面向开发者，并将在合适的时机公开部分工作，供社区使用、研究与改进。',
      '公开仓库、贡献指南与社区治理会随着项目进展逐步开放，欢迎一切认真的讨论。',
    ],
    actionLabel: '探索 GitHub',
    note: '公开工作集中在 GitHub 组织仓库，不设虚构的数据墙。',
  },
  about: {
    kicker: '关于 · About',
    heading: '关于 RYVEO LAB',
    body: [
      'RYVEO LAB 是一个面向全球的影视综合生态实验室，探索人工智能与数字影视制作的交汇。我们关注 AI 驱动的影像生成、影视制作工具、媒体基础设施，以及下一代互动叙事。',
      '我们以开放的方式与开发者、设计师和创作者协作，共同构建未来的故事技术。',
    ],
  },
  footer: {
    tagline: '科技与叙事的交汇。',
    githubLabel: 'GitHub',
    backToTop: '返回顶部',
  },
};

export default content;