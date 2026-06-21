# DESIGN-SYSTEM.md

Referencia autoritativa del sistema de diseño de **Black Cat**. Esto NO es aspiracional:
todos los valores salen del código real (`src/`). Es la fuente de la verdad para que cualquier
trabajo nuevo quede on-brand. Si algo no está acá, mirá la sección que lo usa y copiá el valor
exacto — no inventes, no redondees.

> Valores canónicos extraídos de: `src/styles/global.css`, `src/layouts/Layout.astro`,
> `src/components/Navigation.tsx`, `src/components/sections/*.astro`, `src/pages/servicios.astro`.

---

## 1. Principios

- **Tema dark fijo** sobre **zinc-950** (`#09090b`). `<html class="dark">`, `<body class="bg-zinc-950 text-white antialiased overflow-x-clip">`. No hay toggle light/dark (el botón "sol" del navbar es decorativo).
- **Premium y sobrio.** Superficies casi negras, hairlines finísimos, tipografía apretada. La densidad de "ruido" es baja: mucho aire, poco relleno.
- **Los gradientes de marca son ACENTO, no relleno.** Se clipean a texto (títulos, KPIs, siglas), se usan en anillos enmascarados, washes a baja opacidad (.07–.22), líneas de subrayado y glows. Nunca rellenan una caja entera a opacidad alta.
- **Nada de "template".** Prohibido el púrpura genérico tipo `purple-600` / `from-purple-400 via-pink-400 to-blue-400` del template heredado. Prohibidos los emoji (todo es icono SVG). Prohibidas las cards/pills genéricas de bootstrap; las superficies son hairline + glass medidos.
- **Render estático por defecto.** Hover y reveals son 100% CSS. JS solo donde hay estado real (terminal del Hero, índice interactivo del Portfolio, menú móvil).

---

## 2. Color

### Fondo

| Token | Valor | Uso |
|---|---|---|
| `bg-zinc-950` / `#09090b` | fondo global | `<body>`, y como `--bg: #09090b` dentro de varias secciones |
| `#18181b` (zinc-900) | casi-negro | **canónico** para texto sobre botones blancos |
| `#0a0a0c` | negro casi puro | iniciales del **avatar** sobre gradiente (Testimonials `ts-avatar`) |

`--bg: #09090b` está definido **una vez** en `:root` de `global.css` (antes se redeclaraba en cada sección).

### Texto — escala de opacidad de blanco (las que SÍ se usan)

`text-white` (sólido) + estas alfas de `rgba(255,255,255,a)` / `white/a`:

| Opacidad | Dónde |
|---|---|
| `.96` | wordmark de logo en hover (Testimonials) |
| `.90` / `.9` | KPI activo, link nav hover, item portfolio hover |
| `.85` | `.chip` color, valores dashboard, `cc-mname` |
| `.82` | quote de testimonio, eyebrow del hero (`.78` en el resto) |
| `.80` | label sidebar, `cc-step` títulos |
| `.78` | eyebrow / `.h-eyebrow` color de texto |
| `.75` | links del sheet móvil |
| `.74` | chips dentro de `.svc-chips` |
| `.72` | item portfolio seleccionado (categoría) |
| `.70` | links nav inactivos (`white/70`), párrafos `ds-row`, `ct-link` |
| `.66` | `tcard-role b` |
| `.65` | features `ds-feat`, `svc-line` en hover |
| `.62` | descripción hover, `ip-info-desc`, icono en reposo (`svc-ic`) |
| `.60` | `serv-link`, listas dashboard, `cta09-sub`, `ip-item` base |
| `.55` | **subtítulos canónicos de sección** (`text-white/55`), descripciones |
| `.50` | nombres marquee, `legal-link`, CTA copy testimonios |
| `.46` | `tcard-role` |
| `.45` | `svc-line` base, `ft-title` heads, label terminal, `ip-item-cat` |
| `.42` | logos marquee en reposo (`mq-ico`), wordmark base, `stat-label` |
| `.40` | `svc-num` lo usa `.30`; aquí `cc-mdesc`, copyright, números dim |
| `.38`–`.35` | hairlines de texto muy tenue, `cc-step` extra, eyebrow del template viejo |
| `.35` | `ip-item-arrow`-ish, label "Confían en", `ft-title`/45 |
| `.30` | `svc-num` base |
| `.22` | dots inactivos del dashboard (`bg-white/20`) |

