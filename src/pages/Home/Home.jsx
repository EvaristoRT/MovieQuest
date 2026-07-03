import { FaSearch } from "react-icons/fa";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.css";
function Home() {
    return (
        <>
            <header className="hero">
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
                    <input type="search" placeholder="Busca películas..." />
                </form>
            </header>
            <section className="recent-movies">
                <MovieCard image="https://play-lh.googleusercontent.com/cvVYM9tR0wWaKb1kEL-xYFDeru2bx1Og-sjE0g9FB9vNe8iJcY7oLysxLLxlRsGI3vR8QQ" rate={9.8} title="Los minions" genre="Comedy" year={2006}/>
                <MovieCard image="https://play-lh.googleusercontent.com/cvVYM9tR0wWaKb1kEL-xYFDeru2bx1Og-sjE0g9FB9vNe8iJcY7oLysxLLxlRsGI3vR8QQ" rate={9.8} title="Los minions" genre="Comedy" year={2006}/>
                <MovieCard image="https://play-lh.googleusercontent.com/cvVYM9tR0wWaKb1kEL-xYFDeru2bx1Og-sjE0g9FB9vNe8iJcY7oLysxLLxlRsGI3vR8QQ" rate={9.8} title="Los minions" genre="Comedy" year={2006}/>
            </section>
        </>
    );
}

export default Home;
