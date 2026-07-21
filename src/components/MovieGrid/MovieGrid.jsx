import "./MovieGrid.css"
import MovieCard from "../MovieCard/MovieCard";
import { IMAGE_BASE_URL } from "../../services/tmdb";
import { GenresContext } from "../../context/GenresContext";
import { useContext } from "react";
function MovieGrid({ movies, sectionWidth }){
    const {genresMap} = useContext(GenresContext);
    return(
        <section className="movie-grid" style={{width:`${sectionWidth}%`}}>
            {movies.map((movie, id) =>{
                return(
                    <MovieCard 
                        key={movie.id}
                        id={movie.id}
                        image={IMAGE_BASE_URL + movie.poster_path} 
                        rate={movie.vote_average.toFixed(1)} 
                        title={movie.title} 
                        genre={genresMap[movie.genre_ids[0]]} 
                        year={movie.release_date.slice(0, 4)} />
                    
                );
            })}
        </section>
    );
}

export default MovieGrid;