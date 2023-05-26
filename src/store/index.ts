import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { store } from "./store";
import moviesReducer, { fetchMovies } from "./features/moviesSlice/moviesSlice";
import { selectorMovies } from "./selectors/moviesSelector";
import { fetchMovieDetails } from "./features/detailsSlice/detailsSlice";

export {
  store,
  useAppSelector,
  useAppDispatch,
  fetchMovies,
  moviesReducer,
  selectorMovies,
  fetchMovieDetails,
};
