import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
    },
    reducers: {
        setNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies= action.payload;
        },
        setTrailer: (state, action)=>{
            state.trailer= action.payload;
        }
    }
});

export const { setNowPlayingMovies, setTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;