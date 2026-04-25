# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Black Cat is a premium landing page for a web development agency built with Astro 5.16.3 as a static site generator. The site showcases services, portfolio projects, pricing plans, and team information in a dark-themed, modern design.

**Tech Stack:**
- Astro 5.16.3 (SSG with Islands Architecture)
- React 19 (minimal usage, only for specific interactive components)
- TailwindCSS v4 (utility-first styling)
- FormSubmit.co (contact form handling, no backend required)

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
```

## Architecture & Key Concepts

### Content-First Approach
This project follows Astro's content-first philosophy. Almost all content is defined as JavaScript/TypeScript data structures directly in `.astro` files rather than in separate CMS or markdown files.

**Example:** Services, portfolio projects, pricing plans, and team members are defined as arrays of objects at the top of their respective page files:
- Services: `src/pages/servicios.astro` (line 6)
- Portfolio projects: `src/pages/portfolio.astro` (line 6)
- Pricing plans: `src/components/sections/Pricing.astro` (line 3)

### Page Structure Pattern
All pages follow this consistent structure:
```astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.astro';
import Footer from '../components/sections/Footer.astro';
// Import section components as needed
---

<Layout title="..." description="...">
  <Navigation />
  <!-- Page content sections -->
  <Footer />
</Layout>
```

### File-Based Routing
Astro uses file-based routing. Each `.astro` file in `src/pages/` becomes a route:
- `src/pages/index.astro` → `/`
- `src/pages/servicios.astro` → `/servicios`
- `src/pages/servicios/desarrollo-web.astro` → `/servicios/desarrollo-web`
- `src/pages/portfolio/ecommerce-premium.astro` → `/portfolio/ecommerce-premium`

### Layout System
- **Base Layout:** `src/layouts/Layout.astro` handles SEO meta tags, fonts (Inter from Google Fonts), and global structure
- All pages use this layout with customizable `title` and `description` props
- The layout enforces dark mode with `class="dark"` on the `<html>` element

### Component Organization
- **Global components:** `src/components/Navigation.astro` (fixed navbar with mobile menu)
- **Section components:** `src/components/sections/` (Hero, Services, Portfolio, Pricing, Testimonials, Footer, TrustSection)
- Sections are composable and reusable across different pages
- Navigation links are defined in `src/components/Navigation.astro` (line 2)

### Styling System
- **TailwindCSS v4** via Vite plugin (configured in `astro.config.mjs`)
- Global styles and custom animations in `src/styles/global.css`
- Custom animations: `animate-blob` (floating gradient effect), `animate-marquee` (infinite scroll)
- Color scheme: Purple (#8B5CF6) and Pink (#EC4899) accents on black/gray dark backgrounds
- Font: Inter (loaded from Google Fonts)

### Data Structure Patterns

**Portfolio Projects** have this shape:
```typescript
{
  title: string,
  category: string,
  description: string,
  challenge: string,
  solution: string,
  results: string[],
  tech: string[],
  gradient: string,  // TailwindCSS gradient classes
  year: string,
  slug: string       // Used for individual project pages
}
```

**Services** have this shape:
```typescript
{
  icon: string,      // Emoji
  title: string,
  slug: string,      // Used for individual service pages
  description: string,
  fullDescription: string,
  technologies: string[],
  features: string[]
}
```

## Key Features & Implementation Notes

### Contact Form
- Uses FormSubmit.co (external service, no backend needed)
- Action URL in `src/pages/contacto.astro` (line 72) must be updated with actual email
- Honeypot field `_gotcha` for spam protection
- Redirects to `/gracias` on success
- FormSubmit sends confirmation email on first submission

### WhatsApp Integration
WhatsApp contact links appear in multiple locations. To update the phone number, modify:
- `src/components/sections/Hero.astro` (line 37)
- `src/components/sections/Footer.astro` (line 42)
- `src/pages/contacto.astro` (line 196)

Format: `https://wa.me/[country_code][number]` (no spaces, hyphens, or parentheses)

### Navigation
- Desktop: Horizontal menu with active state highlighting
- Mobile: Hamburger menu with slide-down panel (JavaScript toggle in `Navigation.astro` script tag)
- Current page detection via `Astro.url.pathname`
- CTA button ("Comenzar Proyecto") links to `/contacto`

### SEO Strategy
- Every page has custom `title` and `description` passed to `Layout.astro`
- Open Graph tags for social sharing in base layout
- Spanish language (`lang="es"`)
- Keywords meta tag in base layout
- Smooth scrolling enabled globally in `global.css`

### Static Site Generation
- All pages are pre-rendered at build time
- No client-side routing or hydration except for mobile menu toggle
- React integration exists but is barely used (keep it minimal per Astro best practices)

## Content Editing Guidelines

### Adding a New Service
1. Add service object to array in `src/pages/servicios.astro` (line 6)
2. Create new page: `src/pages/servicios/[slug].astro`
3. Use existing service pages as templates (e.g., `desarrollo-web.astro`)
4. Update navigation if service should appear in main nav

### Adding a New Portfolio Project
1. Add project object to array in `src/pages/portfolio.astro` (line 6)
2. Create detail page: `src/pages/portfolio/[slug].astro`
3. Include sections: challenge, solution, results, tech stack, testimonial, image gallery
4. Use existing portfolio pages as templates (e.g., `ecommerce-premium.astro`)

### Modifying Pricing Plans
- Edit the `plans` array in `src/components/sections/Pricing.astro` (line 3)
- For add-ons/extras, edit `src/pages/precios.astro` (line 31)

### Updating Team Members
- Edit `src/pages/sobre-nosotros.astro` (line 6) in the `team` array

## Important Constraints

- **Minimal JavaScript:** Astro emphasizes zero JS by default. Only use client-side JS when absolutely necessary
- **No React Islands:** Currently React is integrated but not actively used. Prefer vanilla Astro components
- **Spanish Content:** All user-facing text is in Spanish
- **Dark Mode Only:** No light mode toggle exists. Design assumes dark backgrounds
- **Static Output:** This is a static site. No server-side rendering or API routes

## Deployment

The project builds to static HTML/CSS/JS files in `dist/`. Deploy to:
- Vercel (recommended, auto-detects Astro)
- Netlify (build: `npm run build`, publish: `dist`)
- Cloudflare Pages, GitHub Pages, or any static host

Build output: All pages pre-rendered at build time.
