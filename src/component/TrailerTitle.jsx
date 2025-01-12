const TrailerTitle = ({ title, overview }) => {
  return (
    <>
      <div className="absolute text-white pl-20 top-0 left-0 w-full h-screen bg-gradient-to-r from-black z-20">
        <h1 className="pt-96 text-5xl font-bold pb-5">{title}</h1>
        <p className="w-1/4  text-lg ">{overview}</p>
      <div className=" mt-5">
        <button className="mx-2 px-8 bg-white broder text-lg rounded-lg text-black py-3 hover:opacity-70"><span className="fa-solid fa-play "></span> Play</button>
        <button className=" px-6 bg-gray-700 broder text-lg rounded-lg -black py-3"> <span className="fa-solid fa-info mx-2"></span>More Info</button>
      </div>
      </div>
    </>
  );
};

export default TrailerTitle;
