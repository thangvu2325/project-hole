// Layouts

// Pages
import { lazy } from "react";
import { RouteType } from "../types";
import routes from "../config/route";
const Home = lazy(() => import("../pages/Home"));
const PilePlan = lazy(() => import("../pages/PilePlan"));

// Public routes

const publicRoutes: Array<RouteType> = [
  { path: routes.homepage, component: Home },
  { path: routes.pilePlan, component: PilePlan },
];
const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
