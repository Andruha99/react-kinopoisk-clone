import { MovieCard } from "components";
import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Movie } from "types";
import { MoviesWrap, StyledLink } from "./styles";
import { ROUTE } from "routes";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <MoviesWrap>
      {movies.map((movie) => (
        <StyledLink to={generatePath(ROUTE.DETAILS, { imdbID: movie.imdbID })} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </StyledLink>
      ))}
    </MoviesWrap>
  );
};
