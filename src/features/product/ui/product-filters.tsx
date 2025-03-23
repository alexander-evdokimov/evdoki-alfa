import React from "react";
import { useProductStore } from "../model";
import { productFilters } from "../model/constants";
import { cn } from "@/shared";

interface Props {
  className?: string;
}

export const ProductFilters: React.FC<Props> = ({ className }) => {
  const { filter, setFilter } = useProductStore();

  return (
    <div className={cn("flex gap-4", className)}>
      {productFilters.map((productFilter, index) => (
        <>
          <button
            className={cn(
              "cursor-pointer",
              filter === productFilter.value && "text-indigo-500 pointer-events-none"
            )}
            onClick={() => setFilter(productFilter.value)}
          >
            {productFilter.name}
          </button>
          {index + 1 !== productFilters.length && "|"}
        </>
      ))}
    </div>
  );
};
