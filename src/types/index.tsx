import { ComponentType, FunctionComponent } from "react";
export type RouteType = {
  path: string;
  component: ComponentType;
  layout?: FunctionComponent<{ children: React.ReactNode }>;
};
export type ProjectType = {
  projectId: string;
  project_name: string;
  project_status: "Done" | "Process";
  project_date: string;
};
export type PilePlanType = {
  projectId: string;
  pileId: string;
  pile_location: string;
  pile_status: "Completed" | "Not started";
  pile_diameter: string;
  pile_raked: "Vertical" | "Horizon";
};
