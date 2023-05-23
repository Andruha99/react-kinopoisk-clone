import { MovieCard } from "components";
import React from "react";
import { Movie } from "types";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div>
      <div>
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};
