import { configureStore } from "@reduxjs/toolkit";
import { watchListSlice } from "./useWatchListStore";

export const reduxGlobalStore = configureStore({
  reducer: {
    watchList: watchListSlice.reducer
  },
})

export type RootState = ReturnType<typeof reduxGlobalStore.getState>
export type AppDispatch = typeof reduxGlobalStore.dispatch