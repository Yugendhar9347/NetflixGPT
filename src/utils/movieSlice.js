import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movies',
  initialState :{
    nowPlayingMovies:null,
    trailerVideo:null,
    // popularMovies:null,
    topRatedMovies:null,
  },
  reducers: {
    addMovies: (state,action) => {
      // return action.payload;
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo = action.payload;
    },
     addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovies , addTrailerVideo , addPopularMovies , addTopRatedMovies} = movieSlice.actions

export default movieSlice.reducer