import type { Locale } from './content';

export interface UiStrings {
  /** 主题按钮的 aria-label，依当前模式描述单击后的下一个状态。 */
  themeToLight: string;
  themeToDark: string;
  themeToAuto: string;
  openMenu: string;
  closeMenu: string;
  switchLang: string;
  /** Label of the *other* language shown in the switcher. */
  otherLang: string;
  navLabel: string;
  footerNavLabel: string;
  footerExploreLabel: string;
  footerConnectLabel: string;
  /** Copy hint shown for jump-links that point into the page. */
  goTo: string;
}

export const ui: Record<Locale, UiStrings> = {
  'zh-CN': {
    themeToLight: '切换到浅色主题',
    themeToDark: '切换到深色主题',
    themeToAuto: '跟随系统主题',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    switchLang: '切换到英文',
    otherLang: 'EN',
    navLabel: '主导航',
    footerNavLabel: '页脚导航',
    footerExploreLabel: '探索',
    footerConnectLabel: '连接',
    goTo: '跳转到',
  },
  en: {
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    themeToAuto: 'Follow system theme',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    switchLang: 'Switch to Chinese',
    otherLang: '中',
    navLabel: 'Main navigation',
    footerNavLabel: 'Footer navigation',
    footerExploreLabel: 'Explore',
    footerConnectLabel: 'Connect',
    goTo: 'Go to',
  },
};

/** 语言切换入口的本地存储键，避免与主题偏好互相干扰。 */
export const LANG_STORAGE_KEY = 'ryveo-lang';
/** 主题偏好存储键。未设置时跟随系统。 */
export const THEME_STORAGE_KEY = 'ryveo-theme';