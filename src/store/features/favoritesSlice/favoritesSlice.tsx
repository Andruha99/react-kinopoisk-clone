import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "types";

const favoritesStore = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites !== null) {
    return JSON.parse(favorites);
  } else {
    localStorage.setItem("favorites", JSON.stringify([]));
    return [];
  }
};

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: favoritesStore(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      if (state.favorites.find((favorite) => favorite.imdbID !== payload.imdbID)) {
        state.favorites.push(payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload.imdbID);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
