import { withBase } from './site';

export type Lang = 'en' | 'es';

/** EN path → ES path (both with trailing slash). */
export const PATH_PAIRS: Record<string, string> = {
  '/': '/es/',
  '/whats-on/': '/es/partidos/',
  '/wednesday-1-euro-shots-madrid/': '/es/miercoles-chupitos-1-euro/',
  '/sports-bar-madrid/': '/es/bar-deportivo-madrid/',
  '/visit/': '/es/visitar/',
  '/contact/': '/es/contacto/',
  '/privacy/': '/es/privacidad/',
  '/premier-league-pub-madrid/': '/es/premier-league-pub-madrid/',
  '/champions-league-bar-madrid/': '/es/champions-league-bar-madrid/',
  '/international-students-pub-madrid/': '/es/estudiantes-internacionales/',
  '/about/': '/es/sobre-dubliners/',
  '/irish-pub-near-plaza-mayor/': '/es/pub-irlandes-plaza-mayor/',
  '/nfl-madrid/': '/es/nfl-madrid/',
  '/el-clasico-madrid/': '/es/ver-el-clasico-madrid/',
  '/menu/': '/es/carta/',
  '/nfl-sunday-madrid-guide/': '/es/guia-domingo-nfl-madrid/',
  '/brighton-fans-madrid/': '/es/aficionados-brighton-madrid/',
  '/night-out-near-sol-madrid/': '/es/noche-cerca-de-sol/',
  '/oktoberfest-madrid-2026/': '/es/oktoberfest-madrid-2026/',
  '/ireland-rugby-madrid/': '/es/rugby-irlanda-madrid/',
  '/halloween-madrid-2026/': '/es/halloween-madrid-2026/',
  '/thanksgiving-madrid/': '/es/thanksgiving-madrid/',
  '/4-bars-one-fan-weekend/': '/es/cuatro-bares-fin-de-semana/',
  '/where-to-watch-nfl-madrid/': '/es/donde-ver-nfl-madrid/',
  '/sunday-sports-sol/': '/es/deportes-domingo-sol/',
  '/nfl-madrid-four-sister-bars/': '/es/nfl-madrid-cuatro-bares-hermanos/',
  '/saturday-sunday-sol-four-bars/': '/es/sabado-domingo-sol-cuatro-bares/',
  '/saturday-in-sol-today/': '/es/sabado-en-sol-hoy/',
  '/nfl-fans-madrid-this-saturday/': '/es/fin-de-semana-nfl-ya-se-vive/',
  '/saturday-night-sol-valencia-real-madrid/': '/es/sabado-noche-sol-valencia-real-madrid/',
  '/before-after-bengals-falcons-sol/': '/es/antes-despues-bengals-falcons-sol/',
  '/sunday-nfl-near-sol-8-nov/': '/es/nfl-domingo-cerca-sol-8-nov/',
  '/four-corner-opens-sunday-1400/': '/es/four-corner-abre-domingo-1400/',
  '/atletico-barcelona-sol-8-nov/': '/es/atletico-barcelona-sol-8-nov/',
  '/afternoon-evening-nfl-sol-8-nov/': '/es/nfl-tarde-noche-sol-8-nov/',
  '/nfl-visitors-sol-atletico-barcelona/': '/es/visitantes-nfl-sol-atletico-barcelona/',
  '/gather-sol-atletico-barcelona-sunday/': '/es/quedada-sol-atletico-barcelona-domingo/',
  '/meetup-1800-pasaje-matheu-espoz-mina/': '/es/quedada-1800-pasaje-matheu-espoz-mina/',
  '/walk-sol-four-sister-bars/': '/es/andar-sol-cuatro-bares-hermanos/',
  '/nfl-weekend-madrid-screens-only/': '/es/fin-semana-nfl-madrid-en-pantalla/',
  '/international-nfl-fans-near-sol/': '/es/aficionados-nfl-internacionales-sol/',
  '/which-sister-bar-sunday-sol/': '/es/que-bar-hermano-domingo-sol/',
  '/tonight-valencia-then-sunday-sol/': '/es/esta-noche-valencia-luego-domingo-sol/',
  '/sunday-nfl-slate-stay-in-sol/': '/es/parrilla-nfl-domingo-quedarse-sol/',
  '/pick-sunday-nfl-clock-sol/': '/es/elige-reloj-nfl-domingo-sol/',
  '/after-valencia-late-sol/': '/es/despues-valencia-madrugada-sol/',
  '/sunday-lunch-then-screens-sol/': '/es/comida-domingo-luego-pantallas-sol/',
  '/redzone-sunday-sol-dubliners/': '/es/redzone-domingo-sol-dubliners/',
  '/premier-league-sunday-sol-8-nov/': '/es/premier-league-domingo-sol-8-nov/',
  '/english-football-1500-sol-8-nov/': '/es/futbol-ingles-1500-sol-8-nov/',
  '/man-utd-villa-sol-8-nov/': '/es/man-utd-villa-sol-8-nov/',
  '/meetup-over-hold-espoz-mina-2100/': '/es/quedada-cerrada-espoz-mina-2100/',
  '/after-tonight-sunday-starts-victoria-6/': '/es/despues-esta-noche-domingo-victoria-6/',
  '/sol-metro-2100-which-saturday-door/': '/es/metro-sol-2100-que-puerta-sabado/',
  '/english-tourists-saturday-hours-until-premier/': '/es/turistas-ingleses-horas-sabado-hasta-premier/',
  '/hop-two-streets-last-pint-after-derby/': '/es/saltar-dos-calles-ultima-pinta-despues-derbi/',
  '/fifteen-hours-sol-until-four-corner-1400/': '/es/quince-horas-sol-hasta-four-corner-1400/',
  '/from-sol-hotel-first-sunday-street-victoria-6/': '/es/del-hotel-sol-primera-calle-domingo-victoria-6/',
  '/wake-sol-sunday-premier-block-which-door/': '/es/despierta-sol-bloque-premier-que-puerta/',
  '/barajas-small-hours-into-sol-until-1400/': '/es/barajas-madrugada-a-sol-hasta-1400/',
  '/two-streets-all-day-premier-nfl-atleti/': '/es/dos-calles-todo-el-dia-premier-nfl-atleti/',
  '/first-metro-into-sol-sunday-station-to-door/': '/es/primer-metro-a-sol-domingo-estacion-a-puerta/',
  '/brighton-ipswich-1500-sol-skip-liverpool-chelsea-united/': '/es/brighton-ipswich-1500-sol-sin-liverpool-chelsea-united/',
  '/plaza-mayor-arcade-downhill-sol-doors-before-1400/': '/es/plaza-mayor-soportales-cuesta-abajo-puertas-sol-antes-1400/',
  '/espoz-mina-7-two-doors-split-premier-then-nfl/': '/es/espoz-mina-7-dos-puertas-reparte-premier-luego-nfl/',
  '/atocha-cercanias-one-stop-into-sol-doors-before-1400/': '/es/atocha-cercanias-una-parada-a-sol-puertas-antes-1400/',
  '/glass-arcade-matheu-4-first-pint-before-sunday-kickoff/': '/es/galeria-acristalada-matheu-4-primera-pinta-antes-saque-domingo/',
  '/callao-preciados-shop-south-sol-doors-before-1400/': '/es/callao-preciados-compras-sur-puertas-sol-antes-1400/',
  '/oreillys-table-three-hours-until-victoria-6-1400/': '/es/mesa-oreillys-tres-horas-hasta-victoria-6-1400/',
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

export { HOURS_ES } from './data/hours';

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
      { href: '/es/sobre-dubliners/', label: 'Historia' },
      { href: '/es/partidos/', label: 'Partidos' },
      { href: '/es/carta/', label: 'Carta' },
      { href: '/es/miercoles-chupitos-1-euro/', label: 'Miércoles' },
      { href: '/es/visitar/', label: 'Visitar' },
      { href: '/es/contacto/', label: 'Contacto' },
    ];
  }
  return [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/whats-on/', label: "What's on" },
    { href: '/menu/', label: 'Menu' },
    { href: '/wednesday-1-euro-shots-madrid/', label: 'Wednesday' },
    { href: '/visit/', label: 'Visit' },
    { href: '/contact/', label: 'Contact' },
  ];
}

