import { Card } from '../base/Card';
import { Button } from '../base/Button';
import { useAppStore } from '../../store/useAppStore';

const services = [
  {
    icon: '⚛️',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas con React, Astro y Next.js. Rápidas, escalables y optimizadas para SEO.',
    technologies: ['React', 'Astro', 'Next.js', 'TypeScript'],
  },
  {
    icon: '🚀',
    title: 'Backend & APIs',
    description: 'Arquitecturas robustas con NestJS, Node.js y bases de datos SQL/NoSQL. APIs REST y GraphQL.',
    technologies: ['NestJS', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: '📱',
    title: 'Apps Móviles',
    description: 'Desarrollo nativo y multiplataforma con Flutter y React Native. Experiencias fluidas en iOS y Android.',
    technologies: ['Flutter', 'React Native', 'iOS', 'Android'],
  },
  {
    icon: '🎨',
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas. Diseño centrado en el usuario con Figma y herramientas modernas.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
  },
  {
    icon: '☁️',
    title: 'Infraestructura',
    description: 'Despliegue y gestión en AWS, Vercel, Railway. CI/CD, Docker, Kubernetes y arquitectura cloud.',
    technologies: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Tiendas virtuales completas con pasarelas de pago, gestión de inventario y paneles administrativos.',
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'MercadoPago'],
  },
  {
    icon: '🔒',
    title: 'Hosting & SSL',
    description: 'Hosting optimizado, certificados SSL, CDN global y monitoreo 24/7 para máxima disponibilidad.',
    technologies: ['SSL', 'CDN', 'Monitoring', 'Security'],
  },
  {
    icon: '🛠️',
    title: 'Soporte Técnico',
    description: 'Mantenimiento continuo, actualizaciones, optimización y soporte personalizado para tu proyecto.',
    technologies: ['Maintenance', 'Updates', 'Optimization', 'Support'],
  },
];

export function Services() {
  const openContactModal = useAppStore((state) => state.openContactModal);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para hacer crecer tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover>
              <div className="space-y-4">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-purple-600/10 text-purple-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-4"
                  onClick={() => openContactModal(service.title)}
                >
                  Consultar →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
