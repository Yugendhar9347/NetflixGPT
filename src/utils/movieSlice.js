import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movies',
  initialState :null,
  reducers: {
    addMovies: (state,action) => {
      return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovies } = movieSlice.actions

export default movieSlice.reducer