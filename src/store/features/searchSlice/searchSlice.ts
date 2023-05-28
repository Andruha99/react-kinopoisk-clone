import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, ResponseMovie, ResponseMovieApi } from "types";

interface SearchState {
  movies: Movie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: SearchState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchSearch = createAsyncThunk<
  ResponseMovie,
  string | undefined,
  { rejectValue: string }
>("search/fetchSearch", async (title, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<ResponseMovieApi>(
      `http://www.omdbapi.com/?apikey=75ceb16d&s=${title}`,
    );
    return transformMovieApi(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies.push(...payload.search);
    });

    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = true;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;
