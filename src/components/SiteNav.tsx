import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';
import { useEffect, useState } from 'react';
import type { NavLink, Locale } from '../i18n/content';
import type { UiStrings } from '../i18n/ui';
import { LANG_STORAGE_KEY, THEME_STORAGE_KEY } from '../i18n/ui';

interface SiteNavProps {
  locale: Locale;
  links: NavLink[];
  /** 目标语言页地址：/en/（中文站）或 /（英文站）。 */
  otherLocaleHref: string;
  ui: UiStrings;
  /** 当前语言短标签，用于切换器内的高亮。 */
  currentLangShort: string;
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M19 5l-1.6 1.6M6.6 17.4 5 19M19 19l-1.6-1.6M6.6 6.6 5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.4 14.3A8.6 8.6 0 0 1 9.7 3.6a8.6 8.6 0 1 0 10.7 10.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SiteNav({
  locale,
  links,
  otherLocaleHref,
  ui,
  currentLangShort,
}: SiteNavProps) {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // 顶部渐变进度条：以滚动进度驱动的 scaleX。
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // 滚动超过阈值后为导航叠加背景与边框。
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 主题：无本地偏好时跟随系统，并在系统中切换时实时响应。
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored !== null) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = (dark: boolean) =>
      document.documentElement.classList.toggle('dark', dark);
    apply(mq.matches);
    const onChange = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // 用户此前明确选择了英文时，从首页（/）进入一跳转至 /en/。
  useEffect(() => {
    if (locale !== 'zh-CN') return;
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'en' && window.location.pathname === '/') {
      window.location.replace('/en/');
    }
  }, [locale]);

  // 滚动高亮：当前可见区块对应的导航项。
  useEffect(() => {
    const targets = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-38% 0px -55% 0px' },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  // 移动端菜单打开时锁定滚动，并支持 Esc 关闭。
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light');
  };

  const switchLang = () => {
    localStorage.setItem(
      LANG_STORAGE_KEY,
      otherLocaleHref === '/en/' ? 'en' : 'zh-CN',
    );
  };

  const ease = reduce ? 0 : undefined;

  const linkClass = (href: string) =>
    `relative text-sm transition-colors duration-200 hover:text-foreground focus-visible:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-violet after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 ${
      active === href ? 'text-foreground after:scale-x-100' : 'text-muted'
    }`;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-brand-blue to-brand-violet"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? 'border-b border-line bg-background/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
            aria-label="RYVEO LAB"
          >
            <img
              src="/brand/ryveo-mark.png"
              alt=""
              width={38}
              height={23}
              className="h-5 w-8 rounded-[4px] object-cover"
            />
            <span className="text-[15px] font-semibold tracking-tight">
              RYVEO LAB
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label={ui.navLabel}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={otherLocaleHref}
              onClick={switchLang}
              aria-label={ui.switchLang}
              className="flex h-10 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-medium transition-colors hover:border-line-strong"
            >
              <span className="text-foreground">{currentLangShort}</span>
              <span className="text-muted opacity-50">/</span>
              <span className="text-muted" aria-hidden="true">
                {ui.otherLang}
              </span>
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={ui.themeToggle}
              className="group grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-foreground"
            >
              <span className="hidden transition-transform duration-300 group-hover:rotate-12 dark:block">
                <SunIcon />
              </span>
              <span className="block transition-transform duration-300 group-hover:-rotate-12 dark:hidden">
                <MoonIcon />
              </span>
            </button>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-foreground md:hidden"
              aria-expanded={open}
              aria-label={open ? ui.closeMenu : ui.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, y: reduce ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{ duration: ease ?? 0.22, ease: 'easeOut' }}
              className="border-b border-line bg-background/95 backdrop-blur-md md:hidden"
              aria-label={ui.navLabel}
            >
              <div className="flex flex-col gap-1 px-5 py-5">
                {links.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-surface ${
                      active === link.href ? 'text-foreground' : 'text-foreground/85'
                    }`}
                    style={reduce ? undefined : { transitionDelay: `${i * 30}ms` }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}