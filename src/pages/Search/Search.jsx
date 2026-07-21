import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Search.css"
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getSearch } from "../../services/tmdb";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import SearchBar from "../../components/SearchBar/SearchBar";


function Search( { search }){
    const [movies, setMovies] = useState(null);
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);

    const query = searchParams.get("query");
    function controlPage(num) {
        const newPage = page + num;

        if (newPage < 1 || newPage > movies.total_pages) return;

        setPage(newPage);
    }

    useEffect(()=>{
        async function loadSearch(){
            const data = await getSearch(query, page)
            setMovies(data);
        }
        loadSearch();
    },[query,page])
    useEffect(() => {
        setPage(1);
    }, [query]);

    if (!movies) {
        return <LoadingScreen />;
    }
    return(
        <>
        <header id="search-bar__container">
            <SearchBar initialValue={query}/>
        </header>
        <section id="search-results-info">
            <p id="search-results__title">Resultados para "{query}"</p>
            <p id="search-results__total">{movies.total_results} resultados</p>
        </section>
        <MovieGrid movies={movies.results} sectionWidth={100}/>
        <p id="actual-page">Página actual {page}/{movies.total_pages}</p>
        <div className="page-control">
            <button id="page-control__prev" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                controlPage(-1)}}>
                <IoIosArrowBack />Página Anterior
            </button>
            <button id="page-control__next" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                controlPage(1)}}>
                Siguiente Página<IoIosArrowForward />
            </button>
        </div>
        </>
    );
}

export default Search;