/**
 * Four sister bars — NFL Madrid 2026 fan meeting point near Puerta del Sol.
 * Owner correction 6 Nov 2026: one collective campaign, not four isolated pages.
 * Four Corner: include as a sister bar. Sunday 8 November from 14:00 until late.
 * Owner-confirmed: has sports screens. Do not claim Saturday hours or list its games.
 *
 * Maps checked 7 Nov 2026:
 * - O'Reilly's CID 9285869778750479445 — Pasaje de Matheu 4 (live hub + sister-site listing).
 * - Dubliners CID 4384002297188950803 — Espoz y Mina 7 (GBP in site.ts).
 * - O'Connell's CID 10697659365903665225 — Espoz y Mina 7 (distinct place from Dubliners).
 * - Four Corner has no CID on our sites; name+address search avoids the hostel at the same street number.
 */
export const FOUR_BARS_MAPS = {
  oreillys: 'https://maps.google.com/maps?cid=9285869778750479445',
  dubliners: 'https://www.google.com/maps?cid=4384002297188950803',
  oconnell: 'https://www.google.com/maps?cid=10697659365903665225',
  fourCorner:
    'https://www.google.com/maps/search/?api=1&query=Four+Corner+Calle+de+la+Victoria+6+28012+Madrid',
} as const;

/** Walking-directions URLs from google-campaign.md (CID listings stay on FOUR_BARS_MAPS). */
export const FOUR_BARS_DIR = {
  oreillys: 'https://www.google.com/maps/dir/?api=1&destination=Pasaje+de+Matheu+4,+28012+Madrid',
  dubliners: 'https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJLdKNhYAoQg0RE6Nxotwa1zw',
  oconnell: 'https://www.google.com/maps/dir/?api=1&destination=Calle+de+Espoz+y+Mina+7,+28012+Madrid',
  fourCorner: 'https://www.google.com/maps/dir/?api=1&destination=Calle+de+la+Victoria+6,+28012+Madrid',
} as const;

export const SISTER_SITES = {
  oreillys: 'https://oreillys-restaurant-bar.localo.site/',
  oconnells: 'https://oconnellsmadrid.es/',
  oconnellsEs: 'https://oconnellsmadrid.es/es',
} as const;

export const FOUR_BARS = [
  {
    id: 'oreillys',
    name: "O'Reilly's Restaurant Bar",
    address: 'Pasaje de Matheu 4, 28012 Madrid',
    maps: FOUR_BARS_MAPS.oreillys,
    hoursEn: 'Saturday 7 Nov: 11:30–01:30 (daily)',
    hoursEs: 'Sábado 7 nov: 11:30–01:30 (todos los días)',
  },
  {
    id: 'dubliners',
    name: 'Dubliners',
    address: 'Calle de Espoz y Mina 7, 28012 Madrid',
    maps: FOUR_BARS_MAPS.dubliners,
    hoursEn: 'Sat 7 Nov 12:00–02:30 · Sun 8 Nov from 12:00',
    hoursEs: 'Sáb 7 nov 12:00–02:30 · dom 8 nov desde las 12:00',
  },
  {
    id: 'oconnell',
    name: "O'Connell's",
    address: 'Calle de Espoz y Mina 7, 28012 Madrid',
    maps: FOUR_BARS_MAPS.oconnell,
    hoursEn: 'Sat 7 Nov from 15:00 · Sun 8 Nov from 12:00 (usual Sun 14:00)',
    hoursEs: 'Sáb 7 nov desde las 15:00 · dom 8 nov desde las 12:00 (habitual 14:00)',
  },
  {
    id: 'fourCorner',
    name: 'Four Corner',
    address: 'Calle de la Victoria 6, 28012 Madrid',
    maps: FOUR_BARS_MAPS.fourCorner,
    hoursEn: 'Sunday 8 Nov from 14:00 until late · sports screens',
    hoursEs: 'Domingo 8 nov desde las 14:00 hasta la madrugada · pantallas de deporte',
  },
] as const;

export const SHOW_UNTIL_FAN_WEEKEND = '2026-11-08';

export const FAN_WEEKEND_HUB = {
  en: '/4-bars-one-fan-weekend/',
  es: '/es/cuatro-bares-fin-de-semana/',
} as const;

export const FAN_WEEKEND_SATURDAY = {
  en: '/saturday-in-sol-today/',
  es: '/es/sabado-en-sol-hoy/',
} as const;

export const FAN_WEEKEND_SATURDAY_TONIGHT = {
  en: '/nfl-fans-madrid-this-saturday/',
  es: '/es/fin-de-semana-nfl-ya-se-vive/',
} as const;

export const FAN_WEEKEND_FOUR_CORNER = {
  en: '/four-corner-opens-sunday-1400/',
  es: '/es/four-corner-abre-domingo-1400/',
} as const;

export const FAN_WEEKEND_SUNDAY = {
  en: '/sunday-sports-sol/',
  es: '/es/deportes-domingo-sol/',
} as const;

export const FAN_WEEKEND_NFL_GUIDE = {
  en: '/nfl-sunday-madrid-guide/',
  es: '/es/guia-domingo-nfl-madrid/',
} as const;

/** Original weekend articles (unique slugs — do not retitle live pages). */
export const ORIGINAL_WEEKEND_ARTICLES = {
  meetup: {
    en: '/meetup-1800-pasaje-matheu-espoz-mina/',
    es: '/es/quedada-1800-pasaje-matheu-espoz-mina/',
    labelEn: 'Meetup 18:00–19:00 walking order',
    labelEs: 'Quedada 18:00–19:00, orden del paseo',
  },
  walk: {
    en: '/walk-sol-four-sister-bars/',
    es: '/es/andar-sol-cuatro-bares-hermanos/',
    labelEn: 'Walk from Sol to the four bars',
    labelEs: 'Andar desde Sol a los cuatro bares',
  },
  screens: {
    en: '/nfl-weekend-madrid-screens-only/',
    es: '/es/fin-semana-nfl-madrid-en-pantalla/',
    labelEn: 'Weekend on screens, no stadium',
    labelEs: 'Fin de semana en pantalla, sin estadio',
  },
  international: {
    en: '/international-nfl-fans-near-sol/',
    es: '/es/aficionados-nfl-internacionales-sol/',
    labelEn: 'International NFL fans near Sol',
    labelEs: 'Aficionados NFL internacionales',
  },
} as const;

/** Europe/Madrid calendar date YYYY-MM-DD (banner/nav hide after Sunday). */
export function madridYmd(d: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

export function isFanWeekendLive(d: Date = new Date()): boolean {
  return madridYmd(d) <= SHOW_UNTIL_FAN_WEEKEND;
}
