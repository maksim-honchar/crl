import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    tab: 0,
  },
  reducers: {
    setNav(state, action) {
      state.tab = action.payload;
    },
  },
});

export const { setNav } = navSlice.actions;

export default navSlice.reducer;
