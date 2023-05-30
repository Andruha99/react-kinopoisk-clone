import { MoviesList } from "components";
import { useEffect } from "react";
import { fetchMovies, selectorMovies, useAppDispatch, useAppSelector } from "store";

export const TrendsPage = () => {
  const { movies, error } = useAppSelector(selectorMovies);
  const dispatch = useAppDispatch();

  const movieName = ["minions", "beast", "shrek", "rush", "ford", "spy", "fast", "star"];
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
