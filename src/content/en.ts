import type { SiteContent } from '../i18n/content';

const content: SiteContent = {
  locale: 'en',
  seo: {
    title: 'RYVEO LAB — Cinematic Technology & Creative Innovation',
    description:
      'Exploring the future of artificial intelligence, cinematic technology, generative media, and digital storytelling.',
  },
  navLinks: [
    { href: '#vision', label: 'Vision' },
    { href: '#explore', label: 'Explore' },
    { href: '#opensource', label: 'Open Source' },
    { href: '/en/community/', label: 'Community' },
    { href: '#about', label: 'About' },
  ],
  hero: {
    lines: ['Where Imagination', 'Becomes Motion.'],
    sub: 'Exploring new possibilities at the intersection of AI, cinematic technology, and digital creativity.',
    primaryLabel: 'Explore Our Vision',
    githubLabel: 'GitHub',
    scrollHint: 'Scroll to explore',
  },
  vision: {
    kicker: 'Vision · 愿景',
    heading: 'Reimagining the Boundaries of Creation.',
    body: [
      'RYVEO LAB believes the next leap in creative tools comes from the convergence of artificial intelligence and cinematic technology.',
      'We are building an open ecosystem that connects creators, developers, and audiences worldwide — technology stepping back, stories stepping forward.',
    ],
  },
  explore: {
    kicker: 'Explore · 探索方向',
    heading: 'Exploring What Comes Next.',
    intro: 'Six directions we are exploring — with more to come.',
    items: [
      {
        index: '01',
        term: 'Artificial Intelligence',
        desc: 'Machine learning and generative capabilities woven into every step of the creative workflow.',
      },
      {
        index: '02',
        term: 'Generative Media',
        desc: 'New media authored by models — images, sound, and narrative.',
      },
      {
        index: '03',
        term: 'Cinematic Engineering',
        desc: 'Production toolchains for modern filmmaking, from pre to post.',
      },
      {
        index: '04',
        term: 'Creative Tools',
        desc: 'Intuitive, powerful instruments for creators and developers.',
      },
      {
        index: '05',
        term: 'Interactive Experiences',
        desc: 'Stories that change with every choice and glance of the audience.',
      },
      {
        index: '06',
        term: 'Open Technologies',
        desc: 'Open source and open standards for a durable ecosystem.',
      },
    ],
  },
  philosophy: {
    kicker: 'Philosophy · 信念',
    lines: ['Technology Is a Medium.', 'Creativity Is the Purpose.'],
    note: 'The conviction at the heart of RYVEO LAB: tools recede into the background, and what remains is the work.',
  },
  opensource: {
    kicker: 'Open Source · 开源',
    heading: 'Open Exploration. Shared Creation.',
    body: [
      'We believe the future of media technology will be built in the open. Our tools and infrastructure are designed developer-first, and parts of our work will be released for the community to use, study, and improve.',
      'Contribution guides and community governance are now public — see the community page. More public repositories will open as projects mature.',
    ],
    actionLabel: 'Explore GitHub',
    note: 'Our public work lives on the GitHub organization — no fabricated numbers on the wall.',
  },
  community: {
    kicker: 'Community · 社区',
    lines: ['Build Together,', 'Grow Together.'],
    sub: 'Contribution guides and community governance: open technology, serious conversations.',
    contributingKicker: 'Contribution Guides · 贡献指南',
    contributingHeading: 'Make Every Contribution Count.',
    contributingIntro:
      'Wherever you come from, your first issue, your first review, and your first pull request are all welcome. Here is how we work together.',
    steps: [
      { index: '01', term: 'Understand the project', desc: 'Read the repository README and contributing guide, and find a direction you care about.' },
      { index: '02', term: 'Discuss first', desc: 'Propose an idea or raise a question, and align with maintainers in issues or discussions before writing code.' },
      { index: '03', term: 'Submit your change', desc: 'Fork the repository, create a branch, and open a clear, well-described pull request.' },
      { index: '04', term: 'Review & merge', desc: 'Maintainers and community members review together; iterate on feedback until it lands.' },
    ],
    principle:
      'Individual repositories may keep their own, more specific conventions — the CONTRIBUTING.md in each repository is the source of truth.',
    cocLabel: 'Participating means agreeing to follow the Code of Conduct.',
    governanceKicker: 'Community Governance · 社区治理',
    governanceHeading: 'Transparent. Open. By Consensus.',
    governanceIntro:
      'RYVEO LAB governs in an open, deliberate way: anyone may observe, participate, and raise objections.',
    roles: [
      { term: 'Maintainers · 维护者', desc: 'Own the critical path: reviewing, merging, releasing, and steering direction.' },
      { term: 'Contributors · 贡献者', desc: 'Move projects forward through issues, pull requests, documentation, and discussion.' },
      { term: 'Community · 社区', desc: 'Everyone who uses, reads, and spreads the work — together forming the ecosystem.' },
    ],
    principles: [
      { term: 'Consensus first', desc: 'Important decisions are reached through open discussion, recorded by default.' },
      { term: 'Semantic versioning', desc: 'Public releases follow SemVer; breaking changes are announced ahead of time.' },
      { term: 'Code of Conduct', desc: 'All interaction follows the Code of Conduct — a welcoming environment for everyone.' },
      { term: 'Open transparency', desc: 'Roadmaps, changes, and decisions happen in public on GitHub.' },
    ],
    governanceNote:
      'Governance evolves as the organization grows — improvement proposals via issues are welcome.',
    githubLabel: 'Join on GitHub',
  },
  about: {
    kicker: 'About · 关于',
    heading: 'About RYVEO LAB',
    body: [
      'RYVEO LAB is a global cinematic ecosystem exploring the convergence of artificial intelligence and digital filmmaking — from AI-assisted image generation and production tooling to media infrastructure and next-generation interactive storytelling.',
      'We collaborate in the open with developers, designers, and creators to build the story technologies of tomorrow.',
    ],
  },
  footer: {
    tagline: 'Where Technology Meets Storytelling.',
    githubLabel: 'GitHub',
    communityLabel: 'Community',
    backToTop: 'Back to top',
  },
};

export default content;