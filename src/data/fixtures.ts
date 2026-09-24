/**
 * Kick-offs Europe/Madrid. Curated international demand — not a full dump.
 * Sources (Thu 24 Sep 2026 ~15:00 Madrid re-verify — all KEEP):
 * - Intl break: no PL (MD6 10–12 Oct) / LaLiga (J8 ~11 Oct) / UCL MD2 13–14 Oct.
 * - UEFA NL MD1: Kosovo–IRL + Ned–Ger Thu 24 19:45 BST/18:45 UTC=20:45 Madrid
 *   (FAI.ie / Independent / FotMob / BBC); Türkiye–France Fri 25 18:45 UTC=20:45;
 *   Eng–Esp Sat 26 19:45 BST=20:45 (Wembley / englandfootball); Israel–IRL Sun 27
 *   19:45 Irish / 18:45 UTC=20:45 (FAI fixture list).
 * - Sat 26: F1 Azerbaijan GP 15:00 Baku (UTC+4) = 13:00 Madrid — formula1.com.
 * - Sun 27 NFL W3: Chiefs–Dolphins 13:00 ET / 12:00 CDT=19:00 Madrid (Chiefs.com);
 *   Ravens–Cowboys (Rio) 16:25 ET=22:25 — NFL.com.
 * - Sun 27 Prem Rugby: Leicester–Saracens 15:00 BST=16:00 — Sky Sports / Ultimate Rugby.
 * Omitted (hours/curation): TNF Falcons–Packers Thu 24 20:15 ET=02:15 Fri Madrid
 *   (after Thu close 02:00); UFC FN Rosas Jr–Barcelos Sat main 02:00 Madrid (not major);
 *   SNF/MNF; full Prem/URC/NFL dumps; other NL same-slot ties.
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
    dateKey: '2026-09-24',
    whenLabel: 'Thu 24 Sep',
    competition: 'UEFA Nations League',
    teams: 'Kosovo vs Ireland',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-24',
    whenLabel: 'Thu 24 Sep',
    competition: 'UEFA Nations League',
    teams: 'Netherlands vs Germany',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-25',
    whenLabel: 'Fri 25 Sep',
    competition: 'UEFA Nations League',
    teams: 'Türkiye vs France',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
  {
    dateKey: '2026-09-26',
    whenLabel: 'Sat 26 Sep',
    competition: 'Formula 1',
    teams: 'Azerbaijan Grand Prix',
    madridTime: '13:00',
    approxDurationMin: 150,
  },
  {
    dateKey: '2026-09-26',
    whenLabel: 'Sat 26 Sep',
    competition: 'UEFA Nations League',
    teams: 'England vs Spain',
    madridTime: '20:45',
    approxDurationMin: 120,
  },
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
