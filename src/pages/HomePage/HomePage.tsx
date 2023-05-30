import { MoviesList } from "components";
import { ShowMore } from "components/ShowMore/ShowMore";
import { useEffect, useState } from "react";
import { fetchMovies, selectorMovies, useAppDispatch, useAppSelector } from "store";

export const HomePage = () => {
  const { movies, error } = useAppSelector(selectorMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  const movieName = ["hour", "man", "batman", "iron", "smile", "office", "theory", "star"];
  const randomName = movieName[Math.floor(Math.random() * movieName.length)];

  const handlePage = () => setPage((prevPage) => ++prevPage);

  useEffect(() => {
    dispatch(fetchMovies(randomName));
  }, [dispatch, page]);

  return (
    <div>
      {error && <div>{error}</div>}
      {movies?.length > 0 && <MoviesList movies={movies} />}
      <ShowMore onClick={handlePage} text={"Show more"} />
    </div>
  );
};
