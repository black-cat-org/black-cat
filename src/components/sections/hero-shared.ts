// Copy compartido entre las 4 variantes de Hero (A/B/C/D).
// Cuando se elija una variante, este módulo se inline en Hero.astro y se borra.

export const HERO_COPY = {
  badge: 'Disponible para proyectos',
  title: {
    line1: 'Software',
    line2Gradient: 'de Alto Impacto',
  },
  description:
    'La empresa detrás de la línea Black — productos digitales propios y soluciones a medida hechas para potenciar industrias enteras.',
  ctaPrimary: { label: 'Comenzar Proyecto', href: '/contacto' },
  ctaSecondary: { label: 'WhatsApp' },
  // Stats placeholder visibles para evaluar layout. Reemplazar con métricas reales cuando estén disponibles.
  stats: [
    { value: '100+', label: 'Proyectos' }, // TODO: métrica real
    { value: '98%', label: 'Satisfacción' }, // TODO: métrica real
    { value: '24/7', label: 'Soporte' }, // TODO: métrica real
  ],
} as const;
