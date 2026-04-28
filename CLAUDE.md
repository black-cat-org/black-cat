# CLAUDE.md

Contexto e instrucciones para trabajar en este repositorio con Claude Code.

## El proyecto

Landing page corporativa de **Black Cat**, empresa de desarrollo de software con dos líneas de negocio:

1. **Servicios a terceros**: desarrollo web, backend/APIs, apps móviles, diseño UI/UX, e-commerce, infraestructura, hosting & SSL, soporte técnico.
2. **Productos propios** (líneas "Black"): Black Estate, Black POS, Black CRM, etc. Aún sin definir en detalle dentro del sitio.

El sitio es 100% estático (SSG), en español, con tema dark y enfocado a captar clientes para los servicios.

Branding, paleta, tipografía, tono de voz e identidad visual están en [`SITE-CONTENT.md`](./SITE-CONTENT.md).
La estructura de páginas y los flujos de usuario están en [`SITEMAP.md`](./SITEMAP.md).

## Stack

- **Astro 6** (SSG, file-based routing) — `astro@^6`
- **React 19** vía `@astrojs/react` — disponible para componentes interactivos. Actualmente **no hay componentes React** en `src/`; toda la interactividad menor (ej. menú móvil) se hace con vanilla JS en `<script>` dentro del `.astro`. Mantener React es intencional para tener la opción futura.
- **Tailwind CSS v4** vía **`@tailwindcss/vite`** (ruta oficial recomendada por Astro). Ver [Decisiones técnicas](#decisiones-técnicas) por un gotcha conocido.
- **`@floating-ui/react`** instalado para futuros componentes (popovers, tooltips, dropdowns).
- **TypeScript strict** (`astro/tsconfigs/strict`).
- **Node ≥ 22.12** (declarado en `engines`).

## Comandos

```bash
npm install        # instalar deps
npm run dev        # dev server en localhost:4321
npm run build      # build estático a dist/
npm run preview    # servir el build localmente
```

## Estructura

```
src/
├── components/
│   ├── Navigation.astro          # Navbar global + menú móvil
│   └── sections/                 # Secciones reutilizables del home
│       ├── Hero.astro
│       ├── Services.astro
│       ├── TrustSection.astro
│       ├── Portfolio.astro
│       ├── Pricing.astro
│       ├── Testimonials.astro
│       └── Footer.astro
├── layouts/
│   └── Layout.astro              # HTML root + SEO + Inter font + bg negro
├── pages/                        # Routing file-based
│   ├── index.astro               # Home (compone secciones)
│   ├── servicios.astro           # Overview
│   ├── servicios/                # Sub-páginas: una por servicio
│   ├── portfolio.astro           # Overview
│   ├── portfolio/                # Sub-páginas: case studies
│   ├── precios.astro
│   ├── sobre-nosotros.astro
│   ├── contacto.astro            # Formulario (FormSubmit en el legacy)
│   └── gracias.astro             # Post-submit
└── styles/
    └── global.css                # `@import "tailwindcss"` + animaciones custom
public/                           # Favicon y estáticos
astro.config.mjs                  # Integraciones (React) + plugin de Vite (Tailwind)
SITEMAP.md                        # Mapa de páginas y flujos
SITE-CONTENT.md                   # Branding, paleta, copy, tono
```

## Convenciones

### Naming
- Páginas y rutas en **español, kebab-case**: `sobre-nosotros.astro`, `apps-moviles.astro`, `hosting-ssl.astro`.
- Componentes en **PascalCase**: `Hero.astro`, `Navigation.astro`.
- Secciones del home van en `src/components/sections/`. Componentes reutilizables transversales irían directo en `src/components/`.

### Estilos
- **Solo Tailwind utilities** en clases. Las animaciones custom (`blob`, `marquee`) viven en `src/styles/global.css` dentro de `@layer utilities`.
- **Tema dark fijo** (`<html class="dark">`). El sitio no tiene toggle light/dark.
- **Fuente:** Inter (300–900) cargada desde Google Fonts en `Layout.astro`.
- **Paleta operativa actual** (las clases más usadas): `bg-black`, `text-white`, `text-gray-300/400`, púrpura `purple-400/600/700`, gradientes `from-purple-400 via-pink-400 to-blue-400`.
- La identidad de marca completa (paleta amarillo neón / púrpura eléctrico, tipografía Bebas Neue/Montserrat, etc.) está descrita en `SITE-CONTENT.md` pero **no toda está implementada en el código**. Antes de "ajustar a la identidad", consultar con el usuario qué propuesta de paleta se adopta.

### Layout y SEO
- Toda página usa `<Layout title=... description=...>`. El `Layout.astro` ya incluye Open Graph, viewport, charset, favicon SVG y meta description.
- Idioma del HTML: `lang="es"`.

### Interactividad
- Preferir Astro + vanilla JS en `<script>` para interacciones simples (ya hay precedente con el menú móvil).
- Para algo que justifique React (estado complejo, librerías React-only como floating-ui), crear `.tsx` en `src/components/` y usar directivas `client:load`/`client:idle`/`client:visible` según convenga.

## Decisiones técnicas

### Instalación de integraciones: usar `npx astro add ...`
Para `@astrojs/react` y `@tailwindcss/vite` el setup se hizo con la CLI oficial de Astro:

```bash
npx astro add react --yes
npx astro add tailwind --yes
```

**No instalar manualmente** con `npm install` los paquetes oficiales que tienen comando `astro add`. La CLI hace dos cosas extra que importan:
- Ajusta `astro.config.mjs` y `tsconfig.json` con la sintaxis recomendada de la versión actual.
- Resuelve las versiones de dependencias transitivas (notoriamente `vite`) de forma consistente con la versión de Astro instalada.

En este proyecto, intentar el camino manual hizo que npm dedupeara `vite` a la última (`8.x`) en vez de `^7.3.2` que es lo que `astro@6` declara como dep directa, y eso rompe `@tailwindcss/vite` con:

```
[@tailwindcss/vite:generate:build] Missing field `tsconfigPaths` on BindingViteResolvePluginConfig.resolveOptions
```

**Si vuelve a aparecer ese error** (por ejemplo tras actualizar otra dep que tire vite 8):
1. Verificar con `npm ls vite` que todos los nodos resuelvan a `vite@7.x`.
2. Si alguno está en `8.x`, agregar a `package.json`:
   ```json
   "overrides": { "vite": "^7" }
   ```
   y `rm -rf node_modules package-lock.json && npm install`.
3. Cuando Astro suba su dep directa a Vite 8 / rolldown-vite, este override se elimina.

### React presente pero sin uso
Está instalado y configurado (`@astrojs/react` + `tsconfig.compilerOptions.jsx="react-jsx"`). Cero componentes React hoy. Si se trae una feature que lo requiera, basta crear un `.tsx` en `src/components/` y montarlo con `client:load`/`client:idle`/`client:visible`.

## Workflow con el usuario

El usuario sigue el patrón **Diagnose → Propose → Wait → Implement**:

1. **Diagnose**: identificar la causa raíz y explicarla.
2. **Propose**: presentar la solución (o opciones) con razonamiento corto.
3. **Wait**: **no** implementar hasta que el usuario apruebe explícitamente.
4. **Implement**: solo después del OK.

Reglas concretas:
- Si hay varias formas válidas, **preguntar** cuál usar.
- No tomar decisiones de arquitectura, no cambiar APIs de componentes, no crear archivos nuevos ni reestructurar sin permiso.
- Un fix simple se queda simple — no agregar refactors "de paso".

## Workflow de Git

- **Remote**: `origin = https://github.com/black-cat-org/black-cat.git`
- **Rama por tarea** desde `main`. Prefijos:
  - `feat/` — nueva funcionalidad
  - `fix/` — bug
  - `chore/` — mantenimiento, deps, config
  - `docs/` — documentación
  - `refactor/` — sin cambios de comportamiento
- **Commits convencionales en español**: `feat: ...`, `fix: ...`, `chore: ...`. Cuerpo opcional con bullets cuando el "qué" merece detalle.
- **Staging selectivo**: usar `git add <files>` por nombre. **Nunca `git add -A` o `git add .`** para evitar sumar archivos sensibles.
- **No push automático**. Claude crea commits locales y avisa al usuario para que él haga `git push` (o lo autorice explícitamente).
- **No abrir PRs** sin confirmación previa del usuario.
- **Nunca**: `--force`, `--no-verify`, `reset --hard` sobre trabajo no respaldado, ni sobreescribir cambios sin commit.

## Cosas a tener en mente

- El `.gitignore` incluye `.env`, `.env.production`, `.env.local`, `dist/`, `.astro/`, `node_modules/`. No commitear nada de eso.
- El favicon vive en `public/favicon.svg` y lo referencia `Layout.astro`.
- El formulario de contacto en el código legacy usaba **FormSubmit.co** (sin backend). Si se reactivó, revisar `src/pages/contacto.astro` por la `action` del form.
- Antes de instalar paquetes nuevos del ecosistema Astro, preferir `npx astro add ...` cuando exista — evita problemas de resolución de deps transitivas (ver [Decisiones técnicas](#decisiones-técnicas)).
