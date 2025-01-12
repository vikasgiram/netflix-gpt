import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer= () =>{
    const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);
    return (
        <div className="bg-black text-white ">
            <div className="-mt-36 ml-10 relative z-20">

            <MovieList title={"Now Playing"} movies={nowPlaying}/>
            </div>
        </div>
    );
}
export default SecondaryContainer;