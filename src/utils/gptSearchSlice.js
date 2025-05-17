import { createSlice } from '@reduxjs/toolkit'

export const gptSearchSlice = createSlice({
  name: 'gptsearch',
  initialState :{
    showgptSearch:false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    gptSearchToggleView:(state)=>{
        state.showgptSearch = !state.showgptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
})

// Action creators are generated for each case reducer function
export const { gptSearchToggleView , addGptMovieResult} = gptSearchSlice.actions

export default gptSearchSlice.reducer