Canónico para **subtítulo de sección**: `text-white/55`. Para **párrafo de detalle**: `.70`.
Para **caption/eyebrow tenue**: `.35`–`.45`.

### Superficies (fills de blanco translúcido)

| Valor | Uso |
|---|---|
| `rgba(255,255,255,.02)` | base de `ip-item`, sidebar dashboard |
| `.025` – `.03` | tiles muy tenues (`cta09-card::before`, `cc-mrow`, soc) |
| `.035` – `.04` | **glass canónico** (`.tile`, `.glass`, `win-glass` usa `.045`) |
| `.05` – `.055` | hover de tiles, `svc-ic`, badges, `ct-ico` |
| `.06` | fondo de `.chip`, hover de tiles bento |
| `.07` – `.09` | botón ghost hover, halos suaves |

### Hairlines (bordes)

| Valor | Uso |
|---|---|
| `rgba(255,255,255,.06)` | hairline canónico fino (grid de Services, `ft-bar`, `mk` borders) |
| `.07` | `ip-item`, `ct-ico`, `soc`, `tile` del footer |
| `.08` | **borde canónico de glass/tile** (`.glass`, `.tile`, `win-glass` usa `.10`) |
| `.09` – `.10` | `chip`, logo footer, `win-glass` (más marcado) |
| `.12` – `.14` | bordes "vivos" (mockup phone, botón ghost, `cc-num`) |

### `::selection`

Definida globalmente en `global.css`: el resaltado de selección de texto usa el violeta de marca.

```css
::selection { background: rgba(139, 92, 246, 0.28); }
```

---

## 3. Gradientes de marca

Definidos UNA vez en `:root` de `src/styles/global.css`. **Nunca redefinir los stops** en un componente; siempre referenciar el token.

```css
:root {
  --gradient-violet-blue: linear-gradient(100deg, #a78bfa, #8b7cff 50%, #5b9dff); /* hero-17 */
  --gradient-violet-rose: linear-gradient(100deg, #8b5cf6, #f472b6);              /* hero-18 (default) */
  --gradient-teal-blue:   linear-gradient(100deg, #2dd4bf, #38bdf8);              /* hero-19 */
}
```

**`--gradient-violet-rose` es el default** (lo usa `.text-grad`, los anillos, etc. cuando no hay `--grad`).

### Tonos sólidos equivalentes (un color por gradiente)

Usados cuando hace falta un color plano coherente (icono `ds-row`, `pip`, tono de texto):

```js
const TONES = ['#f472b6' /* rose */, '#8b7cff' /* violet */, '#2dd4bf' /* teal */];
```

> Estos 3 tonos también viven en `@theme` de `global.css` como `--color-brand-rose/violet/teal`,
> así que están disponibles como **utilities Tailwind** (`bg-brand-rose`, `text-brand-violet`, …) y
> como `var(--color-brand-*)`. Tailwind v4 sólo los emite cuando se usan (tree-shaking) — es lo esperado.

### Rotación por índice (`i % 3`)

Patrón universal: cada item de una lista rota el gradiente por su índice.

```js
const GRADS = ['var(--gradient-violet-rose)', 'var(--gradient-violet-blue)', 'var(--gradient-teal-blue)'];
const grad = GRADS[i % 3]; // o GRADS[i % GRADS.length]
```

Se ve en Services, TrustSection, Portfolio, Pricing, Testimonials y `servicios.astro`.

### Glows acompañantes (rgba del tono, .5 default)

Cuando un gradiente necesita un glow a juego (sombra/halo), se usa esta paleta paralela:

```js
const GLOWS = ['rgba(244,114,182,.5)' /* rose */, 'rgba(124,124,255,.5)' /* violet */, 'rgba(45,212,191,.5)' /* teal */];
```

### `--accent-grad`

