import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setUpcomingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
    const dispatch = useDispatch();
    const getUpcommingMovies = async () => {
        try{

            const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
            const data = await res.json();
            dispatch(setUpcomingMovies(data.results));
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getUpcommingMovies();
    },[]);

}

export default useUpcommingMovies;