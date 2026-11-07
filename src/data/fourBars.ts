/**
 * Four sister bars — NFL Madrid 2026 fan meeting point near Puerta del Sol.
 * Owner correction 6 Nov 2026: one collective campaign, not four isolated pages.
 * Four Corner: include as a sister bar. Sunday 8 November from 14:00 until late.
 * Do not claim Saturday hours or that it shows NFL/sport.
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
    hoursEn: 'Sunday 8 Nov from 14:00 until late',
    hoursEs: 'Domingo 8 nov desde las 14:00 hasta la madrugada',
  },
] as const;

export const SHOW_UNTIL_FAN_WEEKEND = '2026-11-08';

export const FAN_WEEKEND_HUB = {
  en: '/4-bars-one-fan-weekend/',
  es: '/es/cuatro-bares-fin-de-semana/',
} as const;

export const FAN_WEEKEND_SATURDAY = {
  en: '/saturday-sunday-sol-four-bars/',
  es: '/es/sabado-domingo-sol-cuatro-bares/',
} as const;

export const FAN_WEEKEND_SUNDAY = {
  en: '/sunday-sports-sol/',
  es: '/es/deportes-domingo-sol/',
} as const;

export const FAN_WEEKEND_NFL_GUIDE = {
  en: '/nfl-sunday-madrid-guide/',
  es: '/es/guia-domingo-nfl-madrid/',
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
