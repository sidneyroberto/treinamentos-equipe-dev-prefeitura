import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Show from "../pages/Show";
import NotFound from "../pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/show",
    element: <Show />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
