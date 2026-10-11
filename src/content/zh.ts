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
    { href: '/community/', label: '社区' },
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
      '贡献指南与社区治理已公开，详见社区页面；更多公开仓库会随项目进展逐步开放。',
    ],
    actionLabel: '探索 GitHub',
    note: '公开工作集中在 GitHub 组织仓库，不设虚构的数据墙。',
  },
  community: {
    kicker: '社区 · Community',
    lines: ['一起构建，', '彼此成就。'],
    sub: '贡献指南与社区治理：技术开放，讨论认真。',
    contributingKicker: '贡献指南 · Contribution Guides',
    contributingHeading: '让每一次贡献都有意义。',
    contributingIntro:
      '无论你来自哪里，你的第一个 issue、第一次 review、第一个 pull request，都受欢迎。这是我们约定的协作方式。',
    steps: [
      { index: '01', term: '了解项目', desc: '阅读仓库 README 与贡献指南，找到与你兴趣相合的方向。' },
      { index: '02', term: '先讨论', desc: '提出想法或问题，在 issue 与讨论区先与维护者对齐方向。' },
      { index: '03', term: '提交变更', desc: 'Fork 仓库、创建分支，遵循仓库约定提交清晰的 commit 与 PR。' },
      { index: '04', term: '评审与合并', desc: '维护者与社区成员共同评审，迭代反馈后合并落地。' },
    ],
    principle: '不同仓库可能有各自更具体的约定——一切以仓库内的 CONTRIBUTING.md 为准。',
    cocLabel: '参与即意味着你同意遵循行为准则（Code of Conduct）。',
    governanceKicker: '社区治理 · Community Governance',
    governanceHeading: '透明、开放、共识。',
    governanceIntro: 'RYVEO LAB 采取开放而审慎的治理方式：任何人都可以观察、参与并提出异议。',
    roles: [
      { term: '维护者 · Maintainers', desc: '负责关键路径：评审合并、发布版本、把握项目方向。' },
      { term: '贡献者 · Contributors', desc: '以 issue、PR、文档与讨论持续推动项目前进。' },
      { term: '社区 · Community', desc: '所有使用、阅读与传播项目的人，共同构成生态。' },
    ],
    principles: [
      { term: '共识优先', desc: '重要决定通过公开讨论达成，默认开放、记录在案。' },
      { term: '语义化版本', desc: '公开发布遵循 SemVer，破坏性变更提前公告。' },
      { term: '行为准则', desc: '一切交互遵循 Code of Conduct，营造友善环境。' },
      { term: '公开透明', desc: '路线图、变更与决定都在 GitHub 上公开进行。' },
    ],
    governanceNote: '治理规则会随组织成长而演进——欢迎通过 issue 提出改进建议。',
    githubLabel: '在 GitHub 参与',
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
    communityLabel: '社区',
    backToTop: '返回顶部',
  },
};

export default content;