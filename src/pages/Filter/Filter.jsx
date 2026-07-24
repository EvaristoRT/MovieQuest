import "./Filter.css"
import { IoIosArrowDown } from "react-icons/io";
import { GenresContext } from "../../context/GenresContext";
import { useContext, useState } from "react";
import { FaCheck, FaStar, FaFilter } from "react-icons/fa";
import MovieGrid from "../../components/MovieGrid/MovieGrid";

function Filter(){
    const { genres } = useContext(GenresContext)
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [minYear, setMinYear] = useState(1990)
    const [maxYear, setMaxYear] = useState(new Date().getFullYear())
    const [less90, setLess90] = useState(false)    
    const [between90_120, setBetween90_120] = useState(false)    
    const [more120, setMore120] = useState(false)    
    const MIN_YEAR = 1990;
    const MAX_YEAR = new Date().getFullYear();
    const left = ((minYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
    const right = ((maxYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
    const width = right - left;
    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    function handleCheck(id){
        if(selectedGenres.includes(id)){
            setSelectedGenres(selectedGenres.filter(genreId => genreId !== id))
        }else{
            setSelectedGenres([...selectedGenres, id])
        }
    }

    function handleCheckAll() {
        if (selectedGenres.length === genres.length) {
            setSelectedGenres([]);
        } else {
            setSelectedGenres(genres.map(genre => genre.id));
        }
    }

    function handleMinYear(e) {
        const value = Number(e.target.value);

        if (value <= maxYear) {
            setMinYear(value);
        }
    }
    function handleMaxYear(e) {
        const value = Number(e.target.value);

        if (value >= minYear) {
            setMaxYear(value);
        }
    }
    return(
        <section id="filter">
            <p id="filter__title">Universo Cinematográfico</p>
            <p id="filter__title__description">Explora nuestra selección de películas galardonadas, joyas independientes ocultas y grandes éxitos de taquilla de todas las generaciones.</p>
            <button className={isOpen ? "filter__button open": "filter__button"}
            onClick={()=>setIsOpen(!isOpen)}>
                Filtros 
                <IoIosArrowDown className={isOpen ? "arrow open" : "arrow"}/>
            </button>
            <form id="filter__filters__container" className={isOpen ? "open" : ""}>
                <div id="filter__filters__genres">
                    <div className="filter__section__header">
                        <p className="filter__section__title">Generos</p>
                        <label key="check-all" className="genre-pill">
                            <input
                                type="checkbox"
                                name="all-genre"
                                id="all-genre"
                                checked={selectedGenres.length === genres.length}
                                onChange={handleCheckAll}
                            />
                            <span>Seleccionar todos</span>
                        </label>
                    </div>
                    {genres.map((genre, id)=>(
                        <label key={genre.id} className="genre-pill">
                            <input
                                type="checkbox"
                                name={genre.name}
                                id={`genre-${genre.id}`}
                                checked={selectedGenres.includes(genre.id)}
                                onChange={()=>handleCheck(genre.id)}
                            />
                            <span>{genre.name}</span>
                        </label>
                    ))}
                </div>
                <div id="filter__filters__year">
                    <div className="filter__section__header">
                        <p className="filter__section__title">Año de Salida</p>
                        <p id="min-max-year">{minYear} - {maxYear}</p>
                    </div>
                    <div className="year-slider">
                        <div className="year-slider__track"></div>
                        <div
                            className="year-slider__selected"
                            style={{
                                left: `${left}%`,
                                width: `${width}%`
                            }}
                        ></div>
                        <input
                            type="range"
                            min={1990}
                            max={new Date().getFullYear()}
                            value={minYear}
                            onChange={handleMinYear}
                            className="year-range"
                            id="min-year__slide"
                        />
                        <input
                            type="range"
                            min={1990}
                            max={new Date().getFullYear()}
                            value={maxYear}
                            onChange={handleMaxYear}
                            className="year-range"
                            id="max-year__slide"
                        />
                    </div>
                </div>
                <div id="filter__filters__duration">
                    <div className="filter__section__header">
                        <p className="filter__section__title">Duración</p>
                    </div>
                    <div id="filter__filters__duration__checks">
                        <label className="duration-check">
                            <input type="checkbox" 
                                checked={less90}
                                onChange={() => setLess90(prev => !prev)}/>
                            <span className="custom-checkbox">
                                {less90 && <FaCheck />}
                            </span>
                            <span>&lt; 90 minutos</span>
                        </label>
                        <label className="duration-check">
                            <input type="checkbox" 
                                checked={between90_120}
                                onChange={() => setBetween90_120(prev => !prev)}/>
                            <span className="custom-checkbox">
                                {between90_120 && <FaCheck />}
                            </span>
                            <span> 90 - 120 minutos</span>
                        </label>
                        <label className="duration-check">
                            <input type="checkbox" 
                                checked={more120}
                                onChange={() => setMore120(prev => !prev)}/>
                            <span className="custom-checkbox">
                                {more120 && <FaCheck />}
                            </span>
                            <span>&gt; 120 minutos</span>
                        </label>
                    </div>
                </div>
                <div id="filter__filters__rating">
                    <div className="filter__section__header">
                        <p className="filter__section__title">Calificación Mínima</p>
                    </div>
                    <div id="stars-rating">
                        {Array.from({ length: 10 }, (_, index) => {
                            const value = index + 1;

                            return (
                                <FaStar
                                    key={value}
                                    onClick={() => rating === value ? setRating(value-1):setRating(value)}
                                    className={
                                        value <= rating
                                            ? "stars-rating-star active"
                                            : "stars-rating-star"
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
                <button id="submit-filters">Filtrar <FaFilter /></button>
            </form>
        </section>
    );
}

export default Filter;