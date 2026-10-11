import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// <org>.github.io 仓库名与 Pages 域名一致，无需配置 base。
export default defineConfig({
  site: 'https://ryveo-lab.github.io',
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});