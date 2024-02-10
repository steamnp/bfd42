import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WatchListItem } from 'src/models';

interface InitialState {
  items: WatchListItem[];
  totalItems: number;
}

const initialState: InitialState = {
  items: [],
  totalItems: 0
};

export const watchListSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    // you can mutate state with redux toolkit
    // mutation of state is against react -> against functional programming
    // to add movies to watchlist
    addWatchList(state, action: PayloadAction<WatchListItem>) {
      // TODO
      // check if item is already in watch list
      // add item only if it is not added previously
      state.items.push(action.payload);
      // TODO
      // also update totalItems
    },
    // remove movie from watchlist
    removeWatchList() {
      // TODO
      // filter
      // find id of the watchlist and remove it
      // manage remove watch list state
    }
  }
});

export const { addWatchList, removeWatchList } = watchListSlice.actions;
