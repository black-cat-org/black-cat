import { Card } from '../base/Card';

const projects = [
  {
    title: 'E-commerce Premium',
    category: 'Tienda Virtual',
    description: 'Plataforma de comercio electrónico con integración de múltiples pasarelas de pago y panel administrativo completo.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'App de Gestión',
    category: 'Aplicación Móvil',
    description: 'Aplicación móvil multiplataforma para gestión de equipos y proyectos con sincronización en tiempo real.',
    tech: ['Flutter', 'Firebase', 'REST API'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Dashboard Analytics',
    category: 'Web App',
    description: 'Panel de control con visualización de datos en tiempo real y reportes personalizables para métricas de negocio.',
    tech: ['React', 'D3.js', 'NestJS'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Landing SaaS',
    category: 'Website',
    description: 'Landing page de alto rendimiento con animaciones fluidas y optimización SEO para producto SaaS B2B.',
    tech: ['Astro', 'TailwindCSS', 'Vercel'],
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold mb-2">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Casos de éxito que transformaron negocios
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hover>
              <div className="space-y-4">
                {/* Gradient Header */}
                <div className={`h-48 rounded-lg bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}>
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.substring(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-purple-600/10 text-purple-400 text-xs font-semibold rounded-full">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
