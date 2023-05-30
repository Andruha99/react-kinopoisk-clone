import { MoviesList } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ROUTE } from "routes";
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
      {movies?.length > 0 && <MoviesList movies={movies} link={ROUTE.DETAILS_AT_SEARCH} />}
    </div>
  );
};
