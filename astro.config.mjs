// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
          return !RETIRED_PATHS.includes(path);
        } catch {
          return true;
        }
      },
    }),
  ],
});
