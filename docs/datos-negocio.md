# Datos del negocio — Black Cat

Decisiones de la sección 0.2 del [`PLAN.md`](./PLAN.md). Define la fuente de verdad de los datos del negocio (contacto, ubicación, redes, formulario) y cómo se consumen desde el código.

## 1. Estado actual

| Dato | Valor | Estado |
|---|---|---|
| Email principal | `hola@blackcat.dev` | **placeholder** |
| WhatsApp — número | `+591` (placeholder) | **placeholder** |
| WhatsApp — mensaje | "¡Hola! Me gustaría saber más sobre los servicios de Black Cat." | confirmado |
| Teléfono fijo | mismo número que WhatsApp | **placeholder** |
| Ciudad / país | La Paz, Bolivia | confirmado |
| Dirección física | sin oficina | confirmado |
| Mapa embebido | no se muestra | confirmado |
| Nombre comercial | Black Cat | confirmado |
| Razón social | no aplica | confirmado |
| NIT / Tax ID | no se muestra | confirmado |
| Año de fundación | 2026 | confirmado |
| Redes activas | Instagram, LinkedIn, GitHub, X, YouTube, TikTok | confirmadas (handles **placeholder**) |
| Backend del form | **FormSubmit** ahora → **Resend** después | confirmado |
| Email destino del form | mismo email principal | **placeholder** |
| Title pattern | `Black Cat \| Desarrollo de Software` | confirmado |
| Dominio final del sitio | sin definir | **placeholder** |
| OG image | sin definir (junto con logo) | **placeholder** |
| Horario | Lun a Vie · 09:00 – 18:00 (GMT-4) | confirmado |
| Idiomas atendidos | Español | confirmado |
| Métodos de pago | sin definir | **placeholder** |
| Audiencia | B2B + B2C | confirmado |

---

## 2. Arquitectura: `src/config/site.ts`

Todos los datos del negocio viven en un único archivo TypeScript exportado como `siteConfig`. Componentes y páginas importan desde ahí.

**Razones**:

- Cuando lleguen los datos reales (email, dominio, handles), se modifica **un solo archivo**.
- Type safety: typo o campo inexistente = error de compilación.
- Diseño preparado para mover a un CMS sin reescribir componentes (ver §5).

### Shape del objeto

```typescript
// src/config/site.ts
export const siteConfig = {
  name: 'Black Cat',
  titlePattern: '%s | Black Cat — Desarrollo de Software',
  defaultTitle: 'Black Cat | Desarrollo de Software',
  description: 'Desarrollo de software a medida — web, backend, móvil, e-commerce. La Paz, Bolivia.',
  domain: 'https://blackcat.dev', // TODO: reemplazar con dominio real
  foundedYear: 2026,

  contact: {
    email: 'hola@blackcat.dev', // TODO: reemplazar con email real
    whatsapp: {
      number: '59100000000', // TODO: reemplazar (sin '+', sin espacios)
      message: '¡Hola! Me gustaría saber más sobre los servicios de Black Cat.',
    },
  },

  location: {
    city: 'La Paz',
    country: 'Bolivia',
    address: null, // sin oficina física
  },

  hours: {
    weekdays: '09:00 – 18:00',
    timezone: 'GMT-4',
    label: 'Lunes a Viernes · 09:00 – 18:00 (GMT-4)',
  },

  languages: ['es'],

  social: {
    instagram: null, // TODO: 'https://instagram.com/blackcat...'
    linkedin: null,
    github: null,
    twitter: null,
    youtube: null,
    tiktok: null,
  },

  form: {
    backend: 'formsubmit', // 'formsubmit' | 'resend' (futuro)
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
```

### Convenciones

- **Placeholders se marcan con `// TODO:`** al lado del valor que sea ficticio.
- **`null` = "todavía no tenemos"**: el componente consumidor renderiza condicionalmente.
  ```astro
  {siteConfig.social.instagram && (
    <a href={siteConfig.social.instagram}>Instagram</a>
  )}
  ```
- **`as const` + types exportados** para inmutabilidad y autocompletado.
- **No inventar datos reales**: si no hay valor, queda placeholder o `null`.

### Footprint en código

| Archivo | Qué consume de `siteConfig` |
|---|---|
| `src/layouts/Layout.astro` | `name`, `titlePattern`, `defaultTitle`, `description`, `domain`, `languages` |
| `src/components/Navigation.astro` | `name` (logo-text temporal hasta tener SVG) |
| `src/components/sections/Hero.astro` | `contact.whatsapp.number`, `.message` |
| `src/components/sections/Footer.astro` | `name`, `foundedYear`, `contact.email`, `contact.whatsapp`, `location`, `hours.label`, `social.*` |
| `src/pages/contacto.astro` | `contact.*`, `location`, `hours.label`, `form.formsubmit.*` |
| `src/pages/sobre-nosotros.astro` | `foundedYear`, `location`, `business.audiences` |

