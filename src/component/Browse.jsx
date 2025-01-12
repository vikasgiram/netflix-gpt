import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TrailerContainer from "./TrailerContainer";
import CardRow from "./CardRow";

const Browse=()=>{
    useNowPlayingMovies();
    const nowPlayingMovies= useSelector((state) =>state.movies.nowPlayingMovies);
    if(!nowPlayingMovies) return ;
    const mainMovie= nowPlayingMovies[0];
    return (
        <div>
            <Header/>
            <TrailerContainer movie={mainMovie}/>
            <CardRow/>
            {/** 
             * Main container 
             *  - video title
             *    - video description
             *    - buttons
             *  - video backgroun 
             * 
             * Secondary container 
             *  - card container row
             *     - card
             */}
        </div>
    )
}

export default Browse;