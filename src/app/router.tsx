import { ProductsPage, ProductCreatePage, ProductPage } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/create-product" element={<ProductCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};
