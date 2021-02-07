import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: 0,
  reducers: {
    addCurrentUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
