import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash.throttle";
import { saveState } from "../sessionStorage";

import usersReducer from "./usersSlice";
import navReducer from "./navSlice";
import viewNavReducer from "./viewNavSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    nav: navReducer,
    view_nav: viewNavReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      users: store.getState().users,
    });
  }, 1000)
);

export default store;
