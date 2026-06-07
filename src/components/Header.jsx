import { NETFLIX_LOGO } from "../utils/imageUrl";

const Header = () => {
  return (
    <div className="absolute bg-black/60 w-full ">
      <img className="w-40 my-1 mx-10 " src={NETFLIX_LOGO} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
