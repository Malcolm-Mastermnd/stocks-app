import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SymbolInfo } from '../../types/polygon.types';

interface WatchListState {
  value: SymbolInfo[];
}

const initialState: WatchListState = {
  value: [],
}

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<SymbolInfo>) => {
      if (!state.value.includes(action.payload)) {
        state.value = [...state.value, action.payload];
      }
    },
    removeFromWatchList: (state, action: PayloadAction<SymbolInfo>) => {
      state.value = state.value.filter((stonk) => stonk.ticker !== action.payload.ticker);
    }
  }
})

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions
