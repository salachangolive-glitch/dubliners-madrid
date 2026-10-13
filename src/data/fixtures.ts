/**
 * Kick-offs Europe/Madrid. Curated commercially important fixtures only.
 * confirmedOnScreens = Radar Confirmed + kick-off inside opening hours (src/data/hours.ts).
 * Not a TV-rights inference on its own. Owner permanent 8 Oct 2026: Dubliners has
 * DAZN + Movistar + Premier Sports.
 * - Rows with dateKey < 2026-10-12 (9–11 Oct, already played) RETIRED 12 Oct (morning block).
 * - Mon 12: LaLiga Levante–Sevilla 21:00 (Movistar); Premier MW7 Coventry–Newcastle 21:00 (DAZN).
 * - UCL J2 Tue 13 Atlético–Man Utd, Galatasaray–Barcelona, Arsenal–Lille, Villarreal–Napoli
 *   21:00; Wed 14 LASK–Liverpool 18:45, Roma–Real Madrid, Man City–PSG, Betis–Porto,
 *   Aston Villa–Fenerbahçe 21:00 (Movistar Liga de Campeones; Roma–RM movistarplus.es ficha).
 * - UEL J2 Thu 15 USG–Real Sociedad 18:45, Celta–Juventus 21:00 (movistarplus.es fichas 11 Oct).
 * - Conference: Thu 15 Craiova–Getafe 18:45; Thu 22 Getafe–Lugano 18:45 (M+ LDC).
 * - LaLiga J9 Fri 16 Deportivo–Levante 21:00 (M+ & DAZN), Sat 17 Espanyol–Atlético 14:00 DAZN,
 *   Betis–Barcelona 18:30 DAZN, Valencia–Athletic 21:00 M+, Sun 18 Real Madrid–Sevilla 21:00 M+,
 *   Mon 19 Getafe–Rayo 21:00 DAZN.
 * - Premier MW7 times premierleague.com/en/news/4688862; channel DAZN (all Premier League in
 *   Spain on DAZN): Sat 17 Everton–Chelsea 13:30, Brentford–Liverpool 16:00, Man City–Ipswich
 *   16:00, Newcastle–Villa 18:30; Sun 18 Leeds–Man Utd 15:00, Forest–Arsenal 17:30;
 *   Mon 19 Tottenham–Coventry 21:00 (Radar 2026-10-12-profundo Confirmed, DAZN) ADDED 12 Oct.
 * - UCL: Wed 21 Real Madrid–Leipzig 21:00 Movistar Plus+.
 * - OMIT (Tentative / not verified): Clásico 25 Oct (Radar channel conflict), window 23–26 Oct,
 *   URC 23–24 Oct (Spain emission Tentative), NFL London Game Pass, NFL Sun 18, NCAA, UCL J3
 *   20–21 Oct (except RM–Leipzig), low-demand Premier/LaLiga rows, NBA.
 * - NFL Week 9 Sun 8 Nov (nfl.com/schedules/2026/by-week/week-9, ET+6h): owner confirmed via DG 13 Oct
 *   all Sunday NFL games live. Bucs–Bears 02:20 Mon OMITTED (after Sunday close 02:00).
 * Opening hours: see src/data/hours.ts (master source).
 * Screen claim ONLY when confirmedOnScreens === true. Never from TV-rights alone.
 * No invented fixtures / TV channels / reservations.
 */export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string; // HH:mm 24h Europe/Madrid
  /** Optional override of the standard sport duration (minutes). Normally unset. */
  approxDurationMin?: number;
  /** Explicit venue confirmation; only these rows may claim the match is on screens. */
  confirmedOnScreens?: boolean;
  /** Optional short per-row note (EN / ES). Rendered only on that row. */
  noteEn?: string;
  noteEs?: string;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-10-12',
    whenLabel: 'Mon 12 Oct',
    competition: 'LaLiga',
    teams: 'Levante vs Sevilla',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-12',
    whenLabel: 'Mon 12 Oct',
    competition: 'Premier League',
    teams: 'Coventry City vs Newcastle United',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-13',
    whenLabel: 'Tue 13 Oct',
    competition: 'UEFA Champions League',
    teams: 'Atlético de Madrid vs Manchester United',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Man United fans welcome: pre-match pints from 12:00, steps from Sol. Walk in, first come, first served.',
    noteEs: 'Aficionados del United bienvenidos: desde las 12:00, a un paso de Sol. Sin reserva, por orden de llegada.',
  },
  {
    dateKey: '2026-10-13',
    whenLabel: 'Tue 13 Oct',
    competition: 'UEFA Champions League',
    teams: 'Galatasaray vs Barcelona',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-13',
    whenLabel: 'Tue 13 Oct',
    competition: 'UEFA Champions League',
    teams: 'Arsenal vs Lille',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-13',
    whenLabel: 'Tue 13 Oct',
    competition: 'UEFA Champions League',
    teams: 'Villarreal vs Napoli',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-14',
    whenLabel: 'Wed 14 Oct',
    competition: 'UEFA Champions League',
    teams: 'LASK vs Liverpool',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-14',
    whenLabel: 'Wed 14 Oct',
    competition: 'UEFA Champions League',
    teams: 'Roma vs Real Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-14',
    whenLabel: 'Wed 14 Oct',
    competition: 'UEFA Champions League',
    teams: 'Manchester City vs Paris Saint-Germain',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-14',
    whenLabel: 'Wed 14 Oct',
    competition: 'UEFA Champions League',
    teams: 'Betis vs Porto',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-14',
    whenLabel: 'Wed 14 Oct',
    competition: 'UEFA Champions League',
    teams: 'Aston Villa vs Fenerbahçe',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-15',
    whenLabel: 'Thu 15 Oct',
    competition: 'UEFA Conference League',
    teams: 'Craiova vs Getafe',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-15',
    whenLabel: 'Thu 15 Oct',
    competition: 'UEFA Europa League',
    teams: 'Union Saint-Gilloise vs Real Sociedad',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-15',
    whenLabel: 'Thu 15 Oct',
    competition: 'UEFA Europa League',
    teams: 'Celta vs Juventus',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-16',
    whenLabel: 'Fri 16 Oct',
    competition: 'LaLiga',
    teams: 'Deportivo vs Levante',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'Premier League',
    teams: 'Everton vs Chelsea',
    madridTime: '13:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'LaLiga',
    teams: 'Espanyol vs Atlético de Madrid',
    madridTime: '14:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'Premier League',
    teams: 'Brentford vs Liverpool',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'Premier League',
    teams: 'Manchester City vs Ipswich Town',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'LaLiga',
    teams: 'Betis vs Barcelona',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'Premier League',
    teams: 'Newcastle United vs Aston Villa',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'LaLiga',
    teams: 'Valencia vs Athletic Club',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'Premier League',
    teams: 'Leeds United vs Manchester United',
    madridTime: '15:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'Premier League',
    teams: 'Nottingham Forest vs Arsenal',
    madridTime: '17:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Sevilla',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-19',
    whenLabel: 'Mon 19 Oct',
    competition: 'LaLiga',
    teams: 'Getafe vs Rayo Vallecano',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-19',
    whenLabel: 'Mon 19 Oct',
    competition: 'Premier League',
    teams: 'Tottenham vs Coventry City',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Real Madrid vs RB Leipzig',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Conference League',
    teams: 'Getafe vs Lugano',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Bengals vs Falcons',
    madridTime: '15:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners. Played at the Santiago Bernabéu, Madrid.',
    noteEs: 'En directo en Dubliners. Se juega en el Estadio Santiago Bernabéu, Madrid.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Broncos vs Panthers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Cowboys vs Colts',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Jets vs Chiefs',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Lions vs Dolphins',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Browns vs Saints',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Giants vs Eagles',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Rams vs Commanders',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Texans vs Chargers',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Raiders vs 49ers',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Packers vs Patriots',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Cardinals vs Seahawks',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
];

