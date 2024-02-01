import { create } from 'zustand';

interface useManualIterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useManual = create<useManualIterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useManual;
