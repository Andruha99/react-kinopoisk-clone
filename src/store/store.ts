import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import detailsReducer from "./features/detailsSlice/detailsSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import userReducer from "./features/userSlice/userSlice";
import favoritesReducer from "./features/favoritesSlice/favoritesSlice";
import themeReducer from "./features/themeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
    search: searchReducer,
    user: userReducer,
    favorites: favoritesReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
