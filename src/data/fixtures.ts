/**
 * Kick-offs Europe/Madrid. Curated international demand — not a full dump.
 * Sources (Sun 27 Sep 2026 ~10:10 Madrid — domingo web agenda):
 * - RETIRED Sat 26: F1 Azerbaijan GP + Eng–Esp NL (finished Sat; removed).
 * - Sun 27 KEEP (re-verified): Prem Rugby Leicester–Saracens 16:00 (TNT/Sky);
 *   NFL Chiefs–Dolphins 19:00 Madrid = 1:00pm ET (NFL.com W3);
 *   NL Israel–Ireland 20:45 = 18:45 UTC (FotMob / RTE / FAI Debrecen);
 *   NFL Ravens–Cowboys Rio 22:25 = 4:25pm ET (NFL.com international).
 * - Week Mon 28–Sun 4 Oct: UEFA Nations League intl window (FotMob API + UEFA.com).
 *   No PL / LaLiga / UCL / UEL club matchdays this week (resume ~10–15 Oct).
 * - Wed 30 Sep: no NL scheduled — do not invent sport; Wed €1 stays page copy only.
 * - Omitted hours: F1 Bahrain@Sepang Sun 4 ~10:00 Madrid (before open);
 *   NFL MNF Mon 28 / TNF Thu 1 / SNF Sun 27 (start after close).
 * - Omitted curation: League C/D NL, ordinary A/B filler, full Prem Rugby dump.
 * Hours: Mon–Thu/Sun close 02:00; Fri–Sat 02:30 — listed broadcast fits.
 * No invented fixtures.
 */
export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string; // HH:mm 24h Europe/Madrid
  /** Approximate broadcast length for anti-stale “still on” checks (minutes). */
  approxDurationMin?: number;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-09-27',
    whenLabel: 'Sun 27 Sep',
    competition: 'Prem Rugby',
    teams: 'Leicester Tigers vs Saracens',
    madridTime: '16:00',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-27',
    whenLabel: 'Sun 27 Sep',
    competition: 'NFL',
    teams: 'Chiefs vs Dolphins',
    madridTime: '19:00',
    approxDurationMin: 210,
  },
  {
    dateKey: '2026-09-27',
    whenLabel: 'Sun 27 Sep',
    competition: 'UEFA Nations League',
    teams: 'Israel vs Ireland',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-27',
    whenLabel: 'Sun 27 Sep',
    competition: 'NFL',
    teams: 'Ravens vs Cowboys (Rio)',
    madridTime: '22:25',
    approxDurationMin: 210,
  },
  {
    dateKey: '2026-09-28',
    whenLabel: 'Mon 28 Sep',
    competition: 'UEFA Nations League',
    teams: 'Northern Ireland vs Hungary',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-28',
    whenLabel: 'Mon 28 Sep',
    competition: 'UEFA Nations League',
    teams: 'Belgium vs France',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-29',
    whenLabel: 'Tue 29 Sep',
    competition: 'UEFA Nations League',
    teams: 'Spain vs Croatia',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-29',
    whenLabel: 'Tue 29 Sep',
    competition: 'UEFA Nations League',
    teams: 'Czechia vs England',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-01',
    whenLabel: 'Thu 1 Oct',
    competition: 'UEFA Nations League',
    teams: 'Ireland vs Austria',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-02',
    whenLabel: 'Fri 2 Oct',
    competition: 'UEFA Nations League',
    teams: 'France vs Italy',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-10-02',
    whenLabel: 'Fri 2 Oct',
    competition: 'UEFA Nations League',
    teams: 'Ukraine vs Northern Ireland',
    madridTime: '20:45',
    approxDurationMin: 120,
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
    dateKey: '2026-10-04',
    whenLabel: 'Sun 4 Oct',
    competition: 'UEFA Nations League',
    teams: 'Ireland vs Israel',
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
