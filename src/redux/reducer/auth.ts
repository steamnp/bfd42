import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { userName: "", password: "" },
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

export const { login, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
