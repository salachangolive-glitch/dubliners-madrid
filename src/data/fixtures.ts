/**
 * Kick-offs Europe/Madrid. Curated commercially important fixtures only.
 * confirmedOnScreens is the owner venue order of 4 Oct 2026 ~19:11 (big events on all venues:
 * selecciones, Clásicos, F1, NFL, plus Liverpool–City, plus Sat 10 only when a top club
 * is playing: Arsenal, Chelsea, Manchester United, Tottenham, Atlético, Barcelona, Real Madrid).
 * Not a TV-rights inference. No Saturday row on this board lacks a top club.
 * Sources for times (week of Sun 4 – Sun 11 Oct 2026):
 * - Sun 4 ~19:10: Colts–Commanders RETIRED (ESPN final 30–13). Jets–Bears 19:00 stays.
 *   NL 20:45 (Portugal–Norway, Wales–Denmark, Netherlands–Serbia, Ireland–Israel,
 *   Greece–Germany) CONFIRMED — national teams, owner venue order.
 * - Mon 5 NL France–Belgium + Italy–Turkey 20:45 CONFIRMED (selecciones; in hours).
 * - Tue 6 Croatia–Spain and England–Czechia 20:45 CONFIRMED (selecciones; in hours).
 * - Premier League MW6: premierleague.com/en/news/4688862 (17 Aug 2026).
 *   Sat 10 Arsenal–Leeds 13:30; Chelsea–Bournemouth 16:00; Man Utd–Spurs 18:30
 *   CONFIRMED (top club playing). Sun 11 Liverpool–Man City 17:30 CONFIRMED
 *   (owner order; Sunday hours 12:00–02:00, match finishes inside opening).
 * - LaLiga J8: Sat 10 Alavés–Atlético 16:15; Barcelona–Getafe 18:30;
 *   Real Madrid–Villarreal 21:00 CONFIRMED (top club: Atlético, Barcelona, Real Madrid).
 * - F1 Singapore race Sun 11 14:00 Madrid CONFIRMED (owner venue order; F1).
 * - NFL Week 5: Sun 11 Eagles–Jaguars London 15:30 CONFIRMED; Bears–Packers /
 *   Giants–Commanders / Colts–Steelers 19:00 CONFIRMED (NFL, in hours).
 * - OMIT overnight NFL; Coventry (next week); Sun 25 Oct Clásico and Austin;
 *   URC filler; UCL MD2 13–14 Oct; NBA from 20 Oct.
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
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'NFL',
    teams: 'Jets vs Bears',
    madridTime: '19:00',
    approxDurationMin: 210,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Portugal vs Norway',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Wales vs Denmark',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Netherlands vs Serbia',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Ireland vs Israel',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Greece vs Germany',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-05',
    whenLabel: 'Mon 5 Oct',
    competition: 'UEFA Nations League',
    teams: 'France vs Belgium',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-05',
    whenLabel: 'Mon 5 Oct',
    competition: 'UEFA Nations League',
    teams: 'Italy vs Turkey',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-06',
    whenLabel: 'Tue 6 Oct',
    competition: 'UEFA Nations League',
    teams: 'Croatia vs Spain',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-06',
    whenLabel: 'Tue 6 Oct',
    competition: 'UEFA Nations League',
    teams: 'England vs Czechia',
    madridTime: '20:45',
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
    competition: 'NFL (London)',
    teams: 'Eagles vs Jaguars',
    madridTime: '15:30',
    approxDurationMin: 210,
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

/**
 * @deprecated Build-time snapshot only — do not treat as runtime “today”.
 * Prefer madridToday() / fixturesForToday() / fixturesForWeek(), plus client anti-stale.
 */
export const PREVIEW_TODAY = madridToday();
