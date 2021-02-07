import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import navReducer from "./navSlice";
import viewNavReducer from "./viewNavSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    nav: navReducer,
    view_nav: viewNavReducer,
  },
});
