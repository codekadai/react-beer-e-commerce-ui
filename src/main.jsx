import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import ProductListing from "./pages/ProductListing/ProductListing.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import { fetchProducts } from "./api/productListing.js";

const productListingLoader = async () => {
  const products = await fetchProducts();
  return { products };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductListing />,
    loader: productListingLoader,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
