import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        setNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies= action.payload;
        },
        setPopularMovies:(state, action)=>{
            state.popularMovies= action.payload;
        },
        setTopRatedMovies: (state, action) =>{
            state.topRatedMovies=action.payload;
        },
        setUpcomingMovies: (state, action) =>{
            state.upcomingMovies= action.payload;
        },
        setTrailer: (state, action)=>{
            state.trailer= action.payload;
        }
    }
});

export const { setNowPlayingMovies, setTrailer, setPopularMovies, setTopRatedMovies, setUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;