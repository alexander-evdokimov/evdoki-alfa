import React from "react";
import { cn } from "@/shared/utils";
import { Heart, Trash, Trash2 } from "lucide-react";

interface Props {
  className?: string;
  title: string;
  price: number;
  image: string;
  favorite: boolean;
  toggleFavorite: (e: React.MouseEvent) => void;
  remove: (e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<Props> = ({
  className,
  title,
  price,
  image,
  favorite,
  toggleFavorite,
  remove,
}) => {
  return (
    <article
      className={cn(
        "flex flex-col justify-start gap-2 bg-white shadow-md rounded-md p-5 relative",
        className
      )}
    >
      <button onClick={toggleFavorite} className="absolute top-3 right-3 p-1.5 cursor-pointer">
        <Heart className={cn(favorite && "text-red-600 fill-red-600")} />
      </button>

      <button className="absolute top-3 left-3 p-1.5 cursor-pointer" onClick={remove}>
        <Trash2 />
      </button>

      <div className="w-full h-[250px]">
        <img className="w-full h-full object-contain" src={image} />
      </div>

      <div className="flex flex-col">
        <h3 className="flex-1 font-bold text-base line-clamp-2 text-ellipsis overflow-x-hidden">
          {title}
        </h3>
        <div className="font-medium text-xl text-red-600">{price}$</div>
      </div>
    </article>
  );
};
