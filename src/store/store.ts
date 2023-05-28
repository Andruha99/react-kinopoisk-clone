import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import detailsReducer from "./features/detailsSlice/detailsSlice";
import searchReducer from "./features/searchSlice/searchSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
