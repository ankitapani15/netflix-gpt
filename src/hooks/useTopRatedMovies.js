import { useEffect } from "react";
import { TOP_RATED_MOVIES_URL, MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, MOVIE_API_OPTIONS);
    const json = await data.json();
    dispatch(setTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
