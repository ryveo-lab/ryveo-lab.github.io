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
      'Public repositories, contribution guides, and community governance will open up as projects mature. Good conversation is always welcome.',
    ],
    actionLabel: 'Explore GitHub',
    note: 'Our public work lives on the GitHub organization — no fabricated numbers on the wall.',
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
    backToTop: 'Back to top',
  },
};

export default content;