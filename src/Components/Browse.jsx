import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

function Browse() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options);
    const json = await data.json();

    console.log(json);
 
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <Header />
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="relative bg-red-500 m-4 p-3 rounded-2xl"
        >
          Sign Out{" "}
        </button>
      </div>
    </div>
  );
}

export default Browse;
