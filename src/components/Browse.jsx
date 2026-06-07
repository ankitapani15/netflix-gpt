import Header from "./Header";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  const handleSignOut = () => {
    // Implement sign-out logic using Firebase auth

    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="relative w-full">
      <Header />
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
    </div>
  );
};

export default Browse;
