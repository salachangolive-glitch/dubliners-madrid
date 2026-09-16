// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://salachangolive-glitch.github.io',
  base: '/dubliners-madrid',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404') && !page.includes('/ver-futbol-madrid'),
    }),
  ],
});
