# Home — Services (§2.2)

Decisiones de la sub-sección 2.2 del [`PLAN.md`](./PLAN.md). Sección de servicios en el home: grid de 8 cards con la oferta de Black Cat para soluciones a medida. Es secundaria al posicionamiento principal (línea Black, productos propios).

## 1. Posicionamiento

- Mantener los 8 servicios como showcase de oferta a medida.
- Encuadrar como "también construimos a medida" — no como negocio principal.
- Las tecnologías van en chips compactos (4–7 reconocibles por card), no en el copy.

## 2. Servicios finales

| # | Card | Slug | Icon Lucide | Chips |
|---|---|---|---|---|
| 1 | Frontend | `/servicios/desarrollo-web` | `code-2` | React · Next.js · Astro · TypeScript · Tailwind |
| 2 | Backend & Data | `/servicios/backend-apis` | `database` | NestJS · GraphQL · PostgreSQL · REST · Supabase · Firebase · MongoDB |
| 3 | Mobile | `/servicios/apps-moviles` | `smartphone` | Swift · Kotlin · React Native · Flutter · Expo |
| 4 | IA & Automatización | `/servicios/ia` *(crear en §3.2)* | `sparkles` | OpenAI · Claude · Gemini · RAG · Agentes |
| 5 | E-commerce | `/servicios/ecommerce` | `shopping-bag` | Shopify · WooCommerce · Stripe · Custom |
| 6 | Infraestructura & DevOps | `/servicios/infraestructura` | `cloud` | AWS · Cloudflare · Vercel · Docker · Kubernetes |
| 7 | Analytics & Data | `/servicios/analytics` *(crear en §3.2)* | `bar-chart-3` | PostHog · BigQuery · GA4 · Dashboards |
| 8 | Soporte & Consultoría | `/servicios/soporte-tecnico` | `life-buoy` | Suscripciones · Cobros & reembolsos · Mantenimiento · Soporte continuo |

### Copy 1-línea por card

1. **Frontend**: "Sitios y aplicaciones rápidas, modernas y optimizadas para SEO."
2. **Backend & Data**: "Sistemas robustos que escalan con tu producto. APIs, tiempo real, datos."
3. **Mobile**: "Apps nativas y multiplataforma para iOS y Android."
4. **IA & Automatización**: "Productos y procesos potenciados con IA. Agentes, chatbots, automatización."
5. **E-commerce**: "Tiendas online listas para vender. Pasarelas, suscripciones, catálogos."
6. **Infraestructura & DevOps**: "Despliegue, escalado y observabilidad. Cloud que no se cae."
7. **Analytics & Data**: "Dashboards y métricas que muestran lo que importa."
8. **Soporte & Consultoría**: "Soporte continuo después del lanzamiento. Mantenimiento, cobros, ajustes."

## 3. Diseño visual

- **Cards**: glass sutil — `bg-white/4` + `backdrop-blur(12px)` + `border-white/8`. Coherente con el navbar pero más sutil.
- **Iconos**: Lucide outline SVG inline (cero emojis), `stroke-width: 1.5`, color `text-purple-400`.
- **Tech chips**: `bg-purple-600/10 text-purple-400 rounded-md text-xs`, mismo estilo que ya estaba.
- **CTA del card**: texto-link "Ver más →" en lugar de "Consultar →" (más neutro). La card entera es link (cursor pointer en toda el área).
- **Layout**: grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` (mantener actual).
- **Padding**: `p-6` (mantener actual).
- **Border radius**: `rounded-2xl`.

## 4. Animaciones

- **Stagger fade-up al scroll**: cada card aparece con delay `--card-i * 80ms` cuando entra al viewport (IntersectionObserver, threshold 0.2).
- **Hover**: lift sutil (`translate-y-[-4px]`) + borde más visible (`border-white/15`) + box-shadow ligero. **Sin cambio de color de fondo** (decisión del usuario).
- **`prefers-reduced-motion`**: cards visibles sin animación de entrada, sin lift.

## 5. Header de la sección

- **h2**: "Software a medida"
- **Sub-copy**: "Cuando necesitas algo único, lo construimos. Estos son nuestros pilares técnicos."
- Encuadra los servicios como complemento a los productos (línea Black) — no como negocio principal.

## 6. Sub-pages relacionadas

| Estado | Slug | Acción |
|---|---|---|
| Existe ✅ | `/servicios/desarrollo-web` | Pulir en §3.2 |
| Existe ✅ | `/servicios/backend-apis` | Pulir en §3.2 |
| Existe ✅ | `/servicios/apps-moviles` | Pulir en §3.2 |
| Falta crear ⏳ | `/servicios/ia` | Crear en §3.2 |
| Existe ✅ | `/servicios/ecommerce` | Pulir en §3.2 |
| Existe ✅ | `/servicios/infraestructura` | Pulir en §3.2 |
| Falta crear ⏳ | `/servicios/analytics` | Crear en §3.2 |
| Existe ✅ | `/servicios/soporte-tecnico` | Pulir en §3.2 |
| Obsoleta ❌ | `/servicios/diseno-uiux` | Borrar en §3.2 (Diseño UI/UX no se ofrece como servicio standalone) |
| Obsoleta ❌ | `/servicios/hosting-ssl` | Borrar en §3.2 (fusionado en Infra & DevOps) |

Mientras tanto, los cards del home linkean a los slugs nuevos (`/ia`, `/analytics`) — esas URLs darán 404 hasta que las creemos.

## 7. Out of scope para esta sección

- Pulido de las 8 sub-pages individuales — va en §3.2.
- Refactor del overview `/servicios.astro` para coincidir con el nuevo set — va en §3.1.
- Creación de las 2 sub-pages nuevas (IA, Analytics) — va en §3.2.
- Borrado de las 2 obsoletas (Diseño, Hosting) — va en §3.2.
