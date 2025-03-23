export const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT: (productId: string | number) => `/products/${productId}`,
  PRODUCT_CREATE: "/create-product",
} as const;
