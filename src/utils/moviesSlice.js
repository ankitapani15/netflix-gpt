import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  setNowPlayingMovies,
  setMovieTrailer,
  setPopularMovies,
  setTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
