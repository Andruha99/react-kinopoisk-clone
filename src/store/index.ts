import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { store } from "./store";
import moviesReducer, { fetchMovies } from "./features/moviesSlice/moviesSlice";
import { selectorMovies } from "./selectors/moviesSelector";

export { store, useAppSelector, useAppDispatch, fetchMovies, moviesReducer, selectorMovies };
