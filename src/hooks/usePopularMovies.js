import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        try{

            const res= await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
            const data= await res.json();
            // console.log(data.results);
            dispatch(setPopularMovies(data.results));
        }catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
        getPopularMovies();
    },[]);
}

export default usePopularMovies;