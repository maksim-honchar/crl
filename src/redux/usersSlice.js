import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", login: "new user" },
  {
    id: "1",
    lastName: "Honchar",
    firstName: "Maksym",
    patronymic: "Valerievich",
    position: "employer",
    phone: "0956771207",
    login: "sp2363",
    password: "qwerty",
  },
];

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
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

export const { userAdd } = slice.actions;

export default slice.reducer;
