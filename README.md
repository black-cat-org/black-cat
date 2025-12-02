# 🐈‍⬛ Black Cat - Landing Page Premium

Landing page profesional desarrollada con **Astro** (content-first), diseño minimalista dark y tecnologías modernas.

## 🚀 Stack Tecnológico

- **Astro 5.16.3** - Framework principal (SSG/SSR)
- **React 19** - Solo para interactividad específica (menú móvil)
- **TailwindCSS v4** - Diseño moderno y responsive
- **FormSubmit** - Formulario de contacto sin backend

## 📁 Estructura del Proyecto

```text
black-cat/
├── src/
│   ├── components/
│   │   ├── Navigation.astro        # Barra de navegación global
│   │   └── sections/               # Secciones reutilizables
│   │       ├── Hero.astro
│   │       ├── Services.astro
│   │       ├── TrustSection.astro
│   │       ├── Portfolio.astro
│   │       ├── Pricing.astro
│   │       ├── Testimonials.astro
│   │       └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro            # Layout base con SEO
│   ├── pages/                      # Rutas (file-based routing)
│   │   ├── index.astro             # Home
│   │   ├── servicios.astro         # Todos los servicios
│   │   ├── servicios/              # Páginas individuales de servicios
│   │   │   ├── desarrollo-web.astro
│   │   │   ├── backend-apis.astro
│   │   │   ├── apps-moviles.astro
│   │   │   ├── diseno-uiux.astro
│   │   │   ├── infraestructura.astro
│   │   │   ├── ecommerce.astro
│   │   │   ├── hosting-ssl.astro
│   │   │   └── soporte-tecnico.astro
│   │   ├── portfolio.astro         # Proyectos destacados
│   │   ├── precios.astro           # Planes y precios
│   │   ├── sobre-nosotros.astro    # About us
│   │   ├── contacto.astro          # Formulario de contacto
│   │   └── gracias.astro           # Thank you page
│   └── styles/
│       └── global.css              # Estilos globales + animaciones
├── public/                         # Assets estáticos
└── astro.config.mjs                # Configuración Astro
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos

1. **Instalar dependencias**

```bash
npm install
```

2. **Ejecutar en desarrollo**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

3. **Build de producción**

```bash
npm run build
```

Los archivos estáticos se generan en `dist/`

## 📦 Scripts Disponibles

```bash
npm run dev         # Servidor de desarrollo
npm run build       # Build para producción
npm run preview     # Preview del build
```

## 📧 Configuración del Formulario de Contacto

El formulario usa **FormSubmit.co** (servicio gratuito sin backend):

1. Abre `src/pages/contacto.astro`
2. En la línea 72, reemplaza el email:

```astro
action="https://formsubmit.co/TU_EMAIL_AQUI"
```

3. Al enviar el primer formulario, FormSubmit te enviará un email de confirmación
4. La página de éxito está en `src/pages/gracias.astro`

### Características del formulario

- ✅ Sin backend requerido
- ✅ Protección anti-spam (honeypot)
- ✅ Sin CAPTCHA
- ✅ Redirección personalizada
- ✅ Subject personalizado

## 🎨 Personalización

### Colores y Estilos

Los colores principales están en TailwindCSS:

- Purple: `#8B5CF6` - CTA principal
- Pink: `#EC4899` - Acentos
- Gray/Black: Background oscuro

### Contenido

Edita los archivos en `src/components/sections/` y `src/pages/`:

**Servicios:**

- Lista completa: `src/pages/servicios.astro` (línea 5)
- Grid home: `src/components/sections/Services.astro` (línea 3)

**Portfolio:**

- Proyectos: `src/pages/portfolio.astro` (línea 5)
- Preview home: `src/components/sections/Portfolio.astro` (línea 3)

**Precios:**

- Planes: `src/components/sections/Pricing.astro` (línea 3)
- Add-ons: `src/pages/precios.astro` (línea 31)

