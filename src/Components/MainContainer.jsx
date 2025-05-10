import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null) return;
    const Movie = movies[0];
    //  console.log(Movie);

  return (
    <div className=''>
        <VideoTitle  title = {Movie.title} overview = {Movie.overview} />
        <VideoBackground movieId = {Movie.id}/>
    </div>
  )
}

export default MainContainer;