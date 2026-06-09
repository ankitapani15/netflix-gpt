import { useEffect } from "react";
import { MOVIE_URL, MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIE_URL, MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(setNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