/** Human sport label for board rows (presentation only — does not change gates). */
export function sportLabel(competition: string): string {
  const c = competition.toLowerCase();
  if (c.includes('nfl')) return 'NFL';
  if (c.includes('nba')) return 'NBA';
  if (c.includes('formula') || c === 'f1') return 'Formula 1';
  if (c.includes('rugby') || c.includes('urc') || c.includes('six nations')) return 'Rugby';
  if (c.includes('tennis') || c.includes('atp') || c.includes('wta') || c.includes('masters')) {
    return 'Tennis';
  }
  return 'Football';
}

/** Spanish sport label for Partidos board. */
export function sportLabelEs(competition: string): string {
  const en = sportLabel(competition);
  if (en === 'Football') return 'Fútbol';
  if (en === 'Formula 1') return 'Fórmula 1';
  if (en === 'Tennis') return 'Tenis';
  return en; // NFL, NBA, Rugby
}

/** Today's calendar date YYYY-MM-DD in Europe/Madrid. */
export function madridToday(d: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

/** Madrid local wall-clock HH:mm (24h). Returns null if Intl fails (fail closed). */
export function madridNowHm(d: Date = new Date()): string | null {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(d);
    const hour = parts.find((p) => p.type === 'hour')?.value;
    const minute = parts.find((p) => p.type === 'minute')?.value;
    if (!hour || !minute) return null;
    return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
  } catch {
    return null;
  }
}

