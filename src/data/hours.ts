/**
 * MASTER opening hours for Dubliners Madrid (single source of truth).
 * Authorised hours: Mon–Thu & Sun 12:00–02:00 · Fri–Sat 12:00–02:30 (Europe/Madrid).
 * Footer, Home, Visit, Wednesday pages, meta descriptions and the BarOrPub
 * JSON-LD all read from here. Change hours ONLY here, and only on owner order.
 */
export type WeekdayEn =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export const OPENING_HOURS: { day: WeekdayEn; es: string; opens: string; closes: string }[] = [
  { day: 'Monday', es: 'Lunes', opens: '12:00', closes: '02:00' },
  { day: 'Tuesday', es: 'Martes', opens: '12:00', closes: '02:00' },
  { day: 'Wednesday', es: 'Miércoles', opens: '12:00', closes: '02:00' },
  { day: 'Thursday', es: 'Jueves', opens: '12:00', closes: '02:00' },
  { day: 'Friday', es: 'Viernes', opens: '12:00', closes: '02:30' },
  { day: 'Saturday', es: 'Sábado', opens: '12:00', closes: '02:30' },
  { day: 'Sunday', es: 'Domingo', opens: '12:00', closes: '02:00' },
];

const range = (d: { opens: string; closes: string }) => `${d.opens}–${d.closes}`;

/** Footer / Visit table rows (EN). */
export const HOURS = OPENING_HOURS.map((d) => ({ day: d.day, hours: range(d) }));
/** Footer / Visit table rows (ES). */
export const HOURS_ES = OPENING_HOURS.map((d) => ({ day: d.es, hours: range(d) }));

export function hoursFor(day: WeekdayEn): string {
  const d = OPENING_HOURS.find((x) => x.day === day);
  return d ? range(d) : '';
}

const LATE: WeekdayEn[] = ['Friday', 'Saturday'];
const REGULAR: WeekdayEn[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'];

/** One-line summary, e.g. "Mon–Thu & Sun 12:00–02:00 · Fri–Sat 12:00–02:30". */
export function hoursSummary(lang: 'en' | 'es' = 'en', sep = ' · '): string {
  const reg = hoursFor('Monday');
  const late = hoursFor('Friday');
  return lang === 'es'
    ? `Lun–jue y dom ${reg}${sep}Vie–sáb ${late}`
    : `Mon–Thu & Sun ${reg}${sep}Fri–Sat ${late}`;
}

/** schema.org OpeningHoursSpecification grouped by identical ranges. */
export function openingHoursJsonLd() {
  const groups = new Map<string, { opens: string; closes: string; days: WeekdayEn[] }>();
  for (const d of OPENING_HOURS) {
    const k = range(d);
    if (!groups.has(k)) groups.set(k, { opens: d.opens, closes: d.closes, days: [] });
    groups.get(k)!.days.push(d.day);
  }
  return [...groups.values()].map((g) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: g.days,
    opens: g.opens,
    closes: g.closes,
  }));
}

// Sanity (build-time): the summary groups must match the table.
for (const d of REGULAR) if (hoursFor(d) !== hoursFor('Monday')) throw new Error('hours summary mismatch');
for (const d of LATE) if (hoursFor(d) !== hoursFor('Friday')) throw new Error('hours summary mismatch');
