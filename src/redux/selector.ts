import { PilePlansState } from "./pileplansSlice";
import { ProjectsState } from "./projectsSlice";
import { RootState } from "./store";

export const projectsSelector = (state: RootState): ProjectsState =>
  state.projects;

export const pileplansSelector = (state: RootState): PilePlansState =>
  state.pileplans;