Convención de **variable de instancia**: el gradiente activo se inyecta como `--accent-grad`
en el elemento (vía JS en Portfolio, vía `style` inline en el resto) y el CSS lo lee con fallback:

```css
background: var(--accent-grad, var(--gradient-violet-rose));
/* o el alias --grad usado por Services/Pricing/Testimonials */
background: var(--grad, var(--gradient-violet-rose));
```

### `.text-grad` — clip a texto (recipe canónico)

```css
.text-grad {
  background: var(--gradient-violet-rose);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
```

Está **duplicado en cada sección** (porque los estilos son scopeados). Si una sección rota el color,
sustituye `var(--gradient-violet-rose)` por `var(--grad, …)`.

---

## 4. Tipografía

**3 fuentes, uso excluyente.** Se cargan en `Layout.astro` desde Google Fonts (un solo link):

```html
<link href="…family=Plus+Jakarta+Sans:wght@600;700;800&family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

> El `<body>` usa `font-family: 'Sora', system-ui, sans-serif` (en `global.css`); cada sección también
> la redefine en su raíz. **Inter fue eliminada** (era peso muerto, nadie la usaba): el sistema es Jakarta / Sora / Mono.

### Plus Jakarta Sans — TÍTULOS (solo)

Pesos cargados: **600, 700, 800**. Recipe canónico `.h-title`:

```css
.h-title {
  font-family: 'Plus Jakarta Sans', 'Sora', system-ui, sans-serif;
  font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;
}
```

- Títulos de sección: `<h2 class="h-title text-4xl sm:text-5xl">`.
- Variantes: `font-weight: 700` + `letter-spacing: -.02em` para subtítulos (`svc-title`, `ip-item-title`).
- KPIs gigantes: `letter-spacing: -0.045em; line-height: .92`.
- También se usa en monogramas, siglas (`ds-mark`), badges numéricos (`cc-num`), wordmarks de logo.

### Sora — CUERPO / UI (solo)

Pesos cargados: **300, 400, 500, 600, 700, 800**. Es el `font-family` raíz de cada sección.
Usos: párrafos, chips, labels, números pequeños, navegación. Peso típico de UI: `500`/`600`.
`font-weight: 300` para subtítulos grandes "airosos" (`cta09-sub`).

### JetBrains Mono — SOLO la terminal del Hero

Pesos cargados: 400, 500, 600, 700. Se usa **exclusivamente** dentro de la ventana del Hero:

```css
#hero { --mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }
.term__body { font-family: var(--mono); font-size: 13.5px; line-height: 1.85; }
.urlbar .lbl--term { font-family: var(--mono); }
```

**Mono prohibido en cualquier otro lado** (precios, badges, etiquetas "code-y", etc.).

### Escala de tamaños observada

- Títulos de sección home: `text-4xl sm:text-5xl`; page hero servicios: `text-4xl sm:text-6xl`.
- Hero `<h1>`: `text-[2.7rem] sm:text-6xl lg:text-[4.4rem]`, `tracking-[-0.03em]`, `leading-[1.04]`.
- KPI: `clamp(3.75rem, 13vw, 5.5rem)` → `lg: clamp(4.5rem, 6.5vw, 7rem)`.
- CTA final: `clamp(2.1rem, 5.2vw, 3.6rem)`.
- Subtítulo sección: `text-lg text-white/55`.
- Body/detalle: `14.5px`–`15.5px`. Captions/labels: `10.5px`–`12.5px`.

---

## 5. Superficies y bordes

### `.glass` (recipe canónico)

```css
.glass {
  background: rgba(255,255,255,.04);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 1px 0 rgba(255,255,255,.06) inset;
}
```

Variante "ventana" del Hero (`.win-glass`): `background .045`, `blur(18px) saturate(1.2)`, `border .10`,
+ un borde-luz superior vía `::before` enmascarado (ver §6).

### Radios usados

| Radio | Token / valor | Uso |
|---|---|---|
| `--radius-btn` | `0.75rem` (12px) → `rounded-btn` | **CTAs**. Tailwind v4 expone `rounded-btn`. Usar en vez de `rounded-xl`. |
| `9999px` / `rounded-full` | pill | botones principales, chips, eyebrows, dots, avatares |
| `1rem` (16px) | tiles/cards (`tcard`, `ip-item`, `mk` canvas) |
| `0.75rem`/`xl` (12px) | mini-cards del dashboard, `svc-ic` usa `11px` |
| `18px` | `.tile` (bento Pricing y Footer) |
| `1.5rem` (24px) | `ip-panel` |
| `2rem` (32px) | `cta09-card` |

### Hairlines

Glass/tile: `1px solid rgba(255,255,255,.08)`. Grid interno por gap (Services): celdas separadas por
`gap: 1px` sobre una capa `background: rgba(255,255,255,.06)` → hairlines sin dibujar bordes.

### Eyebrow / pill (`.h-eyebrow`)

Pill de "kicker" sobre el título. Recipe canónico (duplicado en cada sección):

```css
.h-eyebrow {
  display: inline-flex; align-items: center; gap: .5rem;
  border-radius: 9999px; padding: .375rem .875rem;
  background: rgba(139,92,246,.05); border: 1px solid rgba(139,92,246,.22);
  color: rgba(255,255,255,.78); font-size: 12.5px; font-weight: 500; letter-spacing: -.01em;
}
.h-eyebrow .dot { width: 6px; height: 6px; border-radius: 9999px; background: var(--accent-violet); }
```

`--accent-violet: #8b5cf6`, definido **una vez** en `:root` de `global.css`. El eyebrow está definido
en casi todas las secciones aunque varias no lo renderizan hoy.

