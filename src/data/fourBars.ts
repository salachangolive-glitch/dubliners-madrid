/**
 * Four sister bars — NFL Madrid 2026 fan meeting point near Puerta del Sol.
 * Owner correction 6 Nov 2026: one collective campaign, not four isolated pages.
 * Four Corner: include as a sister bar; do not claim hours or that it shows NFL/sport.
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
