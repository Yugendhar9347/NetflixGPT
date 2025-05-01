import { useState } from "react";
function Body() {
  const [isSignIn, setIsSignIn] = useState(true);

  function onClickSignUp() {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="bg-black/70  text-white w-[600px] h-[720px] rounded-lg shadow-lg flex flex-col items-center justify-center px-8">
      <h1 className="text-3xl font-semibold mb-5">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      <form className="w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Username</label>
          <input
            type="text"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter  username"
          />
        </div>

        {!isSignIn ? (
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium">Email ID</label>
            <input
              type="text"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter  Email ID"
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer font-bold " onClick={onClickSignUp}>
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Body;
