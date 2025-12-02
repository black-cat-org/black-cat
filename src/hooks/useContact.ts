import { useMutation } from '@tanstack/react-query';
import { contactService, type ContactFormData } from '../services/contact.service';

export function useContactForm() {
  return useMutation({
    mutationFn: (data: ContactFormData) => contactService.submitContact(data),
    onSuccess: () => {
      console.log('Contact form submitted successfully');
    },
    onError: (error) => {
      console.error('Error submitting contact form:', error);
    },
  });
}
