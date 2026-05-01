# Navigation — header pill / liquid glass (§1.2)

Evaluación de 5 variantes del header con vibe pill flotante / liquid glass. Detalle del flujo en [`WORKFLOW.md`](./WORKFLOW.md).

## Decisiones cerradas

- **Forma**: pill flotante. No full-width.
- **Posición**: `fixed top-4 left-1/2 -translate-x-1/2` — despegado del top y centrado.
- **Material**: vidrio (backdrop-blur + bg semi-transparente).
- **Mobile**: cada variante colapsa a un pill compacto con drawer/sheet descendente.
- **Z-index**: `z-50` (debajo del switcher que está en `z-[100]`).

## Variantes a evaluar

| Variante | Ruta | Layout |
|---|---|---|
| **A — Pill simple** | `/nav-a` | Single pill centrado: logo + links + CTA en una línea. Glass uniforme. |
| **B — Doble pill** | `/nav-b` | Dos pills separados: logo a la izquierda + menú/CTA a la derecha. Look Vercel-ish. |
| **C — Liquid premium** | `/nav-c` | Single pill con glass más pronunciado: doble border (outer + inset highlight), heavier blur con saturate, multiple shadows. Estética macOS Sonoma / iOS 18. |
| **D — Expandible** | `/nav-d` | Single pill que arranca compacto y se expande al hover/focus revelando los links. Interactivo. |
| **E — Pills segmentados** | `/nav-e` | Cada link en su propio pill independiente. Logo y CTA aparte. Look brutalist/segmented. |

Cada ruta es una clonación completa de la home (Hero + Services + TrustSection + Portfolio + Pricing + Testimonials + Footer) para evaluar el header en contexto real, no aislado.

## Switcher

`NavigationSwitcher.astro` se monta en cada página de evaluación, abajo (no arriba para no chocar con el header). Permite saltar entre las 5 variantes sin recargar manualmente.

## Cleanup cuando se elija

Cuando el usuario diga "elijo X":

1. Promover el contenido de `NavigationX.astro` a `Navigation.astro` (sobreescribir el actual).
2. Borrar las otras 4 variantes (`NavigationA/B/C/D/E.astro` excepto la elegida).
3. Borrar `NavigationSwitcher.astro`.
4. Borrar las 5 pages `src/pages/nav-{a,b,c,d,e}.astro`.
5. Verificar que `index.astro` sigue importando `Navigation` (y todas las páginas que lo usan también) — no requiere cambios.
6. Marcar items hechos en `PLAN.md §1.2`.

## Reglas comunes

- Los 5 usan la misma lista de `navLinks` y la misma estructura HTML básica para que comparar sea apples-to-apples — solo cambia el styling.
- Cada uno tiene `aria-label`, `aria-expanded`, `aria-controls` correctos en el botón de menú móvil.
- Ningún cambio en `Navigation.astro` original durante la evaluación — vive en paralelo.
- El nav original (`Navigation.astro`) sigue activo en `/`, `/contacto`, etc. Las pages `/nav-*` son únicas con la variante.