### `.chip` (recipe canónico)

```css
.chip {
  display: inline-block; font-size: 11px; padding: 2px 8px; border-radius: 9999px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
  color: rgba(255,255,255,.85);
}
```

Variante dentro de `.svc-chips`: `10.5px`, `padding 2px 7px`, fill `.05`, color `.74`.
Variante `chip-more` (contador `+N`): fill transparente, borde/color del color de la celda.

---

## 6. Glows y sombras

### Shimmer de KPIs (TrustSection) — banda de luz que cruza el texto

Dos capas clipeadas al texto: una banda blanca (la luz) sobre el gradiente del KPI.

```css
.stat-value {
  background-image: linear-gradient(100deg, transparent, rgba(255,255,255,.42) 50%, transparent),
                    var(--grad, var(--gradient-violet-rose));
  background-repeat: no-repeat;
  background-size: 60% 100%, 100% 100%;
  background-position: -120% 0, 0 0;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.stat-cell:hover .stat-value { animation: kpi-shine .9s var(--ease-out) 1; }
@keyframes kpi-shine { from { background-position: -120% 0, 0 0; } to { background-position: 220% 0, 0 0; } }
```

Es **el mismo mecanismo** del título del Hero (`title-shine`, pero ahí corre una vez en load a `.85s`).

### Glows de cards (radial enmascarado, off→on en hover)

```css
.tile::after {
  content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit;
  background: radial-gradient(120% 90% at 20% -10%, var(--glow, rgba(139,92,246,.16)), transparent 60%);
  opacity: 0; transition: opacity .5s var(--ease-out);
}
.tile.is-hover:hover::after { opacity: 1; }
```

Services usa la misma idea con `--glow` por celda (radial al 24% -6%).

### Sombras (box-shadow exactos)

| Componente | Valor |
|---|---|
| Ventana Hero | `0 2px 8px rgba(0,0,0,.4), 0 30px 80px -20px rgba(0,0,0,.7), 0 60px 140px -40px rgba(91,157,255,.18)` |
| `cta09-card` | `0 30px 80px -40px rgba(0,0,0,.85), 0 36px 90px -46px rgba(139,92,246,.30)` (hover sube el glow violeta) |
| Mockup portfolio | `0 30px 60px -28px rgba(0,0,0,.7), 0 1px 0 rgba(255,255,255,.05) inset` |
| Botón blanco | `0 14px 30px -14px rgba(255,255,255,.4)` (hover `… -14px rgba(255,255,255,.5)`) |
| `tcard` hover | `0 18px 40px -22px var(--glow)` |
| `cc-fic` (icono factor) | `0 0 20px -3px var(--glow, rgba(139,92,246,.5))` |
| Item portfolio activo | `0 8px 30px -12px rgba(139,92,246,.45)` |
| Inset glass | `0 1px 0 rgba(255,255,255,.06) inset` (canónico) |

