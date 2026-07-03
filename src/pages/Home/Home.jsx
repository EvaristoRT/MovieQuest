import { FaSearch } from "react-icons/fa";
import "./Home.css"
function Home(){
    return(
        <>
        <header className="hero">
            <p className="hero__badge">Destacado esta noche</p>
            <p className="hero__title">Deja de buscar. <br/>Empieza a disfrutar.</p>
            <p className="hero__description">Recomendaciones personalizadas basadas en información detallada de cada película. Descubre miles de títulos seleccionados especialmente para tus gustos.</p>
            <form className="hero__search-bar"><FaSearch className="hero__search-bar__icon"/><input type="search" placeholder="Busca películas..."/></form>
        </header>
        </>
    );
}

export default Home;