import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/user'
import authReducer from '../reducer/auth'
import productsReducer from '../reducer/products'

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    products: productsReducer,
  },
})

export default store