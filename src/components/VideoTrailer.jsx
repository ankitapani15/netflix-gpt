import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoTrailer = ({ movieId }) => {
  const allVideoInfo = useSelector((state) => state.movies?.movieTrailer);
  useMovieTrailer(movieId);
  if (!allVideoInfo) return;
  const trailerFound = allVideoInfo.filter((video) => video.type === "Trailer");

  // If a trailer is found, use it; otherwise, use the first video in the list
  const trailerInfo =
    trailerFound.length > 0 ? trailerFound[0] : allVideoInfo[0];

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerInfo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
