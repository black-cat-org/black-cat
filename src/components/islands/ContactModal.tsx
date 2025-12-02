import { useState, useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { useContactForm } from '../../hooks/useContact';
import { Input } from '../base/Input';
import { TextArea } from '../base/TextArea';
import { Button } from '../base/Button';

export function ContactModal() {
  const { isContactModalOpen, closeContactModal, selectedService } = useAppStore();
  const { mutate: submitContact, isPending, isSuccess } = useContactForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: selectedService || '',
    message: '',
  });

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        closeContactModal();
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      }, 2000);
    }
  }, [isSuccess, closeContactModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isContactModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeContactModal}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Comenzar Proyecto</h2>
            <p className="text-gray-400 text-sm mt-1">
              Cuéntanos sobre tu proyecto y te contactaremos pronto
            </p>
          </div>
          <button
            onClick={closeContactModal}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Nombre completo *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Pérez"
              required
            />
            <Input
              label="Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="juan@empresa.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Teléfono"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+54 9 11 2345-6789"
            />
            <Input
              label="Empresa"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Mi Empresa"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Servicio de interés *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
            >
              <option value="">Selecciona un servicio</option>
              <option value="Desarrollo Web">Desarrollo Web</option>
              <option value="Backend & APIs">Backend & APIs</option>
              <option value="Apps Móviles">Apps Móviles</option>
              <option value="Diseño UI/UX">Diseño UI/UX</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Hosting & SSL">Hosting & SSL</option>
              <option value="Consultoría">Consultoría</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <TextArea
            label="Mensaje *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto, objetivos y timeline..."
            rows={5}
            required
          />

          {isSuccess && (
            <div className="bg-green-600/10 border border-green-600/20 text-green-400 px-4 py-3 rounded-lg">
              ✓ Mensaje enviado correctamente. Te contactaremos pronto.
            </div>
          )}

          <div className="flex gap-4">
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={isPending || isSuccess}
            >
              {isPending ? 'Enviando...' : isSuccess ? '¡Enviado!' : 'Enviar Consulta'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={closeContactModal}
              disabled={isPending}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
