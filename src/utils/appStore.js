import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './userSlice'
import movieReducer from './movieSlice'
import gptSearchReducer from './gptSearchSlice'
import configReducer from './configSlice'


export const store = configureStore({
  reducer: {
    user:userReducer,
    movies:movieReducer,
    gptsearch:gptSearchReducer,
    config:configReducer

  },
})
