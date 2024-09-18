import { RouteObject } from "react-router-dom";

import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produto",
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