---

## 3. Formulario de contacto — fase actual (FormSubmit)

`<form action="https://formsubmit.co/<email>" method="POST">` con campos hidden:

- `_subject`: línea de asunto del email recibido.
- `_next`: URL de redirección post-submit (`/gracias`).
- `_captcha`: `false` para desactivar captcha (re-evaluamos si llega spam).
- `_template`: `table` (formato del email más legible).

**Importante**: en el primer submit real, FormSubmit envía un email de verificación al destino. Hay que hacer click una vez para activar el endpoint. Esto se ejecuta cuando tengas el email real.

### Limitaciones aceptadas

- Auto-respuesta personalizada limitada (FormSubmit envía una confirmación genérica con su branding).
- Sin analytics propios.
- Estética del email recibido es plain.

Se aceptan porque hoy no hay dominio ni email reales para justificar Resend.

---

## 4. Roadmap: migración a Resend (cuando exista dominio + email)

### Cuándo

Cuando tengas:

- Dominio comprado y verificable.
- Email principal funcionando en ese dominio.
- Cuenta de Vercel (o adapter para serverless en Astro).

### Qué cambia

1. Crear cuenta en [Resend](https://resend.com), verificar dominio (configurar DNS records).
2. Generar API key (guardar en `.env` como `RESEND_API_KEY`).
3. Agregar adapter SSR a Astro (`@astrojs/vercel` o el que aplique).
4. Crear endpoint en `src/pages/api/contact.ts`:
   - Valida los campos del form.
   - Envía email al equipo con los datos del lead.
   - Envía auto-respuesta al usuario.
5. Reemplazar `<form action>` para apuntar a `/api/contact`.
6. Actualizar `siteConfig.form.backend = 'resend'`.

### Texto de la auto-respuesta (Resend)

> **Asunto**: Recibimos tu mensaje — Black Cat
>
> ¡Hola, [nombre]!
>
> Gracias por escribirnos. Recibimos tu mensaje y te respondemos en menos de 24 horas hábiles (Lunes a Viernes).
>
> Si es urgente, también puedes escribirnos por WhatsApp: [link].
>
> — El equipo de Black Cat

Variables: `[nombre]` y `[link]` se sustituyen en runtime con los datos del lead y `siteConfig.contact.whatsapp`.

---

## 5. Roadmap: migración a CMS (Sanity) — futuro

Decisión confirmada: usar [Sanity](https://www.sanity.io/) como CMS headless para contenido dinámico, eventualmente.

### Estrategia

`siteConfig` y los componentes se diseñan **CMS-ready**:

- **Datos del negocio** (`siteConfig` actual) → singleton document `siteSettings` en Sanity. Migración: reemplazar el import por una query GROQ con los mismos campos.
- **Contenido dinámico** (servicios, portfolio cases, testimonios, blog futuro) → collections (`service`, `caseStudy`, `testimonial`, `post`). Hoy están hardcoded en archivos `.astro`.

### Cuándo migrar

- Cuando tengas 6+ páginas de servicios estables.
- Cuando alguien no-dev necesite editar contenido sin tocar código.
- Cuando agregues blog/news (Sanity brilla ahí).

### Por qué no instalar Sanity ahora

- Sin contenido suficiente, agregar un CMS introduce complejidad sin valor.
- Astro tiene Content Collections nativos que son una buena estación intermedia si se necesita estructura sin CMS externo.
- Mantener datos en TS sigue siendo rápido y type-safe hasta que el contenido lo justifique.

---

## 6. Cambios respecto al template legacy

El código heredado tiene placeholders propios que vamos a reemplazar:

| Placeholder legacy | Reemplazo |
|---|---|
| `info@blackcat.dev` (Footer, contacto) | `siteConfig.contact.email` |
| `+54 9 11 2345-6789` (WhatsApp en Hero) | `siteConfig.contact.whatsapp.number` |
| Mensaje de WhatsApp legacy | `siteConfig.contact.whatsapp.message` |
| "Buenos Aires, Argentina" (footer/contacto) | `siteConfig.location.city + country` |
| Iconos sociales hardcoded | iconos Lucide outline (parte del compromiso firme de §0.1) |

La auditoría se hace al final de la implementación con `grep -r` para asegurar que no quede ningún string hardcoded.
