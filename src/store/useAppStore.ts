import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  isContactModalOpen: boolean;
  selectedService: string | null;
  toggleMenu: () => void;
  openContactModal: (service?: string) => void;
  closeContactModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  isContactModalOpen: false,
  selectedService: null,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  openContactModal: (service) => set({ isContactModalOpen: true, selectedService: service || null }),
  closeContactModal: () => set({ isContactModalOpen: false, selectedService: null }),
}));
