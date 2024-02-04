import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [{ name: "user 1" }, { name: "user 2" }],
  reducers: {
    login: () => {},
    logout: () => {},
    //method (functoin) 1
    //method (functoin) 2
    //method (functoin) 3
    //method (functoin) 4
  },
});

// we will use action from view (UI or Component)
export const { login, logout } = userSlice.actions;

// we need to link reducer to store
export default userSlice.reducer;
