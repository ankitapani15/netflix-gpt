import { useEffect } from "react";
import { POPULAR_MOVIES_URL, MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(setPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
