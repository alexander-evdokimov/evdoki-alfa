import { type Product, type ProductCreate } from "./../types";
import { create } from "zustand";
import { productApi } from "../api";
import { mapProduct } from "./mappers";
import { ProductFilter } from "./constants";

interface ProductStoreState {
  products: Product[];
  filter: ProductFilter;
  loading: boolean;
  error?: Error | string;
}

interface ProductStoreActions {
  getProducts: () => Promise<void>;
  toggleFavorite: (id: number) => void;
  remove: (id: number) => void;
  setFilter: (filter: ProductFilter) => void;
  createProduct: (product: ProductCreate) => Promise<void>;
}

type ProductStore = ProductStoreState & ProductStoreActions;

export const useProductStore = create<ProductStore>()((set) => ({
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
  createProduct: async (product: ProductCreate) => {
    try {
      set({ loading: true, error: undefined });
      const createdProductApi = await productApi.createProduct(product);
      console.log(createdProductApi);

      const createdProduct = mapProduct(createdProductApi);
      set((state) => ({ products: [createdProduct, ...state.products], loading: false }));
    } catch (error) {
      set({ error: "Ошибка", loading: false });
    }
  },
}));
