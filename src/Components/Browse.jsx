// import { auth } from "../utils/Firebase";
import Header from "./Header";
import usegetMovieDetails from "../customHooks/usegetMovieDetails";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";

function Browse() {
  const dispatch = useDispatch();
  const searchToggle = useSelector((store) => store.gptsearch.showgptSearch);

  usegetMovieDetails();
  usePopularMovies();
  useTopRatedMovies();
  return (

    <div>
      <Header />
      {searchToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
