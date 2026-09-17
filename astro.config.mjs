// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dublinersmadrid.es',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('404')) return false;
        try {
          const path = new URL(page).pathname;
          // Legacy Spanish orphan at EN root — never sitemap
          return path !== '/ver-futbol-madrid/';
        } catch {
          return true;
        }
      },
    }),
  ],
});
