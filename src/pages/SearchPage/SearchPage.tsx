import { MoviesList } from "components";
import { ShowMore } from "components/ShowMore/ShowMore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { fetchSearch } from "store/features/searchSlice/searchSlice";
import { searchSelector } from "store/selectors/searchSelector";

export const SearchPage = () => {
  const { title } = useParams();
  const { movies, error } = useAppSelector(searchSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (title) {
      dispatch(fetchSearch(title));
    }
  }, [dispatch, title]);
  return (
    <div>
      {error && <div>No results</div>}
      {movies?.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};
