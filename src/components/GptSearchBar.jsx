const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 bg-white"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 text-white px-4 py-2 m-4 col-span-3 rounded-lg hover:opacity-80">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
