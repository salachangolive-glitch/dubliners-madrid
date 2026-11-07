/**
 * Four sister bars — NFL Madrid 2026 fan meeting point near Puerta del Sol.
 * Owner 6 Nov 2026: one collective campaign, not four isolated pages.
 * Owner 7 Nov 2026: Four Corner Sunday 8 Nov opens 14:00 (2 PM). Promote from Saturday
 * and Sunday morning so fans can plan; do not wait until it opens. Do not claim it shows NFL/sport.
 */
export const FOUR_BARS_MAPS = {
  oreillys: 'https://maps.google.com/maps?cid=9285869778750479445',
  dubliners: 'https://www.google.com/maps?cid=4384002297188950803',
  oconnell: 'https://www.google.com/maps?cid=10697659365903665225',
  fourCorner:
    'https://www.google.com/maps/search/?api=1&query=Calle+de+la+Victoria+6+28012+Madrid',
} as const;

export const FOUR_BARS = [
  {
    id: 'oreillys',
    name: "O'Reilly's Restaurant Bar",
    address: 'Pasaje de Matheu 4, 28012 Madrid',
    maps: FOUR_BARS_MAPS.oreillys,
  },
  {
    id: 'dubliners',
    name: 'Dubliners',
    address: 'Calle de Espoz y Mina 7, 28012 Madrid',
    maps: FOUR_BARS_MAPS.dubliners,
  },
  {
    id: 'oconnell',
    name: "O'Connell St",
    address: 'Calle de Espoz y Mina 7, 28012 Madrid',
    maps: FOUR_BARS_MAPS.oconnell,
  },
  {
    id: 'fourCorner',
    name: 'Four Corner',
    address: 'Calle de la Victoria 6, 28012 Madrid',
    maps: FOUR_BARS_MAPS.fourCorner,
  },
] as const;

export const SHOW_UNTIL_FAN_WEEKEND = '2026-11-08';

/** Confirmed owner 7 Nov 2026: Sunday 8 Nov only. */
export const FOUR_CORNER_SUNDAY_OPENS = '14:00';
export const FOUR_CORNER_LINE_EN = 'FOUR CORNER — SUNDAY OPEN FROM 2 PM.';
export const FOUR_CORNER_LINE_ES = 'FOUR CORNER — DOMINGO ABRE DESDE LAS 14:00.';
export const FOUR_CORNER_STREET = 'Calle de la Victoria 6, Madrid';
