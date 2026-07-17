import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MovieCard.css"
function MovieCard({ id, image, rate, title, genre, year }) {
    return (
        <Link to={`/movie/${id}`} className="movie-card">
            <article>
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
            </article>
        </Link>
    );
}

export default MovieCard;