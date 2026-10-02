/**
 * Kick-offs Europe/Madrid. Curated commercially important fixtures only.
 * Sources (Fri 2 Oct 2026 ~15:35 Madrid — week 5–11 pass):
 * - KEEP current weekend lifecycle until past:
 *   Fri 2 (show-at-venue CONFIRMED): France vs Italy 20:45; Ukraine vs NI 20:45.
 *   Sat 3 NL agenda: Croatia–England 18:00; Spain–Czechia 20:45; N.Macedonia–Scotland 20:45.
 *   Sun 4: NFL London Colts–Commanders 15:30 agenda; NL 20:45 slate (PT–NO, WAL–DEN, NL–SRB, IRL–ISR, GRE–GER).
 * - Week Mon 5 – Sun 11 Oct 2026:
 *   CONFIRMED screens Sun 11 ~19:00 NFL (user/DG): Bears–Packers, Giants–Commanders,
 *     Colts–Steelers — 1:00 PM ET = 19:00 Madrid (media.nfl.com Week 5 final; Bears–Packers
 *     flexed to 1pm ET Sep 29).
 *   AGENDA-ONLY (no screen claim): Sun 11 NFL London PHI–JAX 9:30 AM ET = 15:30 Madrid;
 *     Sat 10 URC Ulster–Munster 17:30 UK = 18:30 Madrid; Leinster–Cardiff 19:45 UK = 20:45
 *     (ulster.rugby / cardiffrugby.wales / Irish Times).
 *   High-demand football agenda (premierleague.com + realmadrid.com):
 *     Sat 10 PL Arsenal–Leeds 12:30 UK = 13:30 Madrid; Man Utd–Spurs 17:30 UK = 18:30;
 *     Sat 10 LaLiga Real Madrid–Villarreal 21:00 CEST (official RM);
 *     Sun 11 PL Liverpool–Man City 16:30 UK = 17:30 Madrid.
 * - F1 Singapore GP Race Sun 11 20:00 SGT = 14:00 Madrid (formula1.com / motorsport.com) —
 *   CONFIRMED screens (user/DG 2 Oct). Sprint Sat 11:00 Madrid omitted (before Sat open 12:00). Quali not listed.
 * - Tennis: Shanghai Masters 5–18 Oct early rounds only in window — skip (no semis/finals /
 *   star highlight verified for 5–11).
 * - OMIT: TB@DAL Fri 9 02:15; Bledisloe; NBA; other NFL 19:00; filler URC
 *   (Dragons/Ospreys/Glasgow/Connacht/Bulls/Lions etc.); mid-table PL fillers; UCL MD2
 *   is 13–14 Oct (outside window); F1 Bahrain/Malaysia race Sun 4 09:00 Madrid (before week).
 * Hours: Mon–Thu/Sun 12:00–02:00; Fri–Sat 12:00–02:30. Wed €1 never fused with
 * Four Corner. Screen claim ONLY when confirmedOnScreens === true.
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
    dateKey: '2026-10-02',
    whenLabel: 'Fri 2 Oct',
    competition: 'UEFA Nations League',
    teams: 'France vs Italy',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-02',
    whenLabel: 'Fri 2 Oct',
    competition: 'UEFA Nations League',
    teams: 'Ukraine vs Northern Ireland',
    madridTime: '20:45',
    approxDurationMin: 120,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-03',
    whenLabel: 'Sat 3 Oct',
    competition: 'UEFA Nations League',
    teams: 'Croatia vs England',
    madridTime: '18:00',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-03',
    whenLabel: 'Sat 3 Oct',
    competition: 'UEFA Nations League',
    teams: 'Spain vs Czechia',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-03',
    whenLabel: 'Sat 3 Oct',
    competition: 'UEFA Nations League',
    teams: 'North Macedonia vs Scotland',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'NFL (London)',
    teams: 'Colts vs Commanders',
    madridTime: '15:30',
    approxDurationMin: 210,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Portugal vs Norway',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Wales vs Denmark',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Netherlands vs Serbia',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Ireland vs Israel',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Greece vs Germany',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  // --- Week Mon 5 – Sun 11 Oct (THIS WEEK’S LIVE SPORTS from Sun 4 publish / now) ---
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'Premier League',
    teams: 'Arsenal vs Leeds United',
    madridTime: '13:30',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'United Rugby Championship',
    teams: 'Ulster vs Munster',
    madridTime: '18:30',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'Premier League',
    teams: 'Manchester United vs Tottenham',
    madridTime: '18:30',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'United Rugby Championship',
    teams: 'Leinster vs Cardiff',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-10',
    whenLabel: 'Sat 10 Oct',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Villarreal',
    madridTime: '21:00',
    approxDurationMin: 120,
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
  },
  {
    dateKey: '2026-10-11',
    whenLabel: 'Sun 11 Oct',
    competition: 'Premier League',
    teams: 'Liverpool vs Manchester City',
    madridTime: '17:30',
    approxDurationMin: 120,
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
