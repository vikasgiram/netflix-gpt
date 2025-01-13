import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";


const SecondaryContainer= () =>{
    usePopularMovies();
    useTopRatedMovies();
    useUpcommingMovies();
    const movies = useSelector((state) => state.movies);
    
    // console.log(populerMovies);
    return (
        <div className="bg-black text-white ">
            <div className="-mt-36 ml-10 relative z-20">

            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            </div>
            <div className="ml-10">
                <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
                <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
            </div>
        </div>
    );
}
export default SecondaryContainer;