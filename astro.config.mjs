// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cgpahelper.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const exclude = [
          '/404',
          '/500',
          '/sgpa-calculator',
          '/cgpa-to-percentage',
          '/percentage-to-cgpa',
          '/board-cgpa-calculator'
        ];
        return !exclude.some((path) => page.endsWith(path) || page.endsWith(path + '/'));
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
