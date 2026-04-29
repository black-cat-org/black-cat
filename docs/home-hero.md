# Home — Hero (§2.1)

Decisiones de la sub-sección 2.1 del [`PLAN.md`](./PLAN.md). Hero es la carta de presentación del sitio — el usuario quiere evaluar 4 variantes de animación antes de elegir.

## 1. Decisiones cerradas

| Tema | Decisión |
|---|---|
| Tagline | **Cambia** a un texto más amplio que "Desarrollo Web" (8 servicios, no solo web) |
| Sub-copy | **Cambia** a beneficio puro, sin mencionar stack |
| CTA primario | "Comenzar Proyecto" → `/contacto` (queda) |
| CTA secundario | WhatsApp con `whatsappUrl()` (queda) |
| Stats | Mantener placeholders visibles (100+ / 98% / 24/7) hasta tener métricas reales — TODO comment en código |
| Layout altura | `min-h-dvh` (dynamic viewport, mejor en mobile que `h-screen`) |
| Scroll indicator | **Eliminar** la flecha del bottom |
| Smooth scroll global (Lenis) | Diferido — se decide tras elegir variante de Hero |
| Animaciones | 4 variantes a evaluar (ver §4) |

## 2. Copy histórico (referencia, NO usar)

Se documenta para volver atrás si el copy nuevo no convence después de probarlo.

```
[Tagline]
Línea 1: "Desarrollo Web"
Línea 2 (gradient): "de Alto Impacto"

[Sub-copy]
"Transformamos ideas en experiencias digitales rápidas, escalables y optimizadas.
Especialistas en React, Astro, NestJS y tecnologías de vanguardia."
```

Problemas con este copy:

- "Desarrollo Web" deja afuera 7 servicios (backend, móvil, e-commerce, infra, etc.).
- Sub-copy menciona stack — relevante para devs, no para el cliente que busca solucionar un problema de negocio.

## 3. Copy decidido

```
[Tagline]
Línea 1: "Software"
Línea 2 (gradient): "de Alto Impacto"

[Sub-copy]
"La empresa detrás de la línea Black — productos digitales propios y soluciones a medida hechas para potenciar industrias enteras."
```

Posicionamiento detrás del copy:

- Black Cat es una **empresa de productos**, no una agencia de software a medida. La línea Black (Black Estate, Black CRM, Black POS, etc.) es el foco principal.
- Sub-copy se construye sobre tres ideas: (1) "la empresa detrás de la línea Black" presenta a Black Cat como casa de productos; (2) "productos digitales propios y soluciones a medida" reconoce los dos brazos del negocio sin diluir el foco en producto; (3) "potenciar industrias enteras" es el norte aspiracional.
- "Software" en el tagline sigue siendo válido porque cubre tanto productos como soluciones a medida.

## 4. Variantes de animación a evaluar

Cada variante se monta en una ruta independiente para comparar visualmente. Cuando el usuario decida, se promueve a `Hero.astro` y se borran las 3 restantes + las rutas + dependencias innecesarias.

| Variante | Ruta | Qué hace | Costo JS |
|---|---|---|---|
| **A — Mínimo** | `/hero-a` | Blobs animados (CSS), fade-in al cargar. Lo actual con copy nuevo + `h-dvh` + sin scroll indicator. | 0 KB |
| **B — Medio** | `/hero-b` | A + text reveal por palabra en H1 (CSS keyframes con stagger), badge con glow pulsante, underline animado en CTAs. | ~2 KB |
| **C — Alto** | `/hero-c` | B + parallax suave en blobs al hacer scroll (`transform: translateY` con RAF) + magnetic hover en CTAs (mousemove handler con max-distance). | ~5 KB |
| **D — Full Lusion** | `/hero-d` | C + GSAP ScrollTrigger: pin del Hero, H1 que se reveal con scrub, stats fade-up con scrub, blobs con scale/opacity controlados por scroll. | ~38 KB (GSAP + ScrollTrigger) |

### Reglas comunes a las 4 variantes

- `prefers-reduced-motion: reduce` → fallback al estado final sin animación. Sin excepción.
- Animaciones solo sobre `transform` y `opacity` (60fps).
- Cada variante carga su JS solo si la página la usa (Astro inline scripts).
- Mismo copy y misma estructura semántica (h1, h2, p) en las 4 — solo cambia la capa de animación.

## 5. Picker entre variantes

Cada página `/hero-*` muestra en el top un picker simple para saltar entre las 4 variantes y comparar. El picker se elimina junto con las variantes descartadas.

## 6. Plan de cleanup (cuando el usuario elija)

Cuando el usuario diga "me quedo con la X":

1. Copiar el contenido de `HeroX.astro` a `Hero.astro` (sobreescribir el actual).
2. Borrar las otras 3 variantes (`HeroA.astro`, `HeroB.astro`, ... excepto la elegida).
3. Borrar las 4 rutas (`hero-a.astro`, `hero-b.astro`, `hero-c.astro`, `hero-d.astro`).
4. Si la elegida NO es D: `npm uninstall gsap` (la única dep externa que se introduce).
5. Actualizar `PLAN.md` §2.1 con los items hechos.
6. Commit final + merge a main.

## 7. Roadmap relacionado (post-Hero)

- **Lenis smooth scroll**: reevaluar tras elegir Hero. Si la variante elegida tiene scroll-driven (C o D), Lenis suaviza más el efecto. Si es A o B, no aporta tanto.
- **View Transitions API**: pendiente para cuando trabajemos el Layout/Navigation.
