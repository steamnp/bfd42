import { configureStore } from '@reduxjs/toolkit';
import { movieDBAPI } from '../reducers';
import { watchListSlice } from '../reducers/slices/watch-list';

const store = configureStore({
  reducer: {
    [movieDBAPI.reducerPath]: movieDBAPI.reducer,
    watchList: watchListSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieDBAPI.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
