import { MovieCard } from "components";
import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Movie } from "types";
import { MoviesWrap, StyledLink } from "./styles";

interface MoviesListProps {
  movies: Movie[];
  link: string;
}

export const MoviesList = ({ movies, link }: MoviesListProps) => {
  return (
    <MoviesWrap>
      {movies.map((movie) => (
        <StyledLink to={generatePath(link, { imdb: movie.imdbID })} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </StyledLink>
      ))}
    </MoviesWrap>
  );
};
