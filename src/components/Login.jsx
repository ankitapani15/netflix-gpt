import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/imageUrl";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30  to-black/90"></div>

        <Header />
        <div className="absolute w-3/12 my-36 mx-auto right-0 left-0 text-white">
          <form className="bg-black/80 p-12 rounded opacity-90">
            <h1 className="text-white text-3xl font-bold py-4">Sign In</h1>
            {!isSignIn && (
              <input
                type="name"
                placeholder="Name"
                className="p-2 my-4 w-full bg-gray-800"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="p-2 my-4 w-full bg-gray-800"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 my-4 w-full bg-gray-800"
            />
            <button
              type="submit"
              className="p-2 my-6 w-full bg-red-800 rounded-lg"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-gray-400">
              {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={() => {
                  handleSignUp();
                }}
              >
                {isSignIn ? "Sign up now" : "Sign in now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