/** Standard duration per sport (minutes) used to decide when a fixture has finished. */
export const SPORT_DURATION_MIN: Record<string, number> = {
  Football: 120, // 90' + half-time + stoppage
  Rugby: 120,
  NFL: 210, // ~3h30
  'Formula 1': 150, // ~2h30
  NBA: 150,
  Tennis: 180, // best-of-3/5 varies; 3h is a conservative default
};
/** Any other sport: 3h (documented default). */
export const DEFAULT_DURATION_MIN = 180;

export function fixtureDurationMin(f: Fixture): number {
  if (f.approxDurationMin && f.approxDurationMin > 0) return f.approxDurationMin;
  return SPORT_DURATION_MIN[sportLabel(f.competition)] ?? DEFAULT_DURATION_MIN;
}

/** Offset (ms) of Europe/Madrid vs UTC at a given instant. */
function madridOffsetMs(epochMs: number): number {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Madrid',
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(epochMs));
  const g = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(g('year'), g('month') - 1, g('day'), g('hour'), g('minute'), g('second'));
  return asUtc - Math.floor(epochMs / 1000) * 1000;
}

/** Epoch ms of a Madrid wall-clock time (handles CET/CEST). */
export function madridWallToEpoch(dateKey: string, hm: string): number {
  const [y, m, d] = dateKey.split('-').map(Number);
  const [hh, mm] = hm.split(':').map(Number);
  const naive = Date.UTC(y, m - 1, d, hh, mm);
  let t = naive - madridOffsetMs(naive);
  t = naive - madridOffsetMs(t);
  return t;
}

export function fixtureStartMs(f: Fixture): number {
  return madridWallToEpoch(f.dateKey, f.madridTime);
}
export function fixtureEndMs(f: Fixture): number {
  return fixtureStartMs(f) + fixtureDurationMin(f) * 60_000;
}

/** Soonest first: dateKey then madridTime. Stable for same-slot ties (array order). */
export function sortFixturesSoonestFirst(list: Fixture[]): Fixture[] {
  return [...list].sort((a, b) => {
    if (a.dateKey !== b.dateKey) return a.dateKey < b.dateKey ? -1 : 1;
    if (a.madridTime !== b.madridTime) return a.madridTime < b.madridTime ? -1 : 1;
    return 0;
  });
}

/**
 * SINGLE agenda rule for EN + ES, Today/Hoy + Upcoming/Próximos (Europe/Madrid).
 * - finished (now >= start + sport duration) → hidden everywhere
 * - TODAY: kickoff on today's Madrid date, or already started and not finished
 *   (covers late games that run past midnight)
 * - UPCOMING: kickoff on a later Madrid date
 * The client script (FixtureAntiStale) applies exactly the same rule in the browser.
 */
