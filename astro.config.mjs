// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { NFL_PAST_PAGES } from './src/data/nfl-past-pages.mjs';

// https://astro.build/config
// DG 24 Oct 2026 (posicionamiento): redirect stubs + pages whose canonical points elsewhere.
const RETIRED_PATHS = [
  '/ver-futbol-madrid/',
  '/football-bar-puerta-del-sol/',
  '/es/bar-futbol-puerta-del-sol/',
  '/champions-league-irish-pub-sol/',
  '/es/champions-pub-irlandes-sol/',
  '/news/champions-league-tonight-20-oct/',
  '/news/champions-league-tomorrow-21-oct/',
  '/es/noticias/champions-hoy-20-oct/',
  '/es/noticias/champions-manana-21-oct/',
  '/watch-football-madrid/',
  '/es/ver-futbol-madrid/',
  // DG LUNES-26 (26 Oct 2026, PUENTES-26-DUB)
  '/de/leipzig-fans-madrid/',
  '/rb-leipzig/',
  '/el-clasico/',
  '/watch-leinster-munster-madrid/',
  '/leinster-munster/',
  // Oktoberfest Madrid 2026 ended 15 Nov — stubs keep the URLs, noindex
  '/oktoberfest-madrid-2026/',
  '/es/oktoberfest-madrid-2026/',
  '/de/oktoberfest-madrid-2026/',
];

export default defineConfig({
  site: 'https://dublinersmadrid.es',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  // Keep source whitespace: compressHTML dropped the space between text and links ("See our<a>", "</a>or").
  compressHTML: false,
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('404')) return false;
        try {
          const path = new URL(page).pathname;
          // Legacy Spanish orphan at EN root + redirect stubs and canonicalized pages (DG 24 Oct 2026) — never sitemap
          // + past-dated NFL pages (owner via DG 23 Nov 2026): noindex, out of the sitemap
          return !RETIRED_PATHS.includes(path) && !NFL_PAST_PAGES.includes(path);
        } catch {
          return true;
        }
      },
    }),
  ],
});
