import { ProductFilter } from "./constants";
import { useProductStore } from "./store";
import { Product } from "../types";

export const useFiltredProducts = () => {
  const { products, filter } = useProductStore();

  const applyFilter = (products: Product[], filter: ProductFilter): Product[] => {
    return filter === "FAVORITE" ? products.filter((p) => p.favorite) : products;
  };

  const filtredProducts = applyFilter(products, filter);

  return filtredProducts;
};
