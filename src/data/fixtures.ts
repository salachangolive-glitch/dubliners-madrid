/**
 * Kick-offs Europe/Madrid. Curated commercially important fixtures only.
 * confirmedOnScreens is the owner venue order of 4 Oct 2026 ~19:11 (big events on all venues:
 * selecciones, Clásicos, F1, NFL, plus Liverpool–City, plus Sat 10 only when a top club
 * is playing: Arsenal, Chelsea, Manchester United, Tottenham, Atlético, Barcelona, Real Madrid).
 * Not a TV-rights inference. No Saturday row on this board lacks a top club.
 * Sources for times (week of Tue 6 – Tue 13 Oct 2026):
 * - Sun 4 Jets–Bears + NL slate RETIRED 5 Oct (past calendar day).
 * - Mon 5 NL France–Belgium + Italy–Turkey RETIRED 6 Oct (past calendar day).
 * - Tue 6 NL Croatia–Spain + England–Czechia RETIRED 7 Oct (past calendar day).
 * - Premier League MW6: premierleague.com/en/news/4688862 (17 Aug 2026).
 *   Sat 10 Arsenal–Leeds 13:30; Chelsea–Bournemouth 16:00; Man Utd–Spurs 18:30
 *   CONFIRMED (top club playing). Sun 11 Liverpool–Man City 17:30 CONFIRMED
 *   (owner order; Sunday hours 12:00–02:00, match finishes inside opening).
 * - Owner permanent 8 Oct 2026: Dubliners has DAZN + Movistar + Premier Sports.
 * - Radar 2026-10-08-ligero (Confirmed only; Tentative omitted): LaLiga Fri 9
 *   Málaga–Espanyol 21:00 DAZN; Sat 10 Rayo–Athletic 14:00 DAZN, Alavés–Atlético
 *   16:15, Barcelona–Getafe 18:30, Real Madrid–Villarreal 21:00 Movistar Plus+;
 *   Sun 11 Elche–Celta 14:00, R. Sociedad–Deportivo 16:15, Betis–Osasuna 18:30,
 *   Racing–Valencia 21:00; Mon 12 Levante–Sevilla 21:00; Sat 17 Espanyol–Atlético
 *   14:00 DAZN; Mon 19 Getafe–Rayo 21:00 DAZN.
 * - Conference: Thu 15 Craiova–Getafe 18:45; Thu 22 Getafe–Lugano 18:45 (M+ LDC).
 * - UCL: Tue 13 Atlético–Man Utd 21:00; Wed 21 Real Madrid–Leipzig 21:00 Movistar Plus+.
 * - F1 Singapore Sun 11 14:00 CONFIRMED. NFL Sun 11 as prior (Eagles agenda-only).
 * - URC J3 Premier Sports (Planet Rugby how-to-watch + owner Premier Sports):
 *   Fri 9 Glasgow–Connacht 20:45; Sat 10 Ulster–Munster 18:30; Leinster–Cardiff 20:45.
 * - OMIT Tentative: NFL London Game Pass, Europa League, other UCL MD2/J3,
 *   Levante–Athletic (canal no publicado). Coventry; Clásico 25 Oct; NBA.
 * Hours: Mon–Thu/Sun 12:00–02:00; Fri–Sat 12:00–02:30.
 * Screen claim ONLY when confirmedOnScreens === true. Never from TV-rights alone.
 * No invented fixtures / TV channels / reservations.
 */
