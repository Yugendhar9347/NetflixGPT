import { auth } from "../utils/Firebase";
import Header from "./Header";
import { signOut } from "firebase/auth";
import usegetMovieDetails from "../customHooks/usegetMovieDetails";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../customHooks/usePopularMovies";

function Browse() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  usegetMovieDetails();
  usePopularMovies();
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <Header />
        </div>
        <div>
          <button
            onClick={handleSignOut}
            className="relative  bg-red-500 m-4 p-3 rounded-2xl"
          >
            Sign Out 
          </button>
        </div>
      </div>


      <div className="">
      <MainContainer />
      <SecondaryContainer />
      </div>
    </div>
  );
}

export default Browse;
