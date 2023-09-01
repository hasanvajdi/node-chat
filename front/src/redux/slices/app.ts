import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  spinner: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    changeSpinner: (state, action: PayloadAction<boolean>) => {
      state.spinner = action.payload;
    },
  },
});



export const { changeSpinner } = appSlice.actions;
export default appSlice.reducer;