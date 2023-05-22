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

export type { MovieApi, Movie, ResponseMovieApi, ResponseMovie };
