import { FaSearch } from "react-icons/fa";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import { useEffect, useRef, useState, useContext } from "react";
import { getGenres } from "../../services/tmdb";
import heroDark from "../../assets/images/heroBackground.png";
import { useNavigate } from "react-router-dom";
function Home() {
    const [genres , setGenres] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();
    const [query, setQuery] = useState("")

    const quickSearch = () =>{
        document.getElementById("hero-home").scrollIntoView({
            behavior: "smooth"
        });
        setTimeout(() => {
            searchInputRef.current.focus();
        }, 500);
    }

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
                <SearchBar inputRef={searchInputRef} initialValue={""}/>
            </header>
            <section className="movie-carousel">
                <MovieCarousel endpoint="/movie/now_playing" title="Actualmente en cines"/>
            </section>
            <section className="movie-carousel">
                <MovieCarousel endpoint="/movie/popular" title="Películas populares"/>
            </section>
            <section className="movie-carousel">
                <MovieCarousel endpoint="/movie/top_rated" title="Mejores calificadas"/>
            </section>
            <button onClick={quickSearch} id="quickSearch" className={showButton ? "show" : ""}><FaSearch /><span>Buscar</span></button>
            
        </>
    );
}

export default Home;
