import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormBorelogDataType } from "../types";
// Define a type for the slice state
export interface FormBorelogDataState {
  data: FormBorelogDataType;
  error: string;
  loading: string;
}

// Define the initial state using that type
const initialState: FormBorelogDataState = {
  data: {},
  error: "",
  loading: "idle",
};
const formBorelogSlice = createSlice({
  name: "formBorelog",
  initialState,
  reducers: {
    setState(state, action: PayloadAction<FormBorelogDataType>) {
      state.data = action.payload;
    },
  },
});

export const { setState } = formBorelogSlice.actions;

export default formBorelogSlice.reducer;
