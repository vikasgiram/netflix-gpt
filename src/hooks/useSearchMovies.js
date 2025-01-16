import { useDispatch } from 'react-redux';
import { API_OPTIONS, SEARCH_MOVIES_URL } from '../utils/constants';
import { setSearchMovies } from '../store/moviesSlice';

const useSearchMovies = () => {
  const dispatch = useDispatch();

  const searchMovies = async (query) => {
    if (!query.trim()) return;

    try {
      const response = await fetch(SEARCH_MOVIES_URL+query, API_OPTIONS);
      const data = await response.json();
        // console.log(data);
      // Dispatch the data to Redux store
        dispatch(setSearchMovies(data.results));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return searchMovies;
};

export default useSearchMovies;
