import "./MovieGrid.css"
import MovieCard from "../MovieCard/MovieCard";
import { IMAGE_BASE_URL } from "../../services/tmdb";
import { GenresContext } from "../../context/GenresContext";
import { useContext } from "react";
import { getSearch } from "../../services/tmdb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function MovieGrid({ query,movies,page, sectionWidth, onPageChange }){
    const {genresMap} = useContext(GenresContext);
    return(
        <>
            <section className="search-results-info">
                <p className="search-results__title">Resultados para "{query}"</p>
                <p className="search-results__total">{movies.total_results} resultados</p>
            </section>
            <section className="movie-grid" style={{width:`${sectionWidth}`}}>
                <div className="movie-grid__movies">
                    {movies.results.map((movie, id) =>{
                    return(
                        <MovieCard 
                            key={movie.id}
                            id={movie.id}
                            image={IMAGE_BASE_URL + movie.poster_path} 
                            rate={movie.vote_average?.toFixed(1) ?? "N/A"} 
                            title={movie.title} 
                            genre={genresMap[movie.genre_ids?.[0]] ?? "Sin género"} 
                            year={movie.release_date?.slice(0, 4) ?? "N/A"} />

                        );
                    })}
                </div>
                <p className="actual-page">Página actual {page}/{movies.total_pages}</p>
                <div className="page-control">
                    <button className="page-control__prev" onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                        onPageChange(-1)}}>
                        <IoIosArrowBack />Página Anterior
                    </button>
                    <button className="page-control__next" onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                        onPageChange(1)}}>
                        Siguiente Página<IoIosArrowForward />
                    </button>
                </div>
            </section>
        </>
    );
}

export default MovieGrid;