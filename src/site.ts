export const SITE = {
  name: 'Dubliners',
  fullName: 'Dubliners Madrid',
  tagline: 'Irish pub near Sol',
  address: 'Calle de Espoz y Mina 7',
  postal: '28012 Madrid',
  city: 'Madrid',
  country: 'ES',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+de+Espoz+y+Mina+7,+28012+Madrid',
  mapsEmbed:
    'https://www.google.com/maps?q=Calle+de+Espoz+y+Mina+7,+28012+Madrid&output=embed',
  instagram: 'https://www.instagram.com/dublinersirishpubmadrid/',
  instagramHandle: '@dublinersirishpubmadrid',
  siteUrl: 'https://dublinersmadrid.es',
  base: '',
  /** Empty until the parent supplies the real GA4 web stream ID. */
  ga4MeasurementId: 'G-FRDP0849P3',
  /** Public mailbox — only set after domain + mail are live. Never invent @dubliners… */
  publicEmail: 'comunicacion@dublinersmadrid.es' as string,
  /** Formspree form id (e.g. xyzabc). Empty = form UI only, no submit. */
  formspreeId: '' as string,
} as const;

export const HOURS = [
  { day: 'Monday', hours: '12:00–02:00' },
  { day: 'Tuesday', hours: '12:00–02:00' },
  { day: 'Wednesday', hours: '12:00–02:00' },
  { day: 'Thursday', hours: '12:00–02:00' },
  { day: 'Friday', hours: '12:30–02:30' },
  { day: 'Saturday', hours: '12:30–02:30' },
  { day: 'Sunday', hours: '12:00–02:00' },
] as const;

export function absUrl(path: string): string {
  const base = SITE.base.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.siteUrl}${base}${p}`;
}

export function withBase(path: string): string {
  const base = SITE.base.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
