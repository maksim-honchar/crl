import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import currentUserReducer from "./currentUserSlice";
import navReducer from "./navSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    // currentUser: currentUserReducer,
    nav: navReducer,
  },
});
