import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "login",
  initialState: {
    name: "",
    email: "",
    password: "",
    access: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAccess: (state, action) => {
      state.access = action.payload;
    },
  },
});

export const { setEmail, setAccess, setName, setPassword } = slice.actions;
export default slice.reducer;
