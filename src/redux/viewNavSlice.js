import { createSlice } from "@reduxjs/toolkit";

export const viewNavSlice = createSlice({
  name: "view_nav",
  initialState: {
    isView: true,
  },
  reducers: {
    setViewNav(state, action) {
      state.isView = action.payload;
    },
  },
});

export const { setViewNav } = viewNavSlice.actions;

export default viewNavSlice.reducer;
