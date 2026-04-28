# Identidad visual — Black Cat

Decisiones de identidad acordadas durante la planeación de la sección 0.1 del [`PLAN.md`](./PLAN.md).

> **Estado**: planeación parcial — paleta y tipografía **diferidas al final** del pulido visual.
> ✅ Posicionamiento, tono, vibra, motion language, logo concept, iconografía, layout density, animaciones.
> ⏸️ Diferidas (decisión post-pulido de UI/contenido): paleta de colores, tipografía, light mode + switch.
>
> **Razón de diferir paleta + fuentes**: con todo el contenido y el layout funcionando, será más fácil evaluar qué paleta/fuentes le quedan mejor al sitio que decidirlo en abstracto. Mientras tanto, se mantienen los colores actuales del template (`purple-400`/`600`/`700`, `pink-400`, `blue-400`, gradiente `from-purple-400 via-pink-400 to-blue-400`) y la fuente Inter como **placeholders intencionales**.

---

## 1. Marca y posicionamiento

| Campo | Valor |
|---|---|
| Tagline / propuesta de valor | **"Desarrollo Web de Alto Impacto"** (mantenido del código actual) |
| Sub-copy del Hero | **"Transformamos ideas en experiencias digitales rápidas, escalables y optimizadas. Especialistas en React, Astro, NestJS y tecnologías de vanguardia."** (mantenido) |
| Tono de voz | Formal-corporativo + cercano-tuteante |
| Forma de tratamiento | **Tuteo** ("tú"). Sin voseo. |
| Cliente ideal | Pymes |
| Diferenciador principal | Stack moderno · calidad muy superior · expertise |
| Mercado primario | Bolivia + LATAM |

---

## 2. Vibra visual

Referencias citadas:

