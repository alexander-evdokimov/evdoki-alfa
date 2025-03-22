import { useState } from "react";
import { ProductFilter } from "./constants";
import { useProductStore } from "./store";

export const useProductFilters = (filter: ProductFilter) => {
  const { products } = useProductStore();
  const [productFilter, setProductFilter] = useState(filter);

  const filtredProducts =
    productFilter === "FAVORITE" ? products.filter((p) => p.favorite) : products;

  return {
    filtredProducts,
    setProductFilter,
  };
};
