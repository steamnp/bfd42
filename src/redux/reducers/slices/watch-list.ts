import { createSlice } from '@reduxjs/toolkit';

export const watchListSlice = createSlice({
  name: 'watchlist',
  initialState: '',
  reducers: {
    // to add movies to watchlist
    addWatchList() {
      // manage add watch list state
    },
    // remove movie from watchlist
    removeWatchList() {
      // manage remove watch list state
    }
  }
});

export const { addWatchList, removeWatchList } = watchListSlice.actions;
