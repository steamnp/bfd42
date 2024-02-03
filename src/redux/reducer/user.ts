import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: () => {},
  },
})

// We will use action from View (UI or Component)
export const { increment, decrement } = userSlice.actions

// We need to link below reducer to store
const userReducer = userSlice.reducer
export default userReducer
