import React from "react";
import { Movie } from "types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.type}</p>
    </div>
  );
};
