import { create } from 'zustand'
import { Stonk } from '../../types/types';

interface FavoriteState {
  favorite?: Stonk;
  setFavorite: (newFavorite?: Stonk) => void;
}

export const useFavoriteStore = create<FavoriteState>()((set) => ({
  favorite: undefined,
  setFavorite: (newFavorite) => set(() => ({ favorite: newFavorite })),
}))