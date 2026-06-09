import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
