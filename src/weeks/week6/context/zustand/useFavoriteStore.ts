import { create } from 'zustand'
import { SymbolInfo } from '../../types/polygon.types';

interface FavoriteState {
  favorite?: SymbolInfo;
  setFavorite: (newFavorite?: SymbolInfo) => void;
}

export const useFavoriteStore = create<FavoriteState>()((set) => ({
  favorite: undefined,
  setFavorite: (newFavorite) => set(() => ({ favorite: newFavorite })),
}))