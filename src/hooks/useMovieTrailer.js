import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setTrailer } from "../store/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () =>{
        try {
            const res= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const data= await res.json();
            const filteredData= data?.results?.filter((video)=> video.type === 'Trailer');
            dispatch(setTrailer( filteredData.length ? filteredData[0] : data.results[0]));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        getMovieTrailer();
    },[movieId]);
}

export default useMovieTrailer;