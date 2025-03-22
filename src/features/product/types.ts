export type ProductApi = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export interface Product extends ProductApi {
  favorite: boolean;
}
