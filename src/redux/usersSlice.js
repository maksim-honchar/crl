import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadState } from "../sessionStorage";

const persistedState = loadState();

let initialState;

persistedState
  ? (initialState = persistedState.users.filter(
      (user) => user.login !== "создать пользователя"
    ))
  : (initialState = [{ id: "0", login: "создать пользователя" }]);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userEdit(state, action) {
      const {
        id,
        lastName,
        firstName,
        patronymic,
        position,
        phone,
        login,
        password,
      } = action.payload;
      const currentUser = state.find((user) => user.id === id);
      if (currentUser) {
        currentUser.lastName = lastName;
        currentUser.firstName = firstName;
        currentUser.patronymic = patronymic;
        currentUser.position = position;
        currentUser.phone = phone;
        currentUser.login = login;
        currentUser.password = password;
      }
    },
    userAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        lastName,
        firstName,
        patronymic,
        position,
        phone,
        login,
        password
      ) {
        return {
          payload: {
            id: nanoid(),
            lastName,
            firstName,
            patronymic,
            position,
            phone,
            login,
            password,
          },
        };
      },
    },
  },
});

export const { userAdd, userEdit } = usersSlice.actions;

export default usersSlice.reducer;
