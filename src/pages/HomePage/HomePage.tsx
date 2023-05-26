import { MoviesList } from "components";
import React, { useEffect } from "react";
import { ROUTE } from "routes";
import { fetchMovies, selectorMovies, useAppDispatch, useAppSelector } from "store";

export const HomePage = () => {
  const { movies, error } = useAppSelector(selectorMovies);
  const dispatch = useAppDispatch();

  const movieName = ["hour", "man", "batman", "iron", "smile", "office", "theory", "star"];
  const randomName = movieName[Math.floor(Math.random() * movieName.length)];

  useEffect(() => {
    dispatch(fetchMovies(randomName));
  }, [dispatch]);

  return (
    <div>
      {error && <div>{error}</div>}
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
