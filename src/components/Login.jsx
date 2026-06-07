import { useState, useRef } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/imageUrl";
import { validateForm, validateName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    let validationMessage = validateForm(
      emailRef.current.value,
      passwordRef.current.value,
    );
    validationMessage = isSignIn
      ? validationMessage
      : validationMessage || validateName(nameRef.current.value);
    setValidationMessage(validationMessage);

    if (validationMessage) return;

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then(() => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL:
              "https://tse3.mm.bing.net/th/id/OIP.Cb_CL__GjWQcwXgcNiKdQAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            addUser({
              displayName: user.displayName,
              email: user.email,
              uid: user.uid,
              photoURL: user.photoURL,
            }),
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setValidationMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={NETFLIX_BACKGROUND_IMAGE}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30  to-black/70"></div>

        <Header />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black/80 p-12 rounded opacity-90 w-full max-w-md"
          >
            <h1 className="text-white text-3xl font-bold py-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                className="p-2 my-4 w-full bg-gray-800"
              />
            )}
            <input
              ref={emailRef}
              type="text"
              placeholder="Email"
              className="p-2 my-4 w-full bg-gray-800"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-2 my-4 w-full bg-gray-800"
            />
            <p className="text-red-500">{validationMessage}</p>
            <button
              type="submit"
              onClick={() => {
                handleButtonClick();
              }}
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
