import { axiosClient } from "@/shared/api/axios";
import { ProductCreate, ProductApi } from "../types";

export const productApi = {
  getProducts: () => axiosClient.get<ProductApi[]>("/products").then((products) => products.data),
  getProduct: (id: string) =>
    axiosClient.get<ProductApi>(`/products/${id}`).then((product) => product.data),
  createProduct: (product: ProductCreate) =>
    axiosClient.post<ProductApi>("/products", product).then((product) => product.data),
};
