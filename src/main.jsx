import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // showing home page here
  },
  {
    path: "/products",
    element: <ProductPage />, // product page
  },
  {
    path: "*",
    element: <NotFoundPage />, // product page
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
