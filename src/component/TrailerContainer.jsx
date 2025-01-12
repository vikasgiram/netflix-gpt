import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import TrailerTitle from "./TrailerTitle";

const TrailerContainer = ({ movie }) => {
    const { original_title, overview, id } = movie;
  useMovieTrailer(id);
  const trailer = useSelector((state) => state.movies.trailer);
// console.log(trailer)
  return (
    <div >
        <TrailerTitle title={original_title} overview={overview} />
      <iframe className="w-full h-screen relative z-0 top-0 left-0" 
        src={'https://www.youtube.com/embed/'+trailer?.key+'?autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerContainer;
