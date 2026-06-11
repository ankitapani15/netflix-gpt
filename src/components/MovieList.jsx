import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="bg-black ">
      <div className="px-6 relative z-20 px-18 ">
        <h1 className="text-white text-2xl ">{title}</h1>
        <div className="flex overflow-x-auto [scrollbar-width:none] p-4">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
