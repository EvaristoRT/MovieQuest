import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import ActorCarousel from "../../components/ActorCarousel/ActorCarousel";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdb";
import "./MovieDetails.css";

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);
    const { id } = useParams();

    useEffect(() => {
        async function fetchMovie() {
            const data = await getMovieDetails(id);
            setMovie(data);
        }
    
        fetchMovie();
    }, [id]);
    
    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    if (!movie) {
        return <p>Cargando...</p>;
    }
    return (
        <>
            <section className="hero-movie-details" 
            style={{
                backgroundImage: `
                    linear-gradient(
                        transparent 0%,
                        var(--background-primary-2) 30%,
                        var(--background-primary) 100%
                    ),
                    url(${
                        isPhone
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    })
                `
            }}>
                <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="Movie Image" className="movie-poster"/>
                <div id="movie-details">
                    <p id="movie-details__title">{movie.title}</p>
                    <div id="movie-details__info">
                        <p>{movie.release_date.slice(0,4)}<FaCircle id="dot"/>{Math.floor(movie.runtime/60)}h {movie.runtime%60}m</p>
                        <ul id="genre-list">
                            {movie.genres.map((element, id) => (
                                <li className="movie-details__info__genre" key={id}>{element.name}</li>
                            ))}
                        </ul>
                    </div>
                    <p id="movie-details__rate"><FaStar className="movie-card__rate__icon"/>{movie.vote_average.toFixed(1)}</p>
                    <p id="movie-details__synopsis__content">{movie.overview}</p>
                </div>
            </section>
            <section className="actor-carousel">
                <ActorCarousel id={movie.id}/>
            </section>
            <section className="movie-carousel">
                <MovieCarousel endpoint={"/movie/"+movie.id+"/recommendations"} title="Películas similares"/>
            </section>
        </>
    );
}

export default MovieDetails;