### Anillo de icono con gradiente enmascarado (mask trick)

Un anillo de gradiente sin relleno: gradiente full + máscara que excluye el interior dejando solo el borde.

```css
.svc-ic::before { /* o .ds-iconring::after */
  content: ""; position: absolute; inset: 0; border-radius: inherit;
  padding: 1.5px; background: var(--grad);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
```

Mismo truco para el **borde-luz superior** de la ventana (`win-glass::before`) y el borde de `tcard::before`.

### Wash radial enmascarado — sección "Dos Tonos" (`servicios.astro`)

Tinte de gradiente que sangra hacia el fondo sin caja ni borde, recortado por una máscara lineal
para que se desvanezca hacia un lado (alterna izq/der por fila con `--washdir`/`--washx`):

```css
.ds-wash::before {
  content: ""; position: absolute; inset: -2.5rem -1.5rem; z-index: -1;
  -webkit-mask-image: linear-gradient(var(--washdir, 90deg), #000 0%, #000 50%, transparent 96%);
          mask-image: linear-gradient(var(--washdir, 90deg), #000 0%, #000 50%, transparent 96%);
  background:
    radial-gradient(125% 85% at var(--washx, 0%) 24%, var(--wash1) 0%, transparent 60%),
    radial-gradient(95% 75% at var(--washx, 0%) 98%, var(--wash2) 0%, transparent 58%);
}
```

`WASH` rota por `i % 3` con pares de rgba a `.17–.22` de opacidad (baja, es acento).

---

## 7. Movimiento

