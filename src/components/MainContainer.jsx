import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
