// Layouts

// Pages
import { lazy } from "react";
import { RouteType } from "../types";
import routes from "../config/route";
const Home = lazy(() => import("../pages/Home"));

// Public routes

const publicRoutes: Array<RouteType> = [
  { path: routes.homepage, component: Home },
];
const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
