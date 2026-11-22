/**
 * Rugby Nations Championship final weekend 27–29 Nov 2026 (Madrid kick-offs).
 * Kick-offs Madrid time — World Rugby match centre + Allianz Stadium Twickenham programme.
 * ES pairing order: Francia–Sudáfrica (final) even when WR lists South Africa–France.
 */
export const RUGBY_FINALS_GUIDE_EN = '/rugby-nations-finals-weekend-madrid/';
export const RUGBY_FINALS_GUIDE_ES = '/es/rugby-nations-finals-fin-de-semana-sol/';

export const RUGBY_FINALS_LINK = {
  href: RUGBY_FINALS_GUIDE_EN,
  hrefEs: RUGBY_FINALS_GUIDE_ES,
  labelEn: 'Nations Championship finals weekend near Sol',
  labelEs: 'Nations Championship — fin de semana junto a Sol',
} as const;

export type RugbyFinalsDay = {
  dateKey: string;
  headingEn: string;
  headingEs: string;
  matches: {
    time: string;
    en: string;
    es: string;
    highlight?: boolean;
    final?: boolean;
  }[];
};

export const RUGBY_FINALS_WEEKEND: RugbyFinalsDay[] = [
  {
    dateKey: '2026-11-27',
    headingEn: 'Friday 27 November',
    headingEs: 'Viernes 27 de noviembre',
    matches: [
      { time: '17:40', en: 'Italy v Fiji', es: 'Italia–Fiyi' },
      { time: '21:10', en: 'Ireland v Australia', es: 'Irlanda–Australia', highlight: true },
    ],
  },
  {
    dateKey: '2026-11-28',
    headingEn: 'Saturday 28 November',
    headingEs: 'Sábado 28 de noviembre',
    matches: [
      { time: '14:10', en: 'Wales v Japan', es: 'Gales–Japón' },
      { time: '17:40', en: 'England v New Zealand', es: 'Inglaterra–Nueva Zelanda', highlight: true },
    ],
  },
  {
    dateKey: '2026-11-29',
    headingEn: 'Sunday 29 November',
    headingEs: 'Domingo 29 de noviembre',
    matches: [
      { time: '14:10', en: 'Scotland v Argentina', es: 'Escocia–Argentina' },
      { time: '17:40', en: 'France v South Africa', es: 'Francia–Sudáfrica', highlight: true, final: true },
    ],
  },
];