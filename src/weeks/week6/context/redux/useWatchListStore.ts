import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stonk } from '../../types/types';

interface WatchListState {
  value: Stonk[];
}

const initialState: WatchListState = {
  value: [],
}

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<Stonk>) => {
      if (!state.value.includes(action.payload)) {
        state.value = [...state.value, action.payload];
      }
    },
    removeFromWatchList: (state, action: PayloadAction<Stonk>) => {
      state.value = state.value.filter((stonk) => stonk.symbol !== action.payload.symbol);
    }
  }
})

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions
