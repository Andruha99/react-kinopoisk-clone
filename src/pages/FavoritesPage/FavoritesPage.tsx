import { MoviesList } from "components";
import { ROUTE } from "routes";
import { useAppSelector } from "store";
import { favoritesSelector } from "store/selectors/favoritesSelector";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(favoritesSelector);

  return (
    <div>
      {favorites?.length > 0 && <MoviesList movies={favorites} link={ROUTE.DETAILS_AT_SEARCH} />}
    </div>
  );
};
