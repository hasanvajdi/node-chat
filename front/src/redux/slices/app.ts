import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  spinner: false,
  selectedChat: null
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    changeSpinner: (state, action: PayloadAction<boolean>) => {
      state.spinner = action.payload;
    },
    changeSelectedChat: (state, action: PayloadAction<any>)=>{
      state.selectedChat = action.payload
    }
  },
});



export const { changeSpinner, changeSelectedChat } = appSlice.actions;
export default appSlice.reducer;