import { MoviesList } from "components";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovies } from "store/features/moviesSlice/moviesSlice";
import { selectorMovies } from "store/selectors/moviesSelector";

export const HomePage = () => {
  const { movies } = useAppSelector(selectorMovies);
  const dispatch = useAppDispatch();

  const movieName = ["hour", "man", "batman", "iron", "smile", "office", "theory", "star"];
  const randomName = movieName[Math.floor(Math.random() * movieName.length)];

  useEffect(() => {
    dispatch(fetchMovies(randomName));
  }, [dispatch, randomName]);

  return <div>{movies?.length > 0 && <MoviesList movies={movies} />}</div>;
};
