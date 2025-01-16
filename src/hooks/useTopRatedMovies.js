import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setTopRatedMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        try{
            const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
            const data = await res.json();
            dispatch(setTopRatedMovies(data.results));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;