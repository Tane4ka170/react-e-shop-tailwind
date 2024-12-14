import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./ui/Layout.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Category from "./pages/Category.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import Favorite from "./pages/Favorite.jsx";
import Orders from "./pages/Orders.jsx";

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter({
  path: "/",
  element: <RouterLayout />,
  children: {
    path: "/",
    element: <App />,
  },
  children: {
    path: "/product",
    element: <Product />,
  },
  children: {
    path: "/product/:id",
    element: <Product />,
  },
  children: {
    path: "/category",
    element: <Category />,
  },
  children: {
    path: "/category/:id",
    element: <Category />,
  },
  children: {
    path: "/profile",
    element: <Profile />,
  },
  children: {
    path: "/cart",
    element: <Cart />,
  },
  children: {
    path: "/favorite",
    element: <Favorite />,
  },
  children: {
    path: "/orders",
    element: <Orders />,
  },
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
