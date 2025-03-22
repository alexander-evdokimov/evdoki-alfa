import { Product, ProductApi } from "../types";

export const mapProduct = (productApi: ProductApi): Product => {
  return {
    ...productApi,
    favorite: false,
  };
};
