import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const viewGptSearch = useSelector(
    (store) => store.gptSearch.toggleGptSearchView,
  );
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div className="relative w-full">
      <Header />
      {viewGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
