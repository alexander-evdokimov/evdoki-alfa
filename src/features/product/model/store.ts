import { type Product } from "./../types";
import { create } from "zustand";
import { productApi } from "../api";
import { mapProduct } from "./mappers";
import { ProductFilter } from "./constants";

interface ProductState {
  products: Product[];
  filter: ProductFilter;
  loading: boolean;
  error?: Error | string;
  getProducts: () => Promise<void>;
  toggleFavorite: (id: number) => void;
  remove: (id: number) => void;
  setFilter: (filter: ProductFilter) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  loading: true,
  filter: "ALL",
  setFilter: (filter) =>
    set({
      filter,
    }),
  remove: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  toggleFavorite: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, favorite: !product.favorite } : product
      ),
    })),
  getProducts: async () => {
    try {
      set({ loading: true, error: undefined });
      const products = (await productApi.getProducts()).map(mapProduct);
      set({ products, loading: false });
    } catch (error) {
      set({ error: "Ошибка", loading: false });
    }
  },
}));
