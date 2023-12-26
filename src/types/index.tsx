import { ComponentType, FunctionComponent } from "react";
export type RouteType = {
  path: string;
  component: ComponentType;
  layout?: FunctionComponent<{ children: React.ReactNode }>;
};
