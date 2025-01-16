import { useEffect } from "react";
import { API_OPTIONS, GET_NOW_PLAYING_API_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () =>{
        try {
            const res= await fetch(GET_NOW_PLAYING_API_URL,API_OPTIONS);
            const data=await res.json();
            dispatch(setNowPlayingMovies(data.results));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;
