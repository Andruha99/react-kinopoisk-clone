import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import detailsReducer from "./features/detailsSlice/detailsSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import userReducer from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
