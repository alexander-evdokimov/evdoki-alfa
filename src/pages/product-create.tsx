import { ProductCreateForm } from "@/features/product";
import { BackLink, Heading } from "@/shared";
import { ROUTES } from "@/shared/constants";
import { cn } from "@shared/utils";
import React from "react";

interface Props {
  className?: string;
}

export const ProductCreate: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("container py-10", className)}>
      <BackLink label="Вернуться назад" to={ROUTES.PRODUCTS} />
      <div className="flex flex-col items-center">
        <Heading className="py-10 font-bold">Добавление продукта</Heading>
        <ProductCreateForm />
      </div>
    </div>
  );
};
