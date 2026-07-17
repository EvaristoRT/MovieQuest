import { useState, useEffect, useContext, useRef } from "react";
import "./MovieCarousel.css"
import { BASE_URL, IMAGE_BASE_URL, getMovies } from "../../services/tmdb"
import { GenresContext } from "../../context/GenresContext";
import MovieCard from "../MovieCard/MovieCard";

function MovieCarousel({ endpoint, title }) {
    const [movies, setMovies] = useState([]);
    const { genresMap } = useContext(GenresContext);
    const carouselRef = useRef(null);

    useEffect(() => {
        async function loadMovies() {
            const data = await getMovies(endpoint);
            setMovies(data);
        }
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: 0,
                behavior: "instant" // o simplemente asigna scrollLeft
            });
        }
        loadMovies();
    }, [endpoint]);
    return (
        <>
            <h2 className="movie-carousel__title">{title}</h2>
            <div  ref={carouselRef} className="movie-carousel__carousel">
                {
                    movies.map((movie) => {
                        return (<MovieCard 
                            key={movie.id}
                            id={movie.id}
                            image={IMAGE_BASE_URL + movie.poster_path} 
                            rate={movie.vote_average.toFixed(1)} 
                            title={movie.title} 
                            genre={genresMap[movie.genre_ids[0]]} 
                            year={movie.release_date.slice(0, 4)} />);
                    })
                }
            </div>
        </>
    );
};

export default MovieCarousel;