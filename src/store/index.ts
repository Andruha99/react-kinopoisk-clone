import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { store } from "./store";
import moviesReducer from "./features/moviesSlice/moviesSlice";

export { store, useAppSelector, useAppDispatch, moviesReducer };