**Equipo:**

- `src/pages/sobre-nosotros.astro` (línea 5)

### WhatsApp

Actualiza el número de WhatsApp (formato: código país + número sin espacios):

- `src/components/sections/Hero.astro` (línea 37)
- `src/components/sections/Footer.astro` (línea 42)
- `src/pages/contacto.astro` (línea 196)

### Email de Contacto

- `src/pages/contacto.astro` (línea 72)
- `src/components/sections/Footer.astro` (línea 78)

## 🚢 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Auto-detecta Astro
3. Deploy automático

### Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### Otros proveedores

El proyecto genera archivos estáticos. Compatible con:

- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Cualquier hosting estático

## 📈 Performance

- **Build time**: ~10s
- **Páginas generadas**: 15 (todas estáticas)
  - 1 Home
  - 1 Servicios overview + 8 servicios individuales
  - 1 Portfolio
  - 1 Precios
  - 1 Sobre Nosotros
  - 1 Contacto
  - 1 Gracias
- **Lighthouse Score**: 95+ esperado
- **Core Web Vitals**: Optimizado
- **SEO**: Meta tags completos en todas las páginas

## 🔧 Características Implementadas

### Páginas

✅ **Home** (`/`) - Hero, servicios, stats, portfolio preview, pricing, testimonios
✅ **Servicios** (`/servicios`) - Overview de 8 servicios con links a páginas individuales
✅ **Servicios Individuales** (8 páginas):

- `/servicios/desarrollo-web` - React, Astro, Next.js
- `/servicios/backend-apis` - NestJS, Node.js, APIs REST/GraphQL
- `/servicios/apps-moviles` - Flutter, React Native
- `/servicios/diseno-uiux` - Figma, Adobe XD
- `/servicios/infraestructura` - AWS, Docker, Kubernetes
- `/servicios/ecommerce` - Shopify, WooCommerce
- `/servicios/hosting-ssl` - Hosting + SSL + CDN
- `/servicios/soporte-tecnico` - Mantenimiento continuo
  ✅ **Portfolio** (`/portfolio`) - 6 proyectos con desafíos, soluciones y resultados
  ✅ **Precios** (`/precios`) - 3 planes + add-ons + FAQ
  ✅ **Sobre Nosotros** (`/sobre-nosotros`) - Equipo, valores, misión, visión, timeline
  ✅ **Contacto** (`/contacto`) - Formulario funcional + info de contacto
  ✅ **Gracias** (`/gracias`) - Thank you page con auto-redirect

### Componentes

✅ **Navegación** - Responsive con menú móvil
✅ **Hero** - Animated background con CTAs
✅ **Services** - Grid interactivo con hover
✅ **TrustSection** - Marquee infinito de tecnologías
✅ **Portfolio** - Cards con gradientes
✅ **Pricing** - Comparación de planes
✅ **Testimonials** - Reviews con ratings
✅ **Footer** - Multi-columna con CTAs

### Funcionalidad

✅ Navegación entre páginas
✅ Rutas file-based
✅ SEO optimizado
✅ Mobile responsive
✅ Animaciones CSS
✅ Formulario de contacto funcional
✅ WhatsApp integration
✅ Smooth scrolling
✅ 100% contenido estático

## 📝 Próximas Mejoras Opcionales

- [ ] Blog con MDX
- [ ] Búsqueda de servicios
- [ ] Modo claro/oscuro
- [ ] Filtros en portfolio
- [ ] Más animaciones
- [ ] Sitemap XML
- [ ] RSS feed

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Commit (`git commit -m 'Add: nueva feature'`)
4. Push (`git push origin feature/nueva-feature`)
5. Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📧 Contacto

**Black Cat Development**

- Email: <info@blackcat.dev>
- WhatsApp: +54 9 11 2345-6789

---

Desarrollado con Astro y ❤️ por Black Cat
