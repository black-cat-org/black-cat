# PLAN.md — Black Cat

Backlog estructurado para pulir el sitio sección por sección, hasta que quede perfecto. Cada item debe ser **atómico y verificable**: cuando se marca como hecho, el "qué quedó" tiene que ser claro sin contexto extra.

## Cómo usar este archivo

- Al arrancar una sesión, elegir una sub-sección y trabajar sus items uno por uno.
- Marcar `- [x]` los completados al terminar el item.
- Si surge algo nuevo durante el trabajo, agregarlo como item en su sección sin perder foco en lo actual.
- El estado "en progreso" se trackea dentro de la sesión (con tasks de Claude); este archivo solo distingue **pendiente** vs **hecho**.

## Convenciones

- **Iconos de prioridad** solo cuando importan: 🔴 alta · 🟡 media. Sin icono = normal/baja.
- **Referencias a archivos** cuando aplique: `src/components/sections/Hero.astro:42`.
- Los items vacíos `(pendiente desglose)` se completan página por página, idealmente con la página delante (browser o Playwright).

## Documentos relacionados

- [`../CLAUDE.md`](../CLAUDE.md) — convenciones técnicas, stack, workflow con Claude.
- [`../README.md`](../README.md) — overview del proyecto y setup.

---

## 0. Foundation / Cross-cutting

Cosas que afectan a todo el sitio. Conviene resolverlas antes —o en paralelo— al pulido página por página.

### 0.1. Identidad visual

Decidir y aplicar la identidad real (paleta, tipografía, logo). Hoy el sitio usa púrpura/rosa/azul como acento por inercia del template; falta una decisión consciente.

- [ ] (pendiente desglose)

### 0.2. Configuración real (datos del negocio) ✅

Centralizar datos del negocio en `src/config/site.ts` (CMS-ready). Reemplazar placeholders hardcoded del template. Detalle: [`./datos-negocio.md`](./datos-negocio.md).

#### Configuración central
- [x] Crear `src/config/site.ts` con `siteConfig` tipado (`as const` + types exportados)

#### Consumidores de `siteConfig`
- [x] `src/layouts/Layout.astro`: meta tags, title pattern, canonical y OG usan `siteConfig`
- [x] `src/components/Navigation.astro`: logo-text usa `siteConfig.name` + a11y del mobile menu (aria-expanded/aria-controls)
- [x] `src/components/sections/Hero.astro`: WhatsApp link consume `whatsappUrl()`
- [x] `src/components/sections/Footer.astro`: email, WhatsApp, ubicación, horario, redes (6 sociales con placeholders visibles)
- [x] `src/pages/contacto.astro`: bloque info + `<form action>` consumen `siteConfig` y FormSubmit (`_subject`, `_next` absoluto, `_template=table`, `_captcha=false`, honeypot reforzado)
- [x] `src/pages/index.astro`, `gracias`, `precios`, `servicios`, `portfolio`, `sobre-nosotros`, `servicios/*` (8): titles cortos para que `pageTitle` aplique el pattern uniforme; `wa.me` legacy reemplazado por `whatsappUrl()`
- [ ] `src/pages/sobre-nosotros.astro` (timeline/equipo/stats): **diferido a §6** — requiere reescritura de contenido completa, no es parte de "datos del negocio"

#### Iconografía relacionada (just-in-time de §0.1 firme)
- [x] Hero, contacto, gracias: SVG hardcoded de WhatsApp → Lucide outline `message-circle`
- [x] Footer: SVGs outline Lucide para Instagram, LinkedIn, GitHub, X, YouTube, TikTok
- [x] Contacto info cards: emojis 📧📱📍🕐 → Lucide outline (mail, smartphone, map-pin, clock)

#### Auditoría final
- [x] Grep cross-codebase de strings legacy (`info@blackcat.dev`, `+54 9 11`, `5491234567890`, "Buenos Aires") — sin residuos

### 0.3. Deploy + dominio

- [ ] (pendiente desglose)

### 0.4. CI básico

- [ ] (pendiente desglose)

