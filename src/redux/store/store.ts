import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/user";
import authReducer from "../reducer/auth";
import productsReducer from "../reducer/product";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    products: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
