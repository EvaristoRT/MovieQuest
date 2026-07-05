import { useState, useEffect } from "react";
import "./MovieCarousel.css"
import { BASE_URL, IMAGE_BASE_URL, getMovies } from "../../services/tmdb"
import MovieCard from "../MovieCard/MovieCard";

function MovieCarousel({ endpoint, title, genresMap }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const data = await getMovies(endpoint);
            setMovies(data);
        }

        loadMovies();
    }, [endpoint]);
    return (
        <>
            <h2 className="movie-carousel__title">{title}</h2>
            <div className="movie-carousel__carousel">
                {
                    movies.map((movie) => {
                        return (<MovieCard 
                            key={movie.id}
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