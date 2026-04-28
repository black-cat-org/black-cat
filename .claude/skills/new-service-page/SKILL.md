---
name: new-service-page
description: Crea una nueva página de servicio en src/pages/servicios/<slug>.astro siguiendo el patrón existente del proyecto, y la registra en el array de servicios de src/pages/servicios.astro. Usar cuando el usuario diga "agregar servicio X", "nuevo servicio", "crear página para servicio Y" o similar. Pide al usuario los datos necesarios antes de generar.
---

# new-service-page

Genera una nueva página de servicio consistente con las 8 existentes.

## Inputs a pedir al usuario

Antes de tocar nada, pedile (idealmente todo en una sola pregunta):

1. **slug** (kebab-case, ej. `consultoria-ai`) — será la ruta `/servicios/<slug>`.
2. **título** — nombre del servicio para el h1 (ej. "Consultoría en IA").
3. **icono** (un emoji, ej. `🤖`).
4. **descripción corta** (1 línea, para meta description y card del overview).
5. **tecnologías** (array de objetos `{ name, level, description }`, opcional — si el usuario no las tiene, sugerí dejar el array vacío y completarlo después).
6. **features** (array de objetos `{ title, description, icon }`, mínimo 4-6).
7. **process / pasos** (opcional — si tiene un workflow, array `{ step, title, description, duration }`).
8. **pricing** (opcional — desde-precio o "Consultar").

Si el usuario solo te da nombre + descripción, está OK: generá la página con secciones marcadas como `(pendiente: completar)` para que después se llenen, pero confirmá esa decisión antes.

## Validaciones previas

Antes de escribir:

- Confirmar con `Bash`/`Glob` que `src/pages/servicios/<slug>.astro` **no existe** todavía.
- Confirmar que existen `src/components/Navigation.astro`, `src/components/sections/Footer.astro`, `src/layouts/Layout.astro` (deberían).
- Si vas a actualizar `src/pages/servicios.astro`, leélo primero y entendé el shape del array de servicios.

## Pasos

### 1. Crear `src/pages/servicios/<slug>.astro`

Usá `src/pages/servicios/desarrollo-web.astro` como **referencia viva del patrón**. No mantenemos un template separado para evitar drift — la página existente más completa es la fuente. Cuando crees el nuevo archivo:

- Copiá la estructura general (frontmatter con arrays de datos + secciones `<Layout>`, `<Navigation>`, hero, descripción, tecnologías, features, process, CTA, `<Footer>`).
- Reemplazá los datos con los del usuario.
- Usá las mismas convenciones de Tailwind: `bg-black`, `text-white`, gradientes `from-purple-400 via-pink-400 to-blue-400`, animaciones `animate-blob` cuando aplique.
- Mantené la jerarquía: h1 en hero, h2 para cada sección (Tecnologías, Features, Proceso), h3 para items dentro.
- `<Layout title="<Título> - Black Cat" description="<descripción>">` con título y descripción específicos.

### 2. Registrar en `src/pages/servicios.astro`

Leé el array de servicios existente (típicamente en el frontmatter), y agregá el nuevo objeto manteniendo el orden alfabético O al final, lo que sea consistente con el array actual. Shape mínimo esperado:

```js
{
  icon: '<emoji>',
  title: '<Título>',
  slug: '<slug>',
  description: '<descripción corta>',
  technologies: [...],
  features: [...]
}
```

Si el shape del array tiene más campos en `servicios.astro`, respetalos.

### 3. (Opcional) Actualizar Navigation

Si el servicio es lo suficientemente importante como para aparecer en el navbar principal, preguntá al usuario. Por defecto, los servicios individuales **no** aparecen en `Navigation.astro` — solo el overview `/servicios` está ahí. No agregar a menos que se pida explícito.

### 4. Verificar

- Correr `npm run build` y confirmar que sale verde.
- Listar al usuario qué archivos se crearon y modificaron.
- Recordarle que la página queda lista en `/servicios/<slug>` cuando levante el dev server.

## Reglas

- **No agregues campos al data shape** si el usuario no los pidió y los demás servicios no los tienen — ataría drift.
- **No copies datos placeholder** del servicio de referencia (ej. los porcentajes de skill 95/90/92 de desarrollo-web). Si el usuario no te dio valores, dejá `(pendiente)` o pedí los reales.
- **No agregues comentarios decorativos** al `.astro` generado — el código debe ser limpio igual que las otras páginas.
- Si después de crear la página el `service-page-consistency` subagent reporta drift, ajustar la nueva página, no las otras 8.
