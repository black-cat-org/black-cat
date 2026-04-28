// Datos del negocio. Fuente de verdad. Doc: docs/datos-negocio.md
//
// Convenciones:
// - Placeholders marcados con TODO al lado.
// - `null` = "todavía no tenemos" → componentes renderizan condicional.
// - No inventar datos: si no hay valor real, queda placeholder o null.

export const siteConfig = {
  name: 'Black Cat',
  titlePattern: '%s | Black Cat — Desarrollo de Software',
  defaultTitle: 'Black Cat | Desarrollo de Software',
  description:
    'Desarrollo de software a medida — web, backend, móvil, e-commerce. La Paz, Bolivia.',
  domain: 'https://blackcat.dev', // TODO: reemplazar con dominio real
  foundedYear: 2026,

  contact: {
    email: 'hola@blackcat.dev', // TODO: reemplazar con email real
    whatsapp: {
      number: '59100000000', // TODO: reemplazar (sin '+', sin espacios)
      message:
        '¡Hola! Me gustaría saber más sobre los servicios de Black Cat.',
    },
  },

  location: {
    city: 'La Paz',
    country: 'Bolivia',
    address: null,
  },

  hours: {
    weekdays: '09:00 – 18:00',
    timezone: 'GMT-4',
    label: 'Lunes a Viernes · 09:00 – 18:00 (GMT-4)',
  },

  languages: ['es'],

  social: {
    instagram: null, // TODO: 'https://instagram.com/...'
    linkedin: null, // TODO: 'https://linkedin.com/company/...'
    github: null, // TODO: 'https://github.com/...'
    twitter: null, // TODO: 'https://x.com/...'
    youtube: null, // TODO: 'https://youtube.com/@...'
    tiktok: null, // TODO: 'https://tiktok.com/@...'
  },

  form: {
    backend: 'formsubmit',
    formsubmit: {
      successRedirect: '/gracias',
      subjectLine: 'Nuevo contacto desde el sitio — Black Cat',
    },
  },

  business: {
    audiences: ['B2B', 'B2C'],
    paymentMethods: null, // TODO: definir
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper para construir el link de WhatsApp con mensaje pre-llenado.
export function whatsappUrl(
  number: string = siteConfig.contact.whatsapp.number,
  message: string = siteConfig.contact.whatsapp.message,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Helper para construir el title de cada página.
export function pageTitle(title?: string): string {
  if (!title) return siteConfig.defaultTitle;
  return siteConfig.titlePattern.replace('%s', title);
}
