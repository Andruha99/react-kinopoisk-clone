import { Movie, MovieApi, ResponseMovie, ResponseMovieApi } from "types";

const transformMovie = (movies: MovieApi[]): Movie[] => {
  return movies.map(({ Title, Year, imdbID, Type, Poster }) => {
    return {
      title: Title,
      year: Year,
      imdbID: imdbID,
      type: Type,
      poster: Poster,
    };
  });
};

const transformMovieApi = ({ Search, totalResults, Response }: ResponseMovieApi): ResponseMovie => {
  return {
    search: transformMovie(Search),
    totalResults: totalResults,
    response: Response,
  };
};

export { transformMovie, transformMovieApi };
