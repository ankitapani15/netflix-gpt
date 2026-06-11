const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[10%] px-18 bg-gradient-to-r from-black/60">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-lg text-white my-4 w-1/3">{overview}</p>
      <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-opacity-80">
        ▶︎ Play
      </button>
      <button className="bg-gray-600 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-80 ml-4">
        ⓘ More Info
      </button>
    </div>
  );
};

export default VideoTitle;