- [stripe.com/es-us](https://stripe.com/es-us) — premium, gradientes sutiles, animaciones discretas.
- [tellet.ai](https://tellet.ai/) — minimal tech, geometría limpia, mucho aire.
- [lusion.co](https://lusion.co/) — maximalista creativo, WebGL, scroll storytelling.

Adjetivos: **minimalista · tech-futurista · premium-elegante · corporate-confiable**.

> **Resolución (actualizada)**: separamos sistema visual de motion language.
> - **Sistema visual** (color, layout, density, tipografía): Stripe + Tellet — minimal, premium, mucho aire.
> - **Motion language**: Lusion como referencia fuerte. Animaciones impactantes y llamativas, scroll storytelling, transiciones cinematográficas. Tomamos su impacto pero sin la exageración (sin WebGL pesado por toda la página).

Modo:

- **Dark**: punto de partida (lo actual). Trabajamos sobre dark hasta cerrar contenido y diseño.
- **Light**: se diseña al final, con switch manual + auto (`prefers-color-scheme`).

---

## 3. Paleta

⏸️ **Diferida al final del pulido visual.**

Mientras tanto, se mantienen los **colores actuales del template** como placeholder:

- Fondo: `bg-black` · superficies oscuras heredadas del template.
- Acentos: `purple-400` / `purple-600` / `purple-700` · `pink-400` · `blue-400`.
- Gradiente principal: `bg-linear-to-r from-purple-400 via-pink-400 to-blue-400`.
- Texto primario: `text-white` · secundario: `text-gray-300` / `text-gray-400`.

Estos colores **no representan la identidad final** — son placeholders intencionales. La decisión se toma cuando todo el contenido y layout estén listos, evaluando con páginas reales en lugar de mockups abstractos.

Las tres variantes exploradas (Neon Balanced, Hyper Neon, Premium Muted) quedan documentadas en [`paleta-preview.html`](./paleta-preview.html) como punto de partida para la decisión final.

### Sistema de theming a futuro (cuando se decida la paleta)

Independiente de la variante elegida, el sistema será:

- **CSS custom properties** en `:root` dentro de `src/styles/global.css`.
- **Tailwind v4 `@theme`** para exponer los tokens como utilities.
- **Light mode**: tokens equivalentes en `:root[data-theme="light"]` + switch manual + `prefers-color-scheme: light` automático.
- **Gradiente principal** parametrizado en variables.
- **Glow effects** en variables con alpha.

---

## 4. Tipografía

⏸️ **Diferida al final del pulido visual** (junto con la paleta).

Por ahora se mantiene **Inter** (lo actual) como placeholder. Candidatas a explorar al final:

| Fuente | Carácter | Costo |
|---|---|---|
| Inter | Humanist neutra, segura | actual, 0 cambio |
| Geist | Tech moderna, monoline-ish | font de Vercel, gratis |
| Satoshi | Premium editorial | gratis personal |
| Manrope | Humanist redondeada | gratis |
| Space Grotesk | Carácter techy/cuadrado | gratis — buen display |

Decisiones a tomar al final: **una sola fuente** vs **display + body** (ej. Space Grotesk display + Inter body).

---

## 5. Logo

Sin logo previo. Lo creamos.

- **Tipo**: símbolo + wordmark.
- **Símbolo**: silueta minimal lineart de gato — cabeza simplificada, orejas triangulares, ojos como almendras o puntos. Stroke 1.5–2px (consistente con iconos Lucide).
- **Wordmark**: "Black Cat" en la fuente display de la identidad (a definir en §4).
- **Variantes** a producir:
  - Símbolo solo (favicon, mobile nav, app icon).
  - Símbolo + wordmark horizontal.
  - Monocromo blanco (para dark).
  - Monocromo negro (para light, futuro).
- **Formato**: SVG inline en componente `Logo.astro` (no archivo externo) → control fino de stroke en hover/focus.

Para el primer corte voy a generar el SVG yo (concept lineart). Si después querés iterar con un diseñador o IA generativa (Midjourney, etc.), reemplazamos el SVG manteniendo el componente.

---

## 6. Iconografía

**SVG outline only. CERO emojis en todo el sitio.**

- Librería: **Lucide** ([lucide.dev](https://lucide.dev/)).
- Razón: outline limpio, peso uniforme, encaja con minimal/tech-premium.
- Implementación: SVG inline copiado por icono (no instalar paquete pesado).
- Tamaño base: 24px · stroke-width 1.5 · `currentColor`.

Lista inicial de íconos a reemplazar (los emojis del template):
🚀 → `rocket`, 💼 → `briefcase`, 🎨 → `palette`, 📱 → `smartphone`, ☁️ → `cloud`, 🛒 → `shopping-cart`, 🔒 → `lock`, 🛟 → `life-buoy`, 🐈‍⬛ → reemplazado por logo SVG.

---

## 7. Animaciones

**Objetivo**: impacto tipo Lusion (impactantes, llamativas, scroll storytelling) **sin la exageración** (sin WebGL pesado en cada sección, sin paywall de performance). Las tres tiers se aplican y el tier alto pasa a ser parte central, no excepción.

| Tier | Qué | Costo JS | Dónde |
|---|---|---|---|
| **Sutiles (siempre)** | CSS transitions, hover glow, fade-in, micro-interactions, button reactions | **0 KB** | Toda página |
| **Medio (selectivo)** | Reveal on scroll (IntersectionObserver), stagger, parallax CSS, magnetic hover en CTAs | **~3 KB vanilla** | Servicios, Portfolio, Pricing, About |
| **Alto (Lusion-inspired)** | GSAP + ScrollTrigger para scroll storytelling (Hero, Showcase, Portfolio cases) · Lenis smooth scroll global · View Transitions de Astro entre páginas · text reveal cinematográfico · pinned sections · split-text por carácter | **~38 KB** (GSAP 25 + ScrollTrigger 7 + Lenis 6) | Home Hero, Showcase, transiciones router, case studies |

### Patrones concretos a aplicar (referencia: Lusion ajustado)

- **Hero**: text reveal por palabra/carácter, gradiente animado en headline, badges con glow pulsante, blob backgrounds en parallax.
- **Scroll storytelling**: secciones que se "transforman" al hacer scroll (pin + scrub con ScrollTrigger).
- **Portfolio**: cards con hover magnético, transición a detalle con View Transitions (la card se "expande" al case study).
- **Page transitions**: View Transitions API + curtain reveal opcional entre rutas.
- **Cursor**: cursor custom (opcional, evaluamos al final — algunos lo aman, otros lo odian).

### Reglas inquebrantables

- GSAP/Lenis se cargan **solo en páginas que los usen** (Astro inline scripts, no en `Layout.astro`).
- `prefers-reduced-motion: reduce` → fallback al estado final sin animación. **Sin excepción**.
- Animaciones solo sobre `transform` y `opacity` (60fps). No `top`/`left`/`width`.
- View Transitions vía `<ClientRouter />` de Astro (cero JS extra, nativo del browser).
- Lighthouse Performance ≥ 90 en mobile (objetivo ≥ 95 en desktop). Si una animación lo baja, se replantea.
- WebGL **NO** en esta primera fase — costo de mantenimiento alto, ROI dudoso para landing de pyme.

---

## 8. Layout / Densidad

- **Spacing**: aireado, premium.
- **Containers**: `max-w-7xl mx-auto px-6 lg:px-8`.
- **Vertical rhythm por sección**: `py-20 lg:py-28` (homologar entre todas las secciones del home).
- **Bordes**: `rounded-lg` (8px) por defecto. `rounded-2xl` o `rounded-3xl` solo para cards grandes/destacadas o hero.
- **Grid base**: 12 columnas mental, en Tailwind se traduce a `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para grids de servicios.

---

## 9. Pendientes — diferidos al final

| Decisión | Estado |
|---|---|
| 9.1. Tagline | ✅ Resuelto — copy actual del Hero. Se podrá pulir al trabajar sección 2.1 del PLAN. |
| 9.2. Paleta de colores | ⏸️ Diferida al final del pulido visual. Mientras tanto, colores actuales del template como placeholder. |
| 9.3. Tipografía | ⏸️ Diferida al final. Mientras tanto, Inter como placeholder. |
| 9.4. Light mode + switch | ⏸️ Diferido al final. |

**Lo que sí queda firme** (para implementar cuando avancemos): tono de voz, vibra editorial (Stripe + Tellet base), motion language (impacto Lusion ajustado), logo concept, iconografía (Lucide outline, cero emojis), layout density (aireado, `max-w-7xl`, `py-20 lg:py-28`, `rounded-lg`).
