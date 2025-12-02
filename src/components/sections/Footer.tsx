import { Button } from '../base/Button';
import { useAppStore } from '../../store/useAppStore';

const services = [
  'Desarrollo Web',
  'Backend & APIs',
  'Apps Móviles',
  'Diseño UI/UX',
  'E-commerce',
  'Hosting & SSL',
];

const social = [
  { name: 'GitHub', icon: '⚡', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'Instagram', icon: '📸', url: '#' },
];

export function Footer() {
  const openContactModal = useAppStore((state) => state.openContactModal);

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para iniciar tu proyecto?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Hablemos de cómo podemos ayudarte a alcanzar tus objetivos digitales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => openContactModal()}
            >
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
              className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🐈‍⬛</div>
              <span className="text-2xl font-bold text-white">Black Cat</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Desarrollo web premium con tecnologías de vanguardia. Transformamos ideas en experiencias digitales de alto impacto.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={item.name}
                >
                  <span className="text-xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => openContactModal(service)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@blackcat.dev</li>
              <li>📱 +54 9 11 2345-6789</li>
              <li>📍 Buenos Aires, Argentina</li>
              <li>🕐 Lun - Vie: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Black Cat. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
