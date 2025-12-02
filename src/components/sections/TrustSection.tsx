const technologies = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'Astro', color: 'from-orange-400 to-pink-500' },
  { name: 'NestJS', color: 'from-red-500 to-pink-600' },
  { name: 'Flutter', color: 'from-blue-400 to-cyan-500' },
  { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
  { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
  { name: 'TailwindCSS', color: 'from-cyan-400 to-teal-500' },
  { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-700' },
  { name: 'MongoDB', color: 'from-green-500 to-emerald-600' },
  { name: 'AWS', color: 'from-orange-500 to-amber-600' },
  { name: 'Docker', color: 'from-blue-500 to-blue-600' },
  { name: 'Vercel', color: 'from-gray-900 to-black' },
];

export function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-2">TECNOLOGÍAS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stack tecnológico moderno
          </h2>
        </div>

        {/* Tech Stack Marquee */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex gap-8 animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg"
              >
                <span
                  className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent whitespace-nowrap`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-400">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-400">Proyectos entregados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              99%
            </div>
            <div className="text-gray-400">Uptime garantizado</div>
          </div>
        </div>
      </div>
    </section>
  );
}