export function t(lang: Lang) {
  if (lang === 'es') {
    return {
      contact: 'Contacto',
      directions: 'Cómo llegar',
      menu: 'Menú',
      explore: 'Explorar',
      hours: 'Horario',
      openingHours: 'Horarios',
      skip: 'Saltar al contenido principal',
      fineprint: 'Dubliners Madrid · Calle de Espoz y Mina 7 · Madrid',
      tagline: 'Dubliners Madrid',
      home: 'Inicio',
      whatsOn: 'Partidos',
      wednesday: 'Miércoles chupitos a 1 €',
      privacy: 'Privacidad',
      about: 'Sobre Dubliners',
      visitHours: 'Visitar / horario',
      sportsBar: 'Bar deportivo Madrid',
      watchFootball: 'Ver fútbol en Madrid',
      premierLeague: 'Pub Premier League',
      champions: 'Bar Champions League',
      nearSol: 'Bar de fútbol cerca de Sol',
      students: 'Estudiantes internacionales',
      jsonLdDescription:
        'Pub irlandés de Madrid en la antigua sastrería Barragán (1885), junto a la Puerta del Sol, que conserva su techo pintado original. NFL y deporte americano, rugby y fútbol en nuestras pantallas, abierto cada día desde las 12:00 y con público internacional y personal que habla inglés. Calle de Espoz y Mina 7, Madrid.',
      jsonLdSlogan: 'Donde antes se cosían trajes, hoy se tejen historias.',
    };
  }
  return {
    contact: 'Contact',
    directions: 'Directions',
    menu: 'Menu',
    explore: 'Explore',
    hours: 'Hours',
    openingHours: 'Opening hours',
    skip: 'Skip to main content',
    fineprint: 'Dubliners Madrid · Calle de Espoz y Mina 7 · Madrid',
    tagline: 'Dubliners Madrid',
    home: 'Home',
    whatsOn: "What's on",
    wednesday: 'Wednesday €1 shots',
    privacy: 'Privacy',
    about: 'About',
    visitHours: 'Visit / hours',
    sportsBar: 'Sports bar Madrid',
    watchFootball: 'Watch football Madrid',
    premierLeague: 'Premier League pub',
    champions: 'Champions League bar',
    nearSol: 'Football bar near Sol',
    students: 'International students',
    jsonLdDescription:
      'Irish pub in Madrid in the former Barragán tailor shop (1885), just off Puerta del Sol, keeping its original painted ceiling. NFL and American sports, rugby and football on our screens, open daily from 12:00, with an international crowd and English-speaking staff. Calle de Espoz y Mina 7, Madrid.',
    jsonLdSlogan: 'Where suits were once made, stories are now shared.',
  };
}

export function homeHref(lang: Lang): string {
  return withBase(lang === 'es' ? '/es/' : '/');
}
