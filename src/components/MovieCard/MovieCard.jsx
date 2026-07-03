import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import "./MovieCard.css"
function MovieCard({ image, rate, title, genre, year }) {
    return (
        <div className="movie-card">
            <div className="movie-card__top" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <p className="movie-card__rate"><FaStar className="movie-card__rate__icon"/>{rate}</p>
            </div>
            <p className="movie-card__title">{title}</p>
            <p className="movie-card__info">{genre} <GoDotFill /> {year}</p>
        </div>
    );
}

export default MovieCard;