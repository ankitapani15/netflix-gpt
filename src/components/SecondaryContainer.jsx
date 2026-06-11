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
      <MovieList movies={nowPlayingMovies} title={"Now Playing "} />
      <MovieList movies={popularMovies} title={"Popular "} />
      <MovieList movies={topRatedMovies} title={"Top Rated "} />
    </div>
  );
};

export default SecondaryContainer;
