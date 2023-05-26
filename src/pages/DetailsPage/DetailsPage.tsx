import { DetailsCard } from "components";
import { transformDetailsMovie } from "mappers/transformMovie";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, useAppDispatch, useAppSelector } from "store";
import { selectorDetails } from "store/selectors/detailsSelector";
import { DetailsMovie } from "types/type";

export const DetailsPage = () => {
  const { imdbID } = useParams();
  const [details, setDetails] = useState({} as DetailsMovie);
  const { movieDetails, isLoading, error } = useAppSelector(selectorDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=75ceb16d&i=${imdbID}`)
      .then((response) => response.json())
      .then((response) => transformDetailsMovie(response))
      .then(setDetails);
  }, [imdbID]);

  return (
    <div>
      <DetailsCard details={details} />
    </div>
  );
};
