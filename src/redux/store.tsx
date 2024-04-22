import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import searchReducer from "./reducers/searchReducer";
import loginReducer from "./reducers/loginReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
