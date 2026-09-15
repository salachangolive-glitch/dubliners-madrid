import { withBase } from './site';

export type Lang = 'en' | 'es';

/** EN path → ES path (both with trailing slash). */
export const PATH_PAIRS: Record<string, string> = {
  '/': '/es/',
  '/whats-on/': '/es/partidos/',
  '/wednesday-1-euro-shots-madrid/': '/es/miercoles-chupitos-1-euro/',
  '/sports-bar-madrid/': '/es/bar-deportivo-madrid/',
  '/watch-football-madrid/': '/es/ver-futbol-madrid/',
  '/visit/': '/es/visitar/',
  '/contact/': '/es/contacto/',
  '/privacy/': '/es/privacidad/',
  '/premier-league-pub-madrid/': '/es/premier-league-pub-madrid/',
  '/champions-league-bar-madrid/': '/es/champions-league-bar-madrid/',
  '/football-bar-puerta-del-sol/': '/es/bar-futbol-puerta-del-sol/',
  '/international-students-pub-madrid/': '/es/estudiantes-internacionales/',
};

const ES_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(PATH_PAIRS).map(([en, es]) => [es, en]),
);

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const p = path.startsWith('/') ? path : `/${path}`;
  return p.endsWith('/') ? p : `${p}/`;
}

export function detectLang(path: string): Lang {
  return normalizePath(path).startsWith('/es/') ? 'es' : 'en';
}

/** Paired path in the other language (falls back to that locale's home). */
export function alternatePath(path: string): string {
  const p = normalizePath(path);
  if (p.startsWith('/es/')) {
    return ES_TO_EN[p] || '/';
  }
  return PATH_PAIRS[p] || '/es/';
}

export function hreflangFor(path: string): { en: string; es: string } {
  const p = normalizePath(path);
  if (p.startsWith('/es/')) {
    const en = ES_TO_EN[p] || '/';
    return { en, es: p };
  }
  const es = PATH_PAIRS[p] || '/es/';
  return { en: p, es };
}

export const HOURS_ES = [
  { day: 'Lunes', hours: '12:00–02:00' },
  { day: 'Martes', hours: '12:00–02:00' },
  { day: 'Miércoles', hours: '12:00–02:00' },
  { day: 'Viernes', hours: '12:30–02:30' },
  { day: 'Sábado', hours: '12:30–02:30' },
  { day: 'Domingo', hours: '12:00–02:00' },
] as const;

const WEEKDAY_ES = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'] as const;
const MONTH_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'] as const;

/** Format YYYY-MM-DD as Spanish short day label, e.g. "mié 16 sep". */
export function whenLabelEs(dateKey: string): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  const wd = WEEKDAY_ES[dt.getUTCDay()];
  const mon = MONTH_ES[m - 1];
  return `${wd} ${d} ${mon}`;
}

export type NavLink = { href: string; label: string };

export function navLinks(lang: Lang): NavLink[] {
  if (lang === 'es') {
    return [
      { href: '/es/', label: 'Inicio' },
      { href: '/es/bar-deportivo-madrid/', label: 'Bar deportivo' },
      { href: '/es/ver-futbol-madrid/', label: 'Ver fútbol' },
      { href: '/es/partidos/', label: 'Partidos' },
      { href: '/es/miercoles-chupitos-1-euro/', label: 'Miércoles' },
      { href: '/es/visitar/', label: 'Visitar' },
      { href: '/es/contacto/', label: 'Contacto' },
    ];
  }
  return [
    { href: '/', label: 'Home' },
    { href: '/sports-bar-madrid/', label: 'Sports bar' },
    { href: '/watch-football-madrid/', label: 'Watch football' },
    { href: '/whats-on/', label: "What's on" },
    { href: '/wednesday-1-euro-shots-madrid/', label: 'Wednesday' },
    { href: '/visit/', label: 'Visit' },
    { href: '/contact/', label: 'Contact' },
  ];
}

export function t(lang: Lang) {
  if (lang === 'es') {
    return {
      call: 'Llamar',
      contact: 'Contacto',
      directions: 'Cómo llegar',
      menu: 'Menú',
      explore: 'Explorar',
      hours: 'Horario',
      fineprint: 'Pub irlandés walk-in · pantallas indoor · sin reserva de mesa · Espoz y Mina 7, Madrid',
      tagline: 'Pub irlandés cerca de Puerta del Sol',
      home: 'Inicio',
      whatsOn: 'Partidos',
      wednesday: 'Miércoles chupitos a 1 €',
      privacy: 'Privacidad',
      visitHours: 'Visitar / horario',
      sportsBar: 'Bar deportivo Madrid',
      watchFootball: 'Ver fútbol en Madrid',
      premierLeague: 'Pub Premier League',
      champions: 'Bar Champions League',
      nearSol: 'Bar de fútbol cerca de Sol',
      students: 'Estudiantes internacionales',
      jsonLdDescription:
        'Pub irlandés cerca de Puerta del Sol en Madrid con pantallas deportivas indoor. Entrada libre. Miércoles chupitos a 1 €.',
    };
  }
  return {
    call: 'Call',
    contact: 'Contact',
    directions: 'Directions',
    menu: 'Menu',
    explore: 'Explore',
    hours: 'Hours',
    fineprint: 'Walk-in Irish pub · indoor screens · no table booking · Espoz y Mina 7, Madrid',
    tagline: 'Irish pub near Puerta del Sol',
    home: 'Home',
    whatsOn: "What's on",
    wednesday: 'Wednesday €1 shots',
    privacy: 'Privacy',
    visitHours: 'Visit / hours',
    sportsBar: 'Sports bar Madrid',
    watchFootball: 'Watch football Madrid',
    premierLeague: 'Premier League pub',
    champions: 'Champions League bar',
    nearSol: 'Football bar near Sol',
    students: 'International students',
    jsonLdDescription:
      'Irish pub near Puerta del Sol in Madrid with indoor sports screens. Walk-in. Wednesday €1 shots.',
  };
}

export function homeHref(lang: Lang): string {
  return withBase(lang === 'es' ? '/es/' : '/');
}
