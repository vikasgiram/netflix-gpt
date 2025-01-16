import { useRef } from "react";
import useSearchMovies from "../hooks/useSearchMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Search = () => {
  const searchMovies = useSearchMovies();
  const searchResults = useSelector((state) => state.movies.searchMovies);
  const search = useRef(null);

  const handleSearch = () => {
    searchMovies(search.current.value);
  };
  return (
    <div className="bg-black w-2/4 h-3/4 left-1/4 absolute top-1/4 rounded-lg bg-opacity-70">
      <div className="flex">
        <input
          className="w-full text-xl m-5 mr-2 h-12 rounded-lg px-4"
          ref={search}
          type="text"
          placeholder="What you want to watch today?"
        />
        <button
          className="bg-purple-800 m-5 ml-2 h-12 text-white p-2 rounded-lg text-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="text-white m-10 ">
        <MovieList title={"Search Results ("+ searchResults.length+ ")"} movies={searchResults} />
      </div>
    </div>
  );
};

export default Search;
