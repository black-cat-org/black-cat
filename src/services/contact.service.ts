import axios from 'axios';
import { supabase } from '../lib/supabase';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export const contactService = {
  async submitContact(data: ContactFormData) {
    try {
      const { data: response, error } = await supabase
        .from('contacts')
        .insert([
          {
            ...data,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) throw error;
      return response;
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  },

  async sendWhatsAppMessage(phone: string, message: string) {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  },
};
