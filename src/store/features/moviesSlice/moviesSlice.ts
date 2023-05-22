import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Movie, ResponseMovie, ResponseMovieApi } from "types";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk<ResponseMovie, string, { rejectValue: string }>(
  "movies/fetchMovies",
  async (title, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseMovieApi>(
        `http://www.omdbapi.com/?apikey=75ceb16d&s=${title}`,
      );
      return data;
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload.search;
    });

    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
