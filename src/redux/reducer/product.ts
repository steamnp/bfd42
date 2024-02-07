import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: () => {},
    displayProducts: () => {},
  },
});

export const { addProduct, displayProducts } = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
