import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: 0,
  reducers: {
    increment: (state) => +1,
    decrement: (state) => -1,
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
