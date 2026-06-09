import { useEffect } from "react";
import { MOVIE_VIDEO_URL, MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchMovieVideo = async () => {
    const url = MOVIE_VIDEO_URL.replace("movie_id", movieId);
    try {
      const response = await fetch(url, MOVIE_API_OPTIONS);
      const data = await response.json();
      dispatch(setMovieTrailer(data.results));
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };
  useEffect(() => {
    fetchMovieVideo();
  }, []);
};

export default useMovieTrailer;
