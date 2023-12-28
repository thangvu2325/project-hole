// Layouts

// Pages
import { RouteType } from "../types";
import routes from "../config/route";
import Home from "../pages/Home";
import ProjectPage from "../pages/Project";
import PilePlanPage from "../pages/PilePlan";
import BoreLog from "../pages/BoreLogs";
import ProfilePage from "../pages/Profile";
import SettingsPage from "../pages/Settings";
// const Home = lazy(() => import("../pages/Home"));
// const PilePlan = lazy(() => import("../pages/PilePlan"));
// const boreLosg = lazy(() => import("../pages/BoreLogs"));
// const ProjectPage = lazy(() => import("../pages/Project"));
// const ProfilePage = lazy(() => import("../pages/Profile"));
// const SettingsPage = lazy(() => import("../pages/Settings"));

// Public routes

const publicRoutes: Array<RouteType> = [
  { path: routes.homepage, component: Home },
  { path: routes.project, component: ProjectPage },
  { path: routes.pilePlan, component: PilePlanPage },
  { path: routes.boreLosg, component: BoreLog },
  { path: routes.profile, component: ProfilePage },
  { path: routes.settings, component: SettingsPage },
  { path: "*", component: Home },
];
const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
