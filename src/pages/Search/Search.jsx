import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Search.css"
import { FaSearch } from "react-icons/fa";
import { getSearch } from "../../services/tmdb";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import SearchBar from "../../components/SearchBar/SearchBar";


function Search( { search }){
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState(null);
    const maxPages = 500;
    function controlPage(num) {
            const newPage = page + num;
    
            if (newPage < 1 || newPage > movies.total_pages || newPage > maxPages) return;
    
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
    return(
        <>
        <header id="search-bar__container">
            <SearchBar initialValue={query}/>
        </header>
        {!movies
        ? <LoadingScreen message={"Cargando tu siguiente aventura..."}/>
        : <MovieGrid query={query} movies={movies} page={page} sectionWidth={"100%"} onPageChange={controlPage}/>
        }
        </>
    );
}

export default Search;