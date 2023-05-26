import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import detailsReducer from "./features/detailsSlice/detailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
