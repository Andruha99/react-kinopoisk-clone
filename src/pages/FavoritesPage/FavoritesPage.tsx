import { MoviesList } from "components";
import React from "react";
import { useAppSelector } from "store";
import { favoritesSelector } from "store/selectors/favoritesSelector";
import { userSelector } from "store/selectors/userSelector";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(favoritesSelector);
  // const { isAuth } = useAppSelector(userSelector);

  return <div>{favorites?.length > 0 && <MoviesList movies={favorites} />}</div>;
};
