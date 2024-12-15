import { lazy } from "react";

import LayoutPage from "./pages/_layout";

const Index = lazy(() => import("./pages/index"));
const Ordering = lazy(() => import("./pages/ordering/index"));
const Quantity = lazy(() => import("./pages/ordering/quantity/index"));
const ProductsIndex = lazy(() => import("./pages/products/index"));
const ProductsId = lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/ordering", element: <Ordering /> },
      { path: "/ordering/quantity", element: <Quantity /> },
      { path: "/products", element: <ProductsIndex /> },
      { path: "/products/:id", element: <ProductsId /> }
    ]
  }
];

export const pages = [
  { route: "/" },
  { route: "/products" },
  { route: "/products/:id" }
];
