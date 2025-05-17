import { useRef, useState, useCallback } from "react";
import validateCredentials from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

function Body() {

  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const submitForm = useCallback(
    (e) => {
      e.preventDefault(); // Prevent form reload
      const currentEmail = email.current?.value || "";
      const currentPassword = password.current?.value || "";

      const validationMsg = validateCredentials(currentEmail, currentPassword);

      // Only update if message changed
      if (validationMsg !== errMsg) {
        setErrMsg(validationMsg);
      }

      if (errMsg) return;

      if (!isSignIn) {
        createUserWithEmailAndPassword(auth, currentEmail, currentPassword)
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            // navigate("/browse");

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, currentEmail, currentPassword)
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            // navigate("/browse");

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    },
    [errMsg]
  );

  const onClickSignUp = useCallback(() => {
    setIsSignIn((prev) => !prev);
  }, []);

  return (
    <div className="bg-black/70 text-white w-[600px] h-[680px] rounded-lg shadow-lg flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-semibold mb-5">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      <form
        onSubmit={submitForm}
        className="w-full max-w-md flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <label className="mb-2 text-xl font-medium">Email ID</label>
          <input
            ref={email}
            type="text"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter Email"
          />
        </div>

        {!isSignIn && (
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-medium">Username</label>
            <input
              ref={name}
              type="text"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Username"
            />
          </div>
        )}

        <div className="flex flex-col">
          <label className="mb-2 text-xl font-medium">Password</label>
          <input
            ref={password}
            type="password"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your password"
          />
        </div>

        <button
        
          type="submit"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded text-xl"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-red-400 text-sm">{errMsg}</p>

        <p className="cursor-pointer font-bold" onClick={onClickSignUp}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Body;
