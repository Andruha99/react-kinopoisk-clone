import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformDetailsMovie } from "mappers/transformMovie";
import { DetailsMovie, DetailsMovieApi } from "types/type";

interface DetailsState {
  movieDetails: DetailsMovie | null;
  isLoading: boolean;
  error: null | string;
}

export const fetchMovieDetails = createAsyncThunk<DetailsMovie, string, { rejectValue: string }>(
  "movieDetails/fetchMovieDetails",
  async (imdbId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<DetailsMovieApi>(
        `http://www.omdbapi.com/?apikey=75ceb16d&i=${imdbId}`,
      );

      return transformDetailsMovie(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: DetailsState = {
  movieDetails: null,
  isLoading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movieDetails = payload;
    });

    builder.addCase(fetchMovieDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

export default detailsSlice.reducer;