export function buildNow(): Date {
  // Test hook: AGENDA_NOW=2026-10-09T20:50:00+02:00 npm run build (never set in deploy).
  const v = typeof process !== 'undefined' ? process.env?.AGENDA_NOW : undefined;
  return v ? new Date(v) : new Date();
}

export function agendaAt(now: Date = buildNow()): { todayKey: string; today: Fixture[]; upcoming: Fixture[] } {
  const todayKey = madridToday(now);
  const t = now.getTime();
  const live = sortFixturesSoonestFirst(FIXTURES).filter((f) => t < fixtureEndMs(f));
  const today = live.filter((f) => f.dateKey === todayKey || (f.dateKey < todayKey && fixtureStartMs(f) <= t));
  const upcoming = live.filter((f) => f.dateKey > todayKey);
  return { todayKey, today, upcoming };
}

/** True if the fixture has not finished yet at `now`. */
export function isCurrentFixture(f: Fixture, now: Date = new Date()): boolean {
  return now.getTime() < fixtureEndMs(f);
}

/** Build-time: today’s not-finished fixtures. */
export function fixturesForToday(now: Date = new Date()): Fixture[] {
  return agendaAt(now).today;
}

/** Build-time: today (not finished) + upcoming. */
export function fixturesForWeek(now: Date = new Date()): Fixture[] {
  const a = agendaAt(now);
  return [...a.today, ...a.upcoming];
}

/** Premier League or UEFA Champions League competition (SEO SportsEvent filter). */
export function isPremierOrChampions(competition: string): boolean {
  const c = competition.toLowerCase();
  return c.includes('premier league') || c.includes('champions league');
}

/**
 * SportsEvent JSON-LD for Confirmed Premier / Champions fixtures still current this week.
 * Location = Dubliners Irish Pub, Espoz y Mina 7, Sol, Madrid. Kick-off Europe/Madrid (+02 in Oct).
 */
export function sportsEventsJsonLd(
  fixtures: Fixture[],
  opts: { pageUrl: string; lang?: 'en' | 'es' },
): Record<string, unknown>[] {
  const lang = opts.lang ?? 'en';
  const venue = {
    '@type': 'BarOrPub',
    name: 'Dubliners Irish Pub',
    alternateName: 'Dubliners Madrid',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de Espoz y Mina 7',
      addressLocality: 'Madrid',
      addressRegion: 'Community of Madrid',
      postalCode: '28012',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4164,
      longitude: -3.7025,
    },
  };
  return fixtures
    .filter((f) => f.confirmedOnScreens && isPremierOrChampions(f.competition))
    .map((f) => {
      const parts = f.teams.split(' vs ');
      const description =
        lang === 'es'
          ? `Ver ${f.teams} (${f.competition}) en pantallas en Dubliners, pub irlandés en Sol, Espoz y Mina 7, Madrid.`
          : `Watch ${f.teams} (${f.competition}) on screens at Dubliners Irish Pub near Sol, Espoz y Mina 7, Madrid.`;
      const ev: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        name: `${f.teams} — ${f.competition}`,
        description,
        startDate: `${f.dateKey}T${f.madridTime}:00+02:00`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: venue,
        organizer: {
          '@type': 'BarOrPub',
          name: 'Dubliners Irish Pub',
          url: 'https://dublinersmadrid.es/',
        },
        url: opts.pageUrl,
      };
      if (parts.length === 2) {
        ev.homeTeam = { '@type': 'SportsTeam', name: parts[0].trim() };
        ev.awayTeam = { '@type': 'SportsTeam', name: parts[1].trim() };
      }
      return ev;
    });
}

/**
 * @deprecated Build-time snapshot only — do not treat as runtime “today”.
 * Prefer madridToday() / fixturesForToday() / fixturesForWeek(), plus client anti-stale.
 */
export const PREVIEW_TODAY = madridToday();
