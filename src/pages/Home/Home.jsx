import { FaSearch } from "react-icons/fa";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { getGenres } from "../../services/tmdb";
function Home() {
    const [genres , setGenres] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const searchInputRef = useRef(null);

    const quickSearch = () =>{
        document.getElementById("hero-home").scrollIntoView({
            behavior: "smooth"
        });
        setTimeout(() => {
            searchInputRef.current.focus();
        }, 500);
    }

    useEffect(() => {

        async function loadGenres() {

            const data = await getGenres();

            const genresMap = Object.fromEntries(
                data.map((genre) => [genre.id, genre.name])
            );

            setGenres(genresMap);
        }

        loadGenres();

    }, []);

    useEffect(() => { 
        const handleScroll = () =>{
            setShowButton(window.scrollY > 700)
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

    return (
        <>
            <header id="hero-home"className="hero">
                <p className="hero__badge">Destacado esta noche</p>
                <p className="hero__title">
                    Deja de buscar. <br />
                    Empieza a disfrutar.
                </p>
                <p className="hero__description">
                    Recomendaciones personalizadas basadas en información detallada de
                    cada película. Descubre miles de títulos seleccionados especialmente
                    para tus gustos.
                </p>
                <form className="hero__search-bar">
                    <FaSearch className="hero__search-bar__icon" />
                    <input ref={searchInputRef}type="search" placeholder="Busca películas..." />
                </form>
            </header>
            <section className="movie-carousel">
                <MovieCarousel endpoint="/movie/now_playing" title="Actualmente en cines" genresMap={genres}/>
            </section>
            <section className="movie-carousel">
                <MovieCarousel endpoint="/movie/popular" title="Películas populares" genresMap={genres}/>
            </section>
            <section className="movie-carousel">
                <MovieCarousel endpoint="/movie/top_rated" title="Mejores calificadas" genresMap={genres}/>
            </section>
            <button onClick={quickSearch} id="quickSearch" className={showButton ? "show" : ""}><FaSearch /><span>Buscar</span></button>
            
        </>
    );
}

export default Home;
