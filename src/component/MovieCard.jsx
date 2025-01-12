import { BASE_IMG_URL } from "../utils/constants";

const MovieCard = ({posterImg}) =>{
    return (
        <div>
            <img src={BASE_IMG_URL+posterImg} alt="Movie Poster Img" />
        </div>
    )
}

export default MovieCard;