### Easing canónico

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
```

Definido **una vez** en `:root` de `global.css` (antes se redeclaraba en cada sección). Es **el ease de todo** (hover, reveals, transiciones).

### `.reveal` — focus-in en load (NO scroll)

Entra enfocando (blur→nítido) + fade, **sin desplazamiento**. Todo dispara en `load`, nunca por scroll.

```css
.reveal { opacity: 0; filter: blur(8px); animation: reveal-focus .8s var(--ease-out) forwards; }
@keyframes reveal-focus { to { opacity: 1; filter: blur(0); } }
```

### Stagger vía `--d`

El escalonado se hace con `animation-delay: var(--d, 0ms)` e inyectando `--d` por item:

```css
.reveal { …; animation-delay: var(--d, 0ms); }
```
```js
// Services
`--d:${120 + i * 70}ms`
// servicios.astro
`--d:${i * 70}ms`
// Pricing / Testimonials: --d:.13s, 120ms, 240ms… (inline)
```

### Duraciones típicas de hover

- Cambios de color/estado: `.25s`–`.45s` (`.4s` es el más común).
- Lifts de card (`translateY(-2/-3px)`): `.4s`–`.5s`.
- Botón `:active { transform: scale(.97) }` con `transition .16s`.
- Marquee: `linear infinite`, duración por fila (`72s`/`84s` Trust, `64s`/`74s` Testimonials). El global `--accent`-style legacy `animate-marquee` corre 75s.

### Reglas duras

- **NUNCA scroll-reveals / animaciones disparadas por scroll** (sin IntersectionObserver, sin ScrollTrigger). Todo es load + hover.
- **SIEMPRE** un bloque `@media (prefers-reduced-motion: reduce)` que apaga reveals, marquees, shimmer y lifts (deja todo en su estado final visible). Cada sección lo tiene; replicalo en cualquier componente nuevo.
- `global.css` ya corta `animate-blob` y `animate-marquee` bajo reduced-motion.

---

## 8. Componentes / patrones

| Patrón | Dónde vive | Idea clave |
|---|---|---|
| **Botón pill blanco** (CTA primario) | Hero, Portfolio, Pricing (`cc-btn`), Testimonials (`ts-cta`), Footer (`btn-white`), Navigation | `rounded-full`, `bg:#fff`, `color:#18181b` (zinc-900), `font-semibold`, sombra `0 14px 30px -14px rgba(255,255,255,.4)`. Hover: `translateY(-1/-2px)` + gap crece + flecha `translateX`. |
| **Botón ghost** (secundario) | Hero, Footer (`btn-ghost`) | `bg white/.05`, `border white/.10–.14`; hover sube a `.09`/`.24`. |
| **Acento gradiente** | global | Gradiente clipeado a texto / anillo / línea. Nunca caja rellena a opacidad alta. |
| **Chips** | Services, Portfolio | `.chip` (§5). Aparecen desde abajo en hover (`svc-chips`). |
| **Eyebrow / pill** | `.h-eyebrow` (§5) | Kicker violeta tenue sobre el título. |
| **KPI gigante con shimmer** | TrustSection | Número `clamp(...)` clipeado al gradiente, banda de luz que recorre en hover (§6). Sin caja. |
| **Marquee de logos** | TrustSection | 2 filas opuestas, doble copia (`translateX(-50%)` loop sin costura), `mask` de fade en bordes, pausa en hover. Logos `simple-icons` mono `white/.42` → color de marca (`--brand` = `iconColor`) en hover, nombre aparece debajo. |
| **Mockups CSS abstractos** | Portfolio | 4 `kind` (ecommerce/mobile/dashboard/landing) dibujados con divs + `--accent-grad`. Sin imágenes reales. Barra de "ventana" con 3 puntos. |
| **icon-ring** | Services (`svc-ic`), servicios.astro (`ds-iconring`) | Tile mono en reposo → anillo + halo de gradiente enmascarado en hover. |
| **Logos del stack** | servicios.astro (`tlogo`), TrustSection | `astro-icon` + `simple-icons`, `currentColor`, `white/.42` reposo → `--brand` hover. `fill: currentColor`. |
| **Sigla de categoría** | servicios.astro (`ds-mark`) | Sigla gigante (`UI`/`API`/`AI`…) en Jakarta `800`, `color: rgba(255,255,255,.08)` detrás del icono. |
| **Sección "Dos Tonos"** | servicios.astro | Fila a 2 columnas: zona tintada (wash §6, alterna lado por fila) + zona plana (features con `ds-dot` = línea corta de gradiente). |
| **Monograma / avatar gradiente** | Testimonials (`ts-avatar`) | Iniciales sobre `--grad`, texto `#0a0a0c`, glow `0 0 20px -4px var(--glow)`. |
| **Bento tiles** | Pricing, Footer | Grid de spans (`col-2/3/4`, `row-2`), tile glass con glow `::after` en hover, lift `translateY`. |
| **Header pill (liquid glass)** | Navigation (`.tsx`, React) | `@creativoma/liquid-glass`, pills flotantes `fixed top-5`, layout asimétrico, sheet móvil. Único componente React montado (`client:load`). |

---

## 9. Layout y spacing

- **Contenedor:** `max-w-7xl mx-auto` (Hero usa `max-w-7xl` con `px-6`; Services/Pricing usan `max-w-6xl`).
- **Padding de sección:** `py-16 px-4 sm:px-6 lg:px-8` (canónico). Páginas con navbar fija empiezan más abajo (`pt-32`).
- **Header de sección centrado:** `<div class="text-center mb-14/mb-16 reveal">` con `h-title` + subtítulo `text-lg text-white/55 max-w-2xl mx-auto`.
- **`overflow-x-clip`** en `<body>` y en secciones con elementos que sangran (Hero, servicios) para evitar bounce horizontal.
- **Navbar:** `fixed top-5 left-4 right-4 md:left-6 md:right-6 z-50`. Compensar con `pt` en el contenido de cada página.
- **Hero:** `min-h-[100svh]`, grid `lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]`.

---

## 10. Implementación en Astro