export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string; // HH:mm 24h Europe/Madrid
  /** Approximate broadcast length for anti-stale “still on” checks (minutes). */
  approxDurationMin?: number;
  /** Explicit venue confirmation; only these rows may claim the match is on screens. */
  confirmedOnScreens?: boolean;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-10-09',
    whenLabel: 'Fri 9 Oct',
    competition: 'United Rugby Championship',
    teams: 'Glasgow Warriors vs Connacht',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-09',
    whenLabel: 'Fri 9 Oct',
    competition: 'LaLiga',
    teams: 'Málaga vs Espanyol',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'Premier League',
    teams: 'Arsenal vs Leeds United',
    madridTime: '13:30',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'LaLiga',
    teams: 'Rayo Vallecano vs Athletic Club',
    madridTime: '14:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'Premier League',
    teams: 'Chelsea vs Bournemouth',
    madridTime: '16:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'LaLiga',
    teams: 'Alavés vs Atlético de Madrid',
    madridTime: '16:15',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'Premier League',
    teams: 'Manchester United vs Tottenham',
    madridTime: '18:30',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'LaLiga',
    teams: 'Barcelona vs Getafe',
    madridTime: '18:30',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'United Rugby Championship',
    teams: 'Ulster vs Munster',
    madridTime: '18:30',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'United Rugby Championship',
    teams: 'Leinster vs Cardiff',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Villarreal',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'Formula 1',
    teams: 'Singapore Grand Prix',
    madridTime: '14:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'LaLiga',
    teams: 'Elche vs Celta',
    madridTime: '14:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'NFL (London)',
    teams: 'Eagles vs Jaguars',
    madridTime: '15:30',
    approxDurationMin: 210,
    confirmedOnScreens: false,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'LaLiga',
    teams: 'Real Sociedad vs Deportivo',
    madridTime: '16:15',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'Premier League',
    teams: 'Liverpool vs Manchester City',
    madridTime: '17:30',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'LaLiga',
    teams: 'Betis vs Osasuna',
    madridTime: '18:30',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'NFL',
    teams: 'Bears vs Packers',
    madridTime: '19:00',
    approxDurationMin: 210,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'NFL',
    teams: 'Giants vs Commanders',
    madridTime: '19:00',
    approxDurationMin: 210,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'NFL',
    teams: 'Colts vs Steelers',
    madridTime: '19:00',
    approxDurationMin: 210,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'LaLiga',
    teams: 'Racing vs Valencia',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-12',
    whenLabel: 'Mon 12 Oct',
    competition: 'LaLiga',
    teams: 'Levante vs Sevilla',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-13',
    whenLabel: 'Tue 13 Oct',
    competition: 'UEFA Champions League',
    teams: 'Atlético de Madrid vs Manchester United',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-15',
    whenLabel: 'Thu 15 Oct',
    competition: 'UEFA Conference League',
    teams: 'Craiova vs Getafe',
    madridTime: '18:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-17',
    whenLabel: 'Sat 17 Oct',
    competition: 'LaLiga',
    teams: 'Espanyol vs Atlético de Madrid',
    madridTime: '14:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-19',
    whenLabel: 'Mon 19 Oct',
    competition: 'LaLiga',
    teams: 'Getafe vs Rayo Vallecano',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Real Madrid vs RB Leipzig',
    madridTime: '21:00',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Conference League',
    teams: 'Getafe vs Lugano',
    madridTime: '18:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
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

function hmToMinutes(hm: string): number | null {
  const m = /^(\d{2}):(\d{2})$/.exec(hm);
  if (!m) return null;
  return Number(m[1]) * 60 + Number(m[2]);
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
 * True if the fixture is still “current” in Europe/Madrid:
 * - dateKey > today → upcoming week item
 * - dateKey === today → kickoff+duration not yet passed (Madrid wall clock; overnight end clamped to 23:59 same calendar day for Today slot)
 * - dateKey < today → past (never current)
 * Fail closed: missing/invalid time → not current.
 */
export function isCurrentFixture(f: Fixture, now: Date = new Date()): boolean {
  let today: string;
  try {
    today = madridToday(now);
  } catch {
    return false;
  }
  if (f.dateKey > today) return true;
  if (f.dateKey < today) return false;

  const nowHm = madridNowHm(now);
  if (!nowHm) return false;
  const startMin = hmToMinutes(f.madridTime);
  const nowMin = hmToMinutes(nowHm);
  if (startMin == null || nowMin == null) return false;
  const dur = f.approxDurationMin ?? 180;
  const endMin = Math.min(startMin + dur, 24 * 60 - 1);
  return nowMin < endMin;
}

/** Build-time / SSR: today’s still-current fixtures only, soonest first. */
export function fixturesForToday(now: Date = new Date()): Fixture[] {
  const today = madridToday(now);
  return sortFixturesSoonestFirst(
    FIXTURES.filter((f) => f.dateKey === today && isCurrentFixture(f, now)),
  );
}

/** Build-time / SSR: this week = today (current) + future dateKeys. Past days excluded. Soonest first. */
export function fixturesForWeek(now: Date = new Date()): Fixture[] {
  const today = madridToday(now);
  return sortFixturesSoonestFirst(
    FIXTURES.filter((f) => {
      if (f.dateKey > today) return true;
      if (f.dateKey === today) return isCurrentFixture(f, now);
      return false;
    }),
  );
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
