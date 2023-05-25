import React from "react";
import { Movie } from "types";
import { CardWrap, Poster, Title } from "./style";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <CardWrap>
      <Poster src={movie.poster} alt={movie.title} />
      <Title>{movie.title}</Title>
    </CardWrap>
  );
};
