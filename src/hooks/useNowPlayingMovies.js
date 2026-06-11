import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_URL, MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(setNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
