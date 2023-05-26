import { FavoritesIcon, ImdbLogo } from "assets";
import React from "react";
import { DetailsMovie } from "types/type";
import {
  BadgeContainer,
  BadgeInformation,
  DetailsPoster,
  DetailsWrap,
  Genre,
  Information,
  InformationContainer,
  MovieTitle,
  Plot,
  Rating,
} from "./styles";

interface DetailsCardProps {
  details: DetailsMovie;
}

export const DetailsCard = ({ details }: DetailsCardProps) => {
  return (
    <DetailsWrap>
      <div>
        <DetailsPoster src={details.poster} alt={details.title} />
        <FavoritesIcon />
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
          <InformationContainer>
            <div>
              <Information>Year:</Information>
              <Information>Released:</Information>
              <Information>BoxOffice:</Information>
              <Information>Country:</Information>
              <Information>Production:</Information>
              <Information>Actors:</Information>
              <Information>Director: </Information>
              <Information>Writers: </Information>
            </div>
            <div>
              <Information>{details.year}</Information>
              <Information>{details.released}</Information>
              <Information>{details.boxOffice}</Information>
              <Information>{details.country}</Information>
              <Information>{details.production}</Information>
              <Information>{details.actors}</Information>
              <Information>{details.director}</Information>
              <Information>{details.writer}</Information>
            </div>
          </InformationContainer>
        </div>
      </div>
    </DetailsWrap>
  );
};
