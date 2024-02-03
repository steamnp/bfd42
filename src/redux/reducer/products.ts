import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: () => {},
    displayProducts: () => {},
  },
})

// We will use action from View (UI or Component)
export const { addProduct, displayProducts } = productsSlice.actions

// We need to link below reducer to store
const productsReducer = productsSlice.reducer
export default productsReducer
