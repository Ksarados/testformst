import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Product } from '@/types/data';

type ProductStore = {
  product: Product | null;
  setProduct: (product: Product | null) => void;
  resProduct: () => void;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      product: null,
      setProduct: (product) => set({ product }),
      resProduct: () => set({ product: null }),
    }),
    {
      name: 'registration',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
