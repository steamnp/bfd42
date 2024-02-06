import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { userName: "", password: "" },
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

// We will use action from View (UI or Component)
export const { login, logout } = authSlice.actions;

// We need to link below reducer to store
const authReducer = authSlice.reducer;
export default authReducer;
