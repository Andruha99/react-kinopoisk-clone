import { Movie, MovieApi, ResponseMovie, ResponseMovieApi } from "types";
import { DetailsMovie, DetailsMovieApi } from "types/type";

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

const transformDetailsMovie = (movie: DetailsMovieApi): DetailsMovie => {
  return {
    title: movie.Title,
    year: movie.Year,
    rated: movie.Rated,
    released: movie.Released,
    runtime: movie.Runtime,
    genre: movie.Genre,
    director: movie.Director,
    writer: movie.Writer,
    actors: movie.Actors,
    plot: movie.Plot,
    language: movie.Language,
    country: movie.Country,
    awards: movie.Awards,
    poster: movie.Poster,
    ratings: movie.Ratings.map((rating) => {
      return { source: rating.Source, value: rating.Value };
    }),
    metascore: movie.Metascore,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
    imdbID: movie.imdbID,
    type: movie.Type,
    dVD: movie.DVD,
    boxOffice: movie.BoxOffice,
    production: movie.Production,
    website: movie.Website,
    response: movie.Response,
  };
};

export { transformMovie, transformMovieApi, transformDetailsMovie };
