import { createSlice } from "@reduxjs/toolkit";
import { ProjectType } from "../types";
// Define a type for the slice state
export interface ProjectsState {
  data: ProjectType[];
  error: string;
  loading: string;
}

// Define the initial state using that type
const initialState: ProjectsState = {
  data: [
    {
      projectId: "1",
      project_name: "Shin Hi Tower",
      project_status: "Process",
      project_date: "23/12/2023",
    },
    {
      projectId: "2",
      project_name: "Hong Kong Building",
      project_status: "Done",
      project_date: "23/12/2023",
    },
  ],
  error: "",
  loading: "idle",
};
export const projectsSlice = createSlice({
  name: "projects",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const {  } = projectsSlice.actions;

export default projectsSlice.reducer;
