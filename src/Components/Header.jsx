import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import {Header_Logo} from "../Components/Constants";


function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser(uid, email, displayName));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => Unsubscribe();
  }, []);

  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black via-black/20 to-transparent z-0">
      <img
      className="w-60 " 
      src= {Header_Logo}></img>
    </div>
  );
}

export default Header;


