interface MovieApi {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

interface ResponseMovieApi {
  Search: MovieApi[];
  totalResults: string;
  Response: string;
}

interface ResponseMovie {
  search: Movie[];
  totalResults: string;
  response: string;
}

interface MovieRatingsApi {
  Source: string;
  Value: string;
}

interface DetailsMovieApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRatingsApi[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface MovieRatings {
  source: string;
  value: string;
}

interface DetailsMovie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: MovieRatings[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dVD: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

interface AuthValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type {
  MovieApi,
  Movie,
  ResponseMovieApi,
  ResponseMovie,
  DetailsMovieApi,
  DetailsMovie,
  AuthValues,
};
