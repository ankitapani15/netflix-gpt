const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 pr-4">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
