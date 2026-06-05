import { NETFLIX_LOGO } from "../utils/imageUrl";

const Header = () => {
  return (
    <div className="absolute">
      <img className="w-60 my-6 mx-30 " src={NETFLIX_LOGO} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