- **Render estático preferente.** El CSS scopeado de Astro **no alcanza HTML inyectado por JS** (los nodos nuevos no llevan el atributo de scope). Por eso todo lo que pueda ser estático lo es; el JS se evita salvo necesidad real.
- **Cuándo `<style is:global>` + nesting:** cuando el contenido se inyecta por JS (ej. **Portfolio**: índice y panel se construyen en runtime). Se scopea manualmente anidando todo bajo `#portfolio { … }` para no filtrar al resto del sitio. El Hero usa `:global(.term__line)`, `:global(.c-ok)`, etc. por la misma razón (los spans de la terminal se inyectan).
- **astro-icon** (`integrations: [react(), icon()]`). Sets instalados: **`@iconify-json/simple-icons`** y **`@iconify-json/logos`**. **`lucide` NO está instalado** → los iconos Lucide se **inlinean** como `set:html` del contenido del `<svg>` (ver `ICONS` / `RING_ICONS` en Services, Pricing, Footer, servicios.astro).
- **Iconos de marca:** `<Icon name="simple-icons:<slug>" />` + color por `--brand: <iconColor>` (no por prop de color). El icono va `currentColor`/`fill: currentColor`, gris en reposo, color de marca en hover.
- **View Transitions (todo el sitio):** `<ClientRouter />` (de `astro:transitions`) vive en `Layout.astro`, así que la navegación es tipo-SPA con transiciones entre páginas. **Consecuencia clave:** los `<script>` que construyen/animan por JS NO se re-ejecutan solos al navegar. Por eso Hero, Portfolio (y gracias) llevan **`data-astro-rerun`** para reiniciarse en cada navegación. **Regla:** cualquier contenido nuevo armado por JS debe llevar `data-astro-rerun` (o escuchar `astro:page-load`), o quedará vacío/congelado al volver a su página por navegación SPA.

---

## 11. DO / DON'T

**DO**
- Usar los 3 gradientes de `global.css` por token, rotados `i % 3`.
- `font-family: 'Plus Jakarta Sans'` solo títulos; `'Sora'` cuerpo/UI; mono **solo** terminal del Hero.
- Subtítulo de sección en `text-white/55`; glass en `.04` fill / `.08` border.
- `rounded-btn` (12px) para CTAs o `rounded-full` para pills.
- Reveals `focus-in` en load + stagger `--d`. Bloque `prefers-reduced-motion: reduce` siempre.
- Iconos: `simple-icons`/`logos` vía astro-icon, o Lucide inlineado con `set:html`.
- Color de marca por `--brand` / `--grad` / `--glow`; glow rgba `.5` por defecto.

**DON'T**
- ❌ `purple-600`, `from-purple-400 via-pink-400 to-blue-400` ni paleta genérica del template.
- ❌ Emoji (todo es SVG).
- ❌ Cards/pills genéricas de framework; usar hairline + glass medidos.
- ❌ JetBrains Mono fuera de la terminal del Hero.
- ❌ Animaciones disparadas por scroll / IntersectionObserver / ScrollTrigger.
- ❌ Olvidar `prefers-reduced-motion`.
- ❌ Redefinir los stops de los gradientes en un componente (referenciar el token).
- ❌ Rellenar una caja entera con el gradiente a opacidad alta (es acento: clip a texto, anillo, wash `.07–.22`, línea, glow).
- ❌ Confiar en CSS scopeado para HTML inyectado por JS (usar `:global` / `is:global` con nesting).

---

## 12. Flujo de diseño (`design-explorations/`)

1. Por cada sección se generan ~10 alternativas **standalone** en `design-explorations/` (HTML autocontenido: `hero-NN.html`, `cta-NN.html`, `footer-NN.html`, etc., con un `*-index.html` para verlas en grilla).
2. **Poda por eliminación:** se descartan las que no encajan, a veces combinando lo mejor de varias (`cta-combinado.html`, `footer-fusion-*`).
3. El ganador se **porta como render estático** al `.astro` real (ej. `servicios.astro` portado de `sv-03b`, Footer del `cta-09` + footer bento). Se traen tokens (`--gradient-*`, `--ease-out`), se scopea el CSS a la sección, y se adapta a astro-icon / `set:html` según los sets instalados.
4. **No editar destructivo:** combinar/iterar = archivo nuevo + actualizar el index, nunca pisar el original.

Backlog de pulido sección por sección en `docs/PLAN.md`.