### 0.5. SEO global

- [ ] (pendiente desglose)

### 0.6. Accesibilidad transversal

- [ ] (pendiente desglose)

### 0.7. Performance

- [ ] (pendiente desglose)

---

## 1. Layout global

Componentes y estructura que aparecen en todas las páginas.

### 1.1. Layout base (`src/layouts/Layout.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### SEO / Meta
- [ ] (pendiente desglose)

### 1.2. Navigation (`src/components/Navigation.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 1.3. Footer (`src/components/sections/Footer.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

---

## 2. Home (`/`)

### 2.1. Hero (`src/components/sections/Hero.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 2.2. Services (preview) (`src/components/sections/Services.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 2.3. TrustSection (`src/components/sections/TrustSection.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 2.4. Portfolio (preview) (`src/components/sections/Portfolio.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 2.5. Pricing (preview) (`src/components/sections/Pricing.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 2.6. Testimonials (`src/components/sections/Testimonials.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 2.7. Composición e integración (`src/pages/index.astro`)

- [ ] (pendiente desglose)

---

## 3. Servicios

### 3.1. Overview (`/servicios`, `src/pages/servicios.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 3.2. Páginas individuales (`/servicios/*`)

Patrón común para las 8 sub-páginas. Pulir primero la plantilla, después aplicar a cada una.

#### Plantilla / patrón compartido
- [ ] (pendiente desglose)

#### Páginas
- [ ] `/servicios/desarrollo-web` (`src/pages/servicios/desarrollo-web.astro`)
- [ ] `/servicios/backend-apis` (`src/pages/servicios/backend-apis.astro`)
- [ ] `/servicios/apps-moviles` (`src/pages/servicios/apps-moviles.astro`)
- [ ] `/servicios/diseno-uiux` (`src/pages/servicios/diseno-uiux.astro`)
- [ ] `/servicios/infraestructura` (`src/pages/servicios/infraestructura.astro`)
- [ ] `/servicios/ecommerce` (`src/pages/servicios/ecommerce.astro`)
- [ ] `/servicios/hosting-ssl` (`src/pages/servicios/hosting-ssl.astro`)
- [ ] `/servicios/soporte-tecnico` (`src/pages/servicios/soporte-tecnico.astro`)

---

## 4. Portfolio

### 4.1. Overview (`/portfolio`, `src/pages/portfolio.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 4.2. Case studies (`/portfolio/*`)

Patrón común para las 6 case studies.

#### Plantilla / patrón compartido
- [ ] (pendiente desglose)

#### Case studies
- [ ] `/portfolio/dashboard-analytics`
- [ ] `/portfolio/app-gestion`
- [ ] `/portfolio/social-network`
- [ ] `/portfolio/ecommerce-premium`
- [ ] `/portfolio/landing-saas`
- [ ] `/portfolio/fintech-app`

---

## 5. Precios (`/precios`, `src/pages/precios.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

---

## 6. Sobre Nosotros (`/sobre-nosotros`, `src/pages/sobre-nosotros.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

---

## 7. Contacto + Gracias

### 7.1. Contacto (`/contacto`, `src/pages/contacto.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Formulario (FormSubmit u otro backend)
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

#### Accesibilidad
- [ ] (pendiente desglose)

### 7.2. Gracias (`/gracias`, `src/pages/gracias.astro`)

#### UI / Diseño
- [ ] (pendiente desglose)

#### Contenido / Copy
- [ ] (pendiente desglose)

#### Responsive
- [ ] mobile (375px)
- [ ] tablet (768px)
- [ ] desktop (1280px+)

---

## 8. Productos propios — futuro

Black Estate, Black POS, Black CRM, etc. Sección a definir cuando los productos estén concretos. Por ahora solo placeholders de alto nivel.

- [ ] Definir lista final de productos y nombres
- [ ] Definir copy y propuesta de valor de cada producto
- [ ] Decidir IA de la sección: ruta `/productos/*` o landing dedicada por producto
- [ ] Crear plantilla común para landing de cada producto
- [ ] Integrar en navegación principal y/o home
