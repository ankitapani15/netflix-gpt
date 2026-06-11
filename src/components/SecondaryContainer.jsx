import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies,
  );

  if (!topRatedMovies || !popularMovies || !nowPlayingMovies) return;
  return (
    <div className="-mt-80">
      <MovieList movies={nowPlayingMovies} title={"Now Playing Movies"} />
      <MovieList movies={popularMovies} title={"Popular Movies"} />
      <MovieList movies={topRatedMovies} title={"Top Rated Movies"} />
    </div>
  );
};

export default SecondaryContainer;
