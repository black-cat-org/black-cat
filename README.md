# Black Cat — Landing Page

Sitio corporativo de **Black Cat**, empresa de desarrollo de software. La landing presenta los servicios para terceros (desarrollo web, backend, apps móviles, e-commerce, infraestructura, hosting, soporte) y sirve como hub de los productos propios de la marca.

## Stack

- [Astro 6](https://astro.build/) — sitio estático con file-based routing
- [React 19](https://react.dev/) vía `@astrojs/react` (disponible para componentes interactivos)
- [Tailwind CSS v4](https://tailwindcss.com/) vía `@tailwindcss/postcss`
- [`@floating-ui/react`](https://floating-ui.com/) para futuros popovers / tooltips
- TypeScript en modo strict
- Node ≥ 22.12

## Requisitos

- Node ≥ 22.12 (revisar con `node -v`)
- npm

## Setup

```bash
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:4321](http://localhost:4321).

## Comandos

| Comando            | Acción                                       |
| ------------------ | -------------------------------------------- |
| `npm install`      | Instala dependencias                         |
| `npm run dev`      | Servidor de desarrollo en `localhost:4321`   |
| `npm run build`    | Build de producción a `./dist/`              |
| `npm run preview`  | Preview local del build                      |
| `npm run astro …`  | CLI de Astro (`astro check`, `astro add`, …) |

## Estructura

```
src/
├── components/
│   ├── Navigation.astro          # Navbar global
│   └── sections/                 # Secciones del home
├── layouts/
│   └── Layout.astro              # Layout base con SEO + fuente Inter
├── pages/                        # Routing file-based
│   ├── index.astro               # Home
│   ├── servicios/                # Páginas por servicio
│   ├── portfolio/                # Case studies
│   ├── precios.astro
│   ├── sobre-nosotros.astro
│   ├── contacto.astro
│   └── gracias.astro
└── styles/
    └── global.css                # Tailwind + animaciones custom
public/                           # Assets estáticos
postcss.config.mjs                # Plugin de Tailwind
astro.config.mjs                  # Config de Astro
```

Detalle de páginas y flujos de usuario en [`SITEMAP.md`](./SITEMAP.md).
Branding, paleta, tipografía y tono de comunicación en [`SITE-CONTENT.md`](./SITE-CONTENT.md).

## Convenciones rápidas

- Páginas y rutas en español, **kebab-case**: `sobre-nosotros.astro`, `apps-moviles.astro`.
- Componentes en **PascalCase**: `Hero.astro`, `Navigation.astro`.
- Tema **dark fijo** (`<html class="dark">`), tipografía Inter.
- Solo Tailwind utilities en clases; animaciones custom en `global.css`.

Para guías más extensas (decisiones técnicas, workflow de git, instrucciones para Claude Code) ver [`CLAUDE.md`](./CLAUDE.md).

## Despliegue

El build produce HTML estático en `dist/`. Se puede servir desde cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

## Licencia

Propietario — Black Cat.
