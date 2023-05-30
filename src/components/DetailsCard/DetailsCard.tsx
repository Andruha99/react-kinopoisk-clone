import { FavoritesIcon, ImdbLogo } from "assets";
import React from "react";
import { DetailsMovie } from "types/type";
import {
  BadgeContainer,
  BadgeInformation,
  DetailsPoster,
  DetailsWrap,
  FavoriteButton,
  Genre,
  MovieTitle,
  Plot,
  Rating,
  RowData,
  RowTitle,
  Table,
  TableRow,
} from "./styles";
import { useAppDispatch, useAppSelector } from "store";
import { userSelector } from "store/selectors/userSelector";
import { addFavorite } from "store/features/favoritesSlice/favoritesSlice";

interface DetailsCardProps {
  details: DetailsMovie;
}

export const DetailsCard = ({ details }: DetailsCardProps) => {
  const { isAuth } = useAppSelector(userSelector);

  const dispatch = useAppDispatch();

  const handleAddFavorite = () => {
    const movie = {
      title: details.title,
      year: details.year,
      imdbID: details.imdbID,
      type: details.type,
      poster: details.poster,
    };
    console.log(localStorage);
    dispatch(addFavorite(movie));
  };

  return (
    <DetailsWrap>
      <div>
        <DetailsPoster src={details.poster} alt={details.title} />
        <FavoriteButton onClick={handleAddFavorite}>
          <FavoritesIcon />
        </FavoriteButton>
      </div>
      <div>
        <div>
          <Genre>{details.genre}</Genre>
          <MovieTitle>{details.title}</MovieTitle>
          <BadgeContainer>
            <Rating rating={+details.imdbRating}>{details.imdbRating}</Rating>
            <BadgeInformation>
              <ImdbLogo /> {details.imdbRating}
            </BadgeInformation>
            <BadgeInformation>{details.runtime}</BadgeInformation>
          </BadgeContainer>
          <Plot>{details.plot}</Plot>
          <Table>
            <tbody>
              <TableRow>
                <RowTitle>Year:</RowTitle>
                <RowData>{details.year}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>Released:</RowTitle>
                <RowData>{details.released}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>BoxOffice:</RowTitle>
                <RowData>{details.boxOffice}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>Country:</RowTitle>
                <RowData>{details.country}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>Production:</RowTitle>
                <RowData>{details.production}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>Actors:</RowTitle>
                <RowData>{details.actors}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>Director:</RowTitle>
                <RowData>{details.director}</RowData>
              </TableRow>
              <TableRow>
                <RowTitle>Writers:</RowTitle>
                <RowData>{details.writer}</RowData>
              </TableRow>
            </tbody>
          </Table>
        </div>
      </div>
    </DetailsWrap>
  );
};
