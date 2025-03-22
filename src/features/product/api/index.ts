import { axiosClient } from "@/shared/api/axios";
import { ProductApi } from "../types";

export const productApi = {
  getProducts: () => axiosClient.get<ProductApi[]>("/products").then((products) => products.data),
};
