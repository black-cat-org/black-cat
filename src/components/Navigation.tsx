import { useState } from 'react';
import { LiquidGlass } from '@creativoma/liquid-glass';
import { siteConfig } from '../config/site';

interface Props {
  /** Pasado desde Astro: Astro.url.pathname para marcar el link activo. */
  currentPath: string;
}

const NAV_LINKS = [
  { name: 'Servicios', href: '/servicios' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Precios', href: '/precios' },
  { name: 'Sobre', href: '/sobre-nosotros' },
] as const;

function CatLogo({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.26 6.5 2.26C10.65 5.09 11.32 5 12 5z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M10.5 16.5l1.5 1 1.5-1" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function SunIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

const GLASS_PROPS = {
  backdropBlur: 4,
  tintColor: 'rgba(255, 255, 255, 0.06)',
  displacementScale: 120,
} as const;

// Header pill flotante con liquid glass real (SVG filters via @creativoma/liquid-glass).
// Layout asimétrico: logo + theme toggle a la izquierda, nav + CTA a la derecha.
// Mobile: pill izq con logo, pill der con hamburger; sheet desplegable abajo derecha.
export default function Navigation({ currentPath }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-4 right-4 md:left-6 md:right-6 z-50 flex items-center justify-between gap-3">
      {/* Left pill: logo + toggle */}
      <LiquidGlass as="div" className="rounded-full" {...GLASS_PROPS}>
        <div className="flex items-center gap-2 pl-3 pr-1.5 py-1.5 whitespace-nowrap">
          <a href="/" className="flex items-center gap-2.5 py-1.5 pr-2 shrink-0" aria-label={`${siteConfig.name} — Inicio`}>
            <CatLogo className="w-5 h-5 text-white shrink-0" />
            <span className="text-[15px] font-semibold text-white tracking-tight">{siteConfig.name}</span>
          </a>
          <button
            type="button"
            className="hidden md:inline-flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-colors shrink-0"
            aria-label="Cambiar tema"
          >
            <SunIcon className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </LiquidGlass>

      {/* Right pill desktop: nav + CTA */}
      <LiquidGlass as="div" className="hidden md:block rounded-full" {...GLASS_PROPS}>
        <div className="flex items-center gap-1 pl-3 pr-1.5 py-1.5 whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3.5 py-1.5 text-[13.5px] font-medium tracking-tight transition-colors shrink-0 ${
                currentPath === link.href ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contacto"
            className="ml-3.5 px-5 py-2 bg-white hover:bg-white/95 text-zinc-900 rounded-full text-[13.5px] font-semibold tracking-tight transition-colors shrink-0"
          >
            Comenzar
          </a>
        </div>
      </LiquidGlass>

      {/* Mobile menu trigger pill */}
      <LiquidGlass
        as="button"
        className="md:hidden rounded-full text-white"
        {...GLASS_PROPS}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="nav-menu"
      >
        <span className="inline-flex items-center justify-center p-2.5">
          <MenuIcon />
        </span>
      </LiquidGlass>

      {/* Mobile sheet — alineado a la derecha (donde está el hamburger), ancho ajustado al contenido. */}
      <div
        id="nav-menu"
        className={`md:hidden absolute top-14 right-0 w-fit min-w-[12rem] transition-[opacity,transform] duration-300 ease-out ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <LiquidGlass as="div" className="rounded-3xl" {...GLASS_PROPS}>
          <div className="p-2 space-y-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-2xl text-[14px] font-medium transition-colors ${
                  currentPath === link.href
                    ? 'bg-white/10 text-white'
                    : 'text-white/75 hover:bg-white/8 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contacto"
              className="block mt-2 px-4 py-2.5 bg-white text-zinc-900 rounded-btn text-[14px] font-semibold tracking-tight text-center transition-colors hover:bg-white/95"
            >
              Comenzar
            </a>
          </div>
        </LiquidGlass>
      </div>
    </nav>
  );
}
