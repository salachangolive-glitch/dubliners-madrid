/**
 * Kick-offs Europe/Madrid. Curated international demand — not a full dump.
 * Sources (Fri 2 Oct 2026 ~13:50 Madrid — weekend anticipation pass):
 * - RETIRED past: Tue 29 NL; Thu 1 Oct Ireland vs Austria (finished; removed).
 * - Fri 2 Oct (show-at-venue CONFIRMED by user): France vs Italy 20:45;
 *   Ukraine vs Northern Ireland 20:45 — UEFA default CET; BBC Fri fixtures.
 * - Sat 3 Oct NL (UEFA.com *All times CET; 20:45 unless stated* + BBC UK):
 *   Croatia vs England 18:00 CET (= Madrid); Spain vs Czechia 20:45;
 *   North Macedonia vs Scotland 20:45 (BBC 19:45 UK). Switzerland–Slovenia
 *   omitted (demand filter).
 * - Sun 4 Oct NL (UEFA default 20:45 CET; BBC all 19:45 UK = 20:45 Madrid):
 *   Portugal vs Norway; Wales vs Denmark; Netherlands vs Serbia;
 *   Ireland vs Israel; Greece vs Germany.
 * - Sun 4 Oct NFL London (nfl.com Week 4): Colts vs Commanders 9:30 AM ET
 *   = 15:30 Madrid — inside Sun hours 12:00–02:00; agenda-only (not screens).
 *   Other NFL Week 4 slots omitted (dump) or end after close (SNF 02:20 Mon).
 * - No PL / LaLiga / UCL / UEL club matchdays this week (resume ~10–15 Oct).
 * Hours: Mon–Thu/Sun close 02:00; Fri–Sat 02:30. Wed €1 never fused with
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
