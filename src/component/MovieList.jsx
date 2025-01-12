import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-full overflow-x-auto">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex space-x-4 p-2">
        {movies &&
          movies.map((movie) => (
            <div className="flex-shrink-0 w-40" key={movie.id}>
              <MovieCard posterImg={movie.poster_path} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;