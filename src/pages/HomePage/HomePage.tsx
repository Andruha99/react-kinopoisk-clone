import React, { useEffect } from "react";
import { useAppDispatch } from "store";
import { fetchMovies } from "store/features/moviesSlice/moviesSlice";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const movieName = ["hour", "man", "batman", "iron", "smile", "office", "theory", "star"];
  const randomName = movieName[Math.floor(Math.random() * movieName.length)];

  useEffect(() => {
    dispatch(fetchMovies(randomName));
  }, [dispatch]);

  return <div>HomePage</div>;
};
