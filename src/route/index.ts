// Layouts

// Pages
import { lazy } from "react";
import { RouteType } from "../types";
import routes from "../config/route";
const Home = lazy(() => import("../pages/Home"));
const PilePlan = lazy(() => import("../pages/PilePlan"));
const boreLosg = lazy(() => import("../pages/BoreLogs"));

// Public routes

const publicRoutes: Array<RouteType> = [
  { path: routes.homepage, component: Home },
  { path: routes.pilePlan, component: PilePlan },
  { path: routes.boreLosg, component: boreLosg },
];
const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
