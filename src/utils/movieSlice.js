import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movies',
  initialState :{
    nowPlayingMovies:null,
    trailerVideo:null,
    addPopularMovies:null,
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
  },
})

// Action creators are generated for each case reducer function
export const { addMovies , addTrailerVideo , addPopularMovies} = movieSlice.actions

export default movieSlice.reducer