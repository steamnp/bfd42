import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [{ name: "user 1" }, { name: "user 2" }],
  reducers: {
    //method (functoin) 1
    login: () => {},

    //method (functoin) 2
    logout: () => {},

    //method (functoin) 3
    //method (functoin) 4
  },
});

// we will use action from view (UI or Component)
export const { login, logout } = userSlice.actions;

// we need to link reducer to store
const userReducer = userSlice.reducer;
export default userReducer;
