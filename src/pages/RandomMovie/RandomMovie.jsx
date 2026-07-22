import "./RandomMovie.css"
import { FaDiceSix } from "react-icons/fa6";
import { getRandomMovie } from "../../services/tmdb";
import { useNavigate } from "react-router-dom";

function RandomMovie(){
    const navigate = useNavigate();
    async function handleRandom() {
        const movieId = await getRandomMovie();
        
        if (!movieId) return;
        
        navigate(`/movie/${movieId}`);
    }
    return(
        <section id="random-movie">
            <div id="random-movie__info">
                <p id="random-movie__title">¿No sabes <br /> <span>qué ver?</span></p>
                <p id="random-movie__description">Deja que la aventura comience. Nuestro algoritmo encontrará para ti una joya oculta o un éxito de taquilla que no querrás perderte.</p>
            </div>
            <div id="random-movie__container">
                <button id="random-movie__button" onClick={handleRandom}>
                    <FaDiceSix />Sorpréndeme
                </button>
                <div id="random-movie__outter-circle"/>
            </div>
        </section>
    );
};

export default RandomMovie;