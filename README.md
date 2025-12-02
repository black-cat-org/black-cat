# 🐈‍⬛ Black Cat - Landing Page Premium

Landing page profesional desarrollada con **Astro**, **React 19**, **TailwindCSS** y tecnologías modernas.

## 🚀 Stack Tecnológico

- **Astro** - Framework principal para sitios ultra rápidos
- **React 19** - Componentes interactivos con Islands Architecture
- **TailwindCSS** - Diseño moderno y responsive
- **Supabase** - Base de datos y backend
- **TanStack Query** - Manejo de datos y cache
- **Zustand** - Estado global
- **Axios** - Peticiones HTTP
- **Floating UI** - Dynamic Islands y tooltips
- **Framer Motion** - Animaciones fluidas

## 📁 Estructura del Proyecto

```
black-cat/
├── src/
│   ├── components/
│   │   ├── base/          # Componentes reutilizables (Button, Input, Card)
│   │   ├── sections/      # Secciones de la landing (Hero, Services, etc.)
│   │   └── islands/       # Componentes interactivos React (DynamicIsland, ContactModal)
│   ├── hooks/             # Custom hooks (useContact)
│   ├── layouts/           # Layouts Astro
│   ├── lib/               # Configuraciones (Supabase, TanStack Query)
│   ├── pages/             # Páginas Astro
│   ├── services/          # Servicios API
│   ├── store/             # Zustand stores
│   ├── styles/            # Estilos globales
│   └── types/             # TypeScript types
├── public/                # Assets estáticos
└── astro.config.mjs       # Configuración Astro
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <repo-url>
cd black-cat
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

Configura tus credenciales de Supabase:
```env
PUBLIC_SUPABASE_URL=tu_url_de_supabase
PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📦 Scripts Disponibles

```bash
npm run dev         # Inicia servidor de desarrollo
npm run build       # Genera build de producción
npm run preview     # Preview del build de producción
```

## 🗄️ Configuración de Supabase

### Crear tabla de contactos

```sql
CREATE TABLE contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones
CREATE POLICY "Anyone can insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);
```

## 🎨 Personalización

### Colores y Estilos

Los colores principales están definidos en `src/styles/global.css` usando TailwindCSS:
- Purple: `#8B5CF6` - CTA principal
- Pink: `#EC4899` - Acentos
- Gray/Black: Background oscuro

### Contenido

Para modificar el contenido de las secciones, edita los archivos en `src/components/sections/`:
- `Hero.tsx` - Sección principal
- `Services.tsx` - Servicios ofrecidos
- `Pricing.tsx` - Planes y precios
- `Testimonials.tsx` - Testimonios de clientes
- `Portfolio.tsx` - Proyectos destacados
- `Footer.tsx` - Footer y CTAs

### WhatsApp

Actualiza el número de WhatsApp en:
- `src/components/sections/Hero.tsx` (línea 8)
- `src/components/sections/Footer.tsx` (línea 85)

Formato: `5491234567890` (código de país + número sin espacios)

## 🚢 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Configura las variables de entorno
3. Deploy automático

### Netlify

1. Conecta tu repositorio en [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configura variables de entorno

### Otros

El proyecto genera archivos estáticos en `dist/`. Pueden servirse desde cualquier servidor web estático.

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **Tiempo de carga**: < 1s
- **Core Web Vitals**: Excelentes
- **SEO**: Optimizado

## 🔧 Características Principales

✅ **Ultra rápido** - Astro genera HTML estático
✅ **SEO Optimizado** - Meta tags, sitemap, structured data
✅ **Mobile First** - Diseño responsive perfecto
✅ **Animaciones Suaves** - Framer Motion y CSS animations
✅ **Dynamic Island** - Efecto flotante estilo iOS
✅ **Formulario de Contacto** - Integrado con Supabase
✅ **WhatsApp Integration** - CTA directo
✅ **Type Safe** - TypeScript en todo el proyecto
✅ **Modern Stack** - React 19, TailwindCSS v4

## 📝 Próximas Mejoras

- [ ] Sistema de blog con MDX
- [ ] Panel administrativo
- [ ] Analytics dashboard
- [ ] Multi-idioma (i18n)
- [ ] Dark/Light mode toggle
- [ ] Más animaciones con Framer Motion

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Add: nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📧 Contacto

**Black Cat Development**
- Email: info@blackcat.dev
- WhatsApp: +54 9 11 2345-6789
- Website: https://blackcat.dev

---

Desarrollado con ❤️ por Black Cat
