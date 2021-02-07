import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", login: "создать пользователя" },
  {
    id: "1",
    lastName: "Гончар",
    firstName: "Максим",
    patronymic: "Валериевич",
    position: "front-end dev",
    phone: "0000000",
    login: "sp2363",
    password: "qwerty",
  },
];

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
