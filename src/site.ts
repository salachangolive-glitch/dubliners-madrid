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
  /**
   * Unused — kept for reference. Forms use FormSubmit (free) via publicEmail / formEndpoint.
   * Do not re-enable Formspree unless explicitly requested.
   */
  formspreeId: '' as string,
  /**
   * Optional FormSubmit (or other) AJAX endpoint override.
   * Empty = derive from publicEmail: https://formsubmit.co/ajax/<publicEmail>
   */
  formEndpoint: 'https://formsubmit.co/ajax/1d4a0414eaadd9bb8d6875045447816a' as string,
} as const;

/** True when the contact form can POST (publicEmail or explicit formEndpoint). */
export function isContactFormReady(): boolean {
  return Boolean(SITE.formEndpoint.trim() || SITE.publicEmail.trim());
}

/** AJAX endpoint for the contact form (FormSubmit by default). */
export function getContactFormEndpoint(): string {
  const override = SITE.formEndpoint.trim();
  if (override) return override;
  const email = SITE.publicEmail.trim();
  return email ? `https://formsubmit.co/ajax/${email}` : '';
}

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
