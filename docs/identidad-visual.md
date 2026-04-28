# Identidad visual — Black Cat

Decisiones de identidad acordadas durante la planeación de la sección 0.1 del [`PLAN.md`](./PLAN.md).

> **Estado**: en planeación.
> ✅ Posicionamiento, vibra, paleta base, logo concept, iconografía, animaciones, layout density.
> ⏳ Pendientes: tagline final, tipografía (revisión al final), light mode (iteración final).

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

Negro como fondo principal · multicolor neón de acento (rosa + turquesa + violeta de bridge).

**Tres variantes propuestas** para evaluar visualmente. Maquetadas en [`paleta-preview.html`](./paleta-preview.html) (abrir con `open docs/paleta-preview.html`).

### Variante A — Neon Balanced (propuesta inicial)

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#000000` | Fondo principal |
| `--surface` | `#0A0A0B` | Cards / superficies elevadas |
| `--border` | `#27272A` | Bordes sutiles |
| `--text` | `#FAFAFA` | Texto primario |
| `--text-muted` | `#A1A1AA` | Texto secundario |
| `--accent-pink` | `#FF2D95` | CTAs primarios, énfasis |
| `--accent-cyan` | `#00E5C5` | CTAs secundarios, badges |
| `--accent-violet` | `#B026FF` | Bridge en gradientes |

### Variante B — Hyper Neon (más brillante, cyberpunk)

| Token | Hex |
|---|---|
| `--accent-pink` | `#FF1493` |
| `--accent-cyan` | `#00FFE0` |
| `--accent-violet` | `#C026FF` |
| `--text-muted` | `#B4B4BB` |

(resto igual a A: `#000000` / `#0F0F12` / `#2D2D34`)

### Variante C — Premium Muted (más apagado, sofisticado)

| Token | Hex |
|---|---|
| `--bg` | `#0A0A0C` |
| `--surface` | `#14141A` |
| `--border` | `#2A2A33` |
| `--text` | `#F4F4F5` |
| `--text-muted` | `#94949C` |
| `--accent-pink` | `#EC4899` |
| `--accent-cyan` | `#2DD4BF` |
| `--accent-violet` | `#A78BFA` |

### Sistema de theming

Implementación independiente de la variante elegida:

- **CSS custom properties** en `:root` dentro de `src/styles/global.css`.
- **Tailwind v4 `@theme`** para exponer los tokens como utilities (`bg-bg`, `text-muted`, `accent-pink`, etc.).
- **Light mode**: mismo set de tokens con valores invertidos en `:root[data-theme="light"]` (o `prefers-color-scheme: light`). Switch manual + auto al final.
- **Gradiente hero** parametrizado: `linear-gradient(135deg, var(--accent-pink), var(--accent-violet), var(--accent-cyan))`.
- **Glow effects** (hover, neon shadow): en variables `--accent-pink-glow` con alpha — la variante B usa alpha más alto.

---

## 4. Tipografía

**Pendiente** — revisión final al cerrar el pulido visual con todas las páginas en pie.

Por ahora se mantiene Inter (lo actual). Candidatas a explorar al final:

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

## 9. Pendientes a cerrar antes de implementar

### 9.1. Tagline ✅

Resuelto: se mantiene el copy actual del Hero (heading "Desarrollo Web de Alto Impacto" + descripción con stack). Se podrá pulir al trabajar la sección 2.1 del PLAN.

### 9.2. Variante de paleta (A / B / C)

Pendiente — evaluar visualmente abriendo [`paleta-preview.html`](./paleta-preview.html) en el browser. Decidir A, B o C, o pedir hex specifics ajustados.

### 9.3. Tipografía

Diferida a iteración final. No bloquea.

### 9.4. Light mode

Diferida a iteración final. No bloquea.
