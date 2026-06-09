import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    // Implement sign-out logic using Firebase auth
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(
          addUser({
            displayName: displayName,
            email: email,
            uid: uid,
            photoURL: photoURL,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribing the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-black/60 w-full z-10">
      <img className="w-40 my-1 mx-10" src={NETFLIX_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-10 h-10 cursor-pointer"
          />
          <h2
            onClick={() => handleSignOut()}
            className="text-white  text-xl cursor-pointer hover:text-red-500"
          >
            Sign Out
          </h2>
        </div>
      )}
    </div>
  );
};

export default Header;
