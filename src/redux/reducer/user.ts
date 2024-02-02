import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice;
({
  name: "user",
  initialState: [{ name: "user 1" }, { name: "name 2" }],
  reducers: {
    login: () => {},
    logout: () => {},
  },
});
