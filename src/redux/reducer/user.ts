import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: [{ name: 'user 1' }, { name: 'name 2' }],
  reducers: {
    // method (function) 1
    login: () => {},

    // method (function) 2
    logout: () => {},
    // method (function) 3
    // method (function) 4
  },
})

// We will use action from View (UI or Component)
export const { login, logout } = userSlice.actions

// We need to link below reducer to store
export default userSlice.reducer
