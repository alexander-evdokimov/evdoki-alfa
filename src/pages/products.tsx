import {
  ProductCard,
  ProductFilters,
  useFiltredProducts,
  useProductStore,
} from "@/features/product";
import { ROUTES } from "@/shared/constants";
import { cn } from "@shared/utils";
import { Button } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  const { loading, error, getProducts, toggleFavorite, remove } = useProductStore();

  const filtredProducts = useFiltredProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const handleToggleFavorite = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    toggleFavorite(id);
  };

  const handleRemove = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    remove(id);
  };

  return (
    <div className={cn("container py-10", className)}>
      <div className="flex justify-between mb-10">
        <Link to={ROUTES.PRODUCT_CREATE}>
          <Button type="primary">Добавить товар</Button>
        </Link>
        <ProductFilters />
      </div>
      <ul className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(278px,1fr))]">
        {filtredProducts.map((product) => (
          <Link key={product.id} to={ROUTES.PRODUCT(product.id)} className="cursor-pointer">
            <ProductCard
              className="h-[380px] max-w-[340px] w-full place-self-center hover:shadow-xs transition-shadow duration-300"
              key={product.id}
              favorite={product.favorite}
              image={product.image}
              price={product.price}
              title={product.title}
              toggleFavorite={(e) => handleToggleFavorite(e, product.id)}
              remove={(e) => handleRemove(e, product.id)}
            />
          </Link>
        ))}
      </ul>
      {loading && "Загрузка..."}
      {error && error.toString()}
    </div>
  );
};
