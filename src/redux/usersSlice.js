import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", login: "new user" },
  {
    id: "1",
    lastName: "Honchar",
    firstName: "Maksym",
    patronymic: "Valerievich",
    position: "front-end dev",
    phone: "0931952284",
    login: "sp2363",
    password: "qwerty",
  },
];

export const slice = createSlice({
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

export const { userAdd, userEdit } = slice.actions;

export default slice.reducer;
