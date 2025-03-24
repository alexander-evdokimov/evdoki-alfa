import { useProductStore } from "@/features/product";
import { BackLink, Heading } from "@/shared";
import { ROUTES } from "@/shared/constants";
import { cn } from "@shared/utils";
import React from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
  className?: string;
}

export const Product: React.FC<Props> = ({ className }) => {
  const { id } = useParams();
  const { products } = useProductStore();

  // const { loading, product, errors, submit } = useApi(() => productApi.getProduct(id!));

  // useEffect(() => {
  //   submit();
  // }, [id]);

  const product = products.find((product) => product.id == Number(id));

  if (!product) {
    return (
      <div className={cn("container py-10")}>
        Товар не найден не найден.{" "}
        <Link className="text-indigo-500 underline underline-offset-3" to={ROUTES.PRODUCTS}>
          Вернуться назад
        </Link>
      </div>
    );
  }

  return (
    <div className={cn("container py-10", className)}>
      <BackLink label="Вернуться назад" to={ROUTES.PRODUCTS} />

      {product && (
        <>
          <div className="mb-10 flex flex-col max-xl:text-center max-xl:items-center">
            <Heading className="max-w-[1000px] max-xl:max-w-[600px] uppercase font-extrabold tracking-tight pt-5">
              {product?.title}
              <div className="text-nowrap text-xl max-xl:text-base align-top text-gray-600">
                {product?.category}
              </div>
            </Heading>
          </div>

          <div>
            <div className="flex justify-between max-xl:flex-col max-xl:items-center">
              <div className="flex justify-center max-w-[50%] max-h-[400px] w-full">
                <img
                  className="max-w-[50%] max-xl:w-[300px] max-xl:max-w-[100%] object-contain"
                  src={product?.image}
                />
              </div>

              <div className="max-w-[600px] w-full mt-10">
                <div className="text-4xl max-xl:text-2xl font-bold text-red-600 mb-5 max-xl:mb-2.5">
                  <span>Price</span> <span>{product?.price}$</span>
                </div>
                <div className="text-xl max-xl:text-base">
                  <span className="text-gray-500">{product?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {loading && "Загрузка..."}
      {errors && errors[0]} */}
    </div>
  );
};
