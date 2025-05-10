import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../Components/Constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer_video = useSelector((store) => store.movies?.trailerVideo);
  // console.log(trailer_video);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();

    // console.log(json);

    if (!json.results || !Array.isArray(json.results)) {
      console.warn("No results found for movie:", movieId, json);
      return;
    }

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      filteredData.length != 0 ? filteredData[0] : json.results[0];
    // console.log(trailer + " Hello World");
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
