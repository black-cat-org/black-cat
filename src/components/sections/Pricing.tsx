import { Card } from '../base/Card';
import { Button } from '../base/Button';
import { useAppStore } from '../../store/useAppStore';

const plans = [
  {
    name: 'Starter',
    price: '599',
    description: 'Ideal para landing pages y sitios web básicos',
    features: [
      'Hasta 5 páginas',
      'Diseño responsive',
      'SEO básico',
      'Formulario de contacto',
      'Hosting incluido (1 año)',
      'SSL gratuito',
      'Soporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '1,499',
    description: 'Para aplicaciones web completas y e-commerce',
    features: [
      'Páginas ilimitadas',
      'Diseño personalizado',
      'SEO avanzado',
      'Panel administrativo',
      'Integración de pagos',
      'API REST personalizada',
      'Hosting premium (1 año)',
      'SSL + CDN',
      'Soporte prioritario',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Soluciones empresariales a medida',
    features: [
      'Todo de Professional',
      'Aplicación móvil',
      'Arquitectura escalable',
      'CI/CD automatizado',
      'Múltiples integraciones',
      'Testing automatizado',
      'Documentación completa',
      'Soporte 24/7',
      'Consultoria técnica',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const openContactModal = useAppStore((state) => state.openContactModal);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold mb-2">PRECIOS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Planes para cada necesidad
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Inversión transparente con resultados garantizados
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                  Más Popular
                </div>
              )}
              <Card
                hover
                className={plan.highlighted ? 'border-purple-600 shadow-xl shadow-purple-900/20' : ''}
              >
                <div className="space-y-6">
                  {/* Plan Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400 text-lg">$</span>
                    )}
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-400">USD</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => openContactModal(plan.name)}
                  >
                    {plan.price === 'Custom' ? 'Contactar' : 'Comenzar'}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            ¿Necesitas algo específico?{' '}
            <button
              onClick={() => openContactModal()}
              className="text-purple-400 hover:text-purple-300 font-semibold underline"
            >
              Hablemos de tu proyecto
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
