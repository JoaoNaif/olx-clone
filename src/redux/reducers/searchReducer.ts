import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "search",
  initialState: {
    status: "",
  },
  reducers: {
    setSearchStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setSearchStatus } = slice.actions;
export default slice.reducer;
