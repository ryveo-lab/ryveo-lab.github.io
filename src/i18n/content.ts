export type Locale = 'zh-CN' | 'en';

export interface NavLink {
  href: string;
  label: string;
}

export interface HeroCopy {
  /** Headline, one entry per visual line for line-by-line reveals. */
  lines: string[];
  sub: string;
  primaryLabel: string;
  githubLabel: string;
  scrollHint: string;
}

export interface VisionCopy {
  heading: string;
  body: string[];
}

export interface ExploreItem {
  index: string;
  term: string;
  desc: string;
}

export interface ExploreCopy {
  heading: string;
  intro: string;
  items: ExploreItem[];
}

export interface PhilosophyCopy {
  lines: string[];
  note: string;
}

export interface OpenSourceCopy {
  heading: string;
  body: string[];
  actionLabel: string;
  note: string;
}

export interface AboutCopy {
  heading: string;
  body: string[];
}

export interface FooterCopy {
  tagline: string;
  githubLabel: string;
  backToTop: string;
}

export interface SeoCopy {
  title: string;
  description: string;
}

export interface SiteContent {
  locale: Locale;
  seo: SeoCopy;
  navLinks: NavLink[];
  hero: HeroCopy;
  vision: VisionCopy;
  explore: ExploreCopy;
  philosophy: PhilosophyCopy;
  opensource: OpenSourceCopy;
  about: AboutCopy;
  footer: FooterCopy;
}

/** GitHub 组织入口，按规范不虚构项目与数据。 */
export const ORG_URL = 'https://github.com/ryveo-lab';