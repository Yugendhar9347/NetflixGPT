import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../Components/Constants";

const usegetMovieDetails = () => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );

    const json = await data.json();

    // console.log(json);

    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default usegetMovieDetails;
