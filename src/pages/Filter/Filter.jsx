import "./Filter.css"
import { IoIosArrowDown } from "react-icons/io";
import { GenresContext } from "../../context/GenresContext";
import { useContext, useEffect, useState } from "react";
import { FaCheck, FaStar, FaFilter } from "react-icons/fa";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import { getFilteredMovies } from "../../services/tmdb";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useParams, useSearchParams } from "react-router-dom";

function Filter(){
    const { genres } = useContext(GenresContext)
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [minYear, setMinYear] = useState(1990)
    const [maxYear, setMaxYear] = useState(new Date().getFullYear())
    const [duration, setDuration] = useState(null); 
    const MIN_YEAR = 1990;
    const MAX_YEAR = new Date().getFullYear();
    const left = ((minYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
    const right = ((maxYear - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100;
    const width = right - left;
    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const [movies, setMovies] = useState(null);
    let minDuration = null;
    let maxDuration = null;
    const [page, setPage] = useState(1);
    const [appliedFilters, setAppliedFilters] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    

    switch (duration) {
        case "less90":
            maxDuration = 89;
            break;

        case "between90_120":
            minDuration = 90;
            maxDuration = 120;
            break;

        case "more120":
            minDuration = 121;
            break;
    }
    const currentFilters = {
        selectedGenres,
        minYear,
        maxYear,
        minDuration,
        maxDuration,
        rating
    };

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
    function handleDuration(option) {
        setDuration(prev => prev === option ? null : option);
    }

    function controlPage(num) {
        const newPage = page + num;
        if (newPage < 1 || newPage > movies.total_pages) return;
        setPage(newPage);
    }

    async function loadFilteredMovies(filters){
        const data = await getFilteredMovies(
            filters.selectedGenres,
            filters.minYear,
            filters.maxYear,
            filters.minDuration,
            filters.maxDuration,
            filters.rating,
            filters.page
        );
        setMovies(data);
    }
    function handleApplyFilters() {
        const filtersChanged = JSON.stringify(currentFilters) !== JSON.stringify(appliedFilters);
        const filtersToApply = {
            ...currentFilters,
            page: filtersChanged ? 1 : page
        };

        if (
            JSON.stringify(currentFilters) ===
            JSON.stringify(appliedFilters)
        ) {
            return;
        }
        if (filtersChanged) {
            setPage(1);
        }

        setAppliedFilters(filtersToApply);

        setPage(filtersToApply.page);

        setSearchParams({
            genres: filtersToApply.selectedGenres.join("|"),
            minYear: filtersToApply.minYear.toString(),
            maxYear: filtersToApply.maxYear.toString(),
            minDuration: filtersToApply.minDuration ?? "",
            maxDuration: filtersToApply.maxDuration ?? "",
            rating: filtersToApply.rating.toString(),
            page: filtersToApply.page.toString()
        });

        loadFilteredMovies(filtersToApply);
        window.scrollTo({
            top: 0,
            behavior: "smooth"}
        )
    }
    useEffect(() => {
        if (!appliedFilters) return;
        const filtersToLoad = {
            ...appliedFilters,
            page
        };

        loadFilteredMovies(filtersToLoad);
        setSearchParams({
            genres: filtersToLoad.selectedGenres.join("|"),
            minYear: filtersToLoad.minYear.toString(),
            maxYear: filtersToLoad.maxYear.toString(),
            minDuration: filtersToLoad.minDuration ?? "",
            maxDuration: filtersToLoad.maxDuration ?? "",
            rating: filtersToLoad.rating.toString(),
            page: filtersToLoad.page.toString()
        });

    }, [page]);
    useEffect(()=>{
        const genresParam = searchParams.get("genres");
        const minYearParam = searchParams.get("minYear");
        const maxYearParam = searchParams.get("maxYear");
        const minDurationParam = searchParams.get("minDuration");
        const maxDurationParam = searchParams.get("maxDuration");
        const ratingParam = searchParams.get("rating");
        const pageParam = searchParams.get("page");
        let restoredGenres = [];

        if (genresParam) {
            restoredGenres = genresParam
                .split("|")
                .map(id => Number(id));

            setSelectedGenres(restoredGenres);
        }
        if(minYearParam){
            setMinYear(Number(minYearParam));
        }

        if(maxYearParam){
            setMaxYear(Number(maxYearParam));
        }

        if(minDurationParam){
            minDuration = (Number(minDurationParam));
        }

        if(maxDurationParam){
            maxDuration = (Number(maxDurationParam));
        }

        if(ratingParam){
            setRating(Number(ratingParam));
        }

        if(pageParam){
            setPage(Number(pageParam));
        }
        if (!minDurationParam && maxDurationParam === "89") {
            setDuration("less90");
        } else if (minDurationParam === "90" && maxDurationParam === "120") {
            setDuration("between90_120");
        } else if (minDurationParam === "121" && !maxDurationParam) {
            setDuration("more120");
        } else {
            setDuration(null);
        }
        const restoredFilters = {
            selectedGenres: restoredGenres,
            minYear: minYearParam ? Number(minYearParam) : 1990,
            maxYear: maxYearParam ? Number(maxYearParam) : new Date().getFullYear(),
            minDuration: minDurationParam ? Number(minDurationParam) : null,
            maxDuration: maxDurationParam ? Number(maxDurationParam) : null,
            rating: ratingParam ? Number(ratingParam) : 0,
            page: pageParam ? Number(pageParam) : 1
        };
        setAppliedFilters(restoredFilters);
        loadFilteredMovies(restoredFilters);
    },[searchParams])

    return(
        <section id="filter">
            <p id="filter__title">Universo Cinematográfico</p>
            <p id="filter__title__description">Explora nuestra selección de películas galardonadas, joyas independientes ocultas y grandes éxitos de taquilla de todas las generaciones.</p>
            <div id="filter__main-container">
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
                                    checked={duration === "less90"}
                                    onChange={() => handleDuration("less90")}/>
                                <span className="custom-checkbox">
                                    {duration === "less90" && <FaCheck />}
                                </span>
                                <span>&lt; 90 minutos</span>
                            </label>
                            <label className="duration-check">
                                <input type="checkbox" 
                                    checked={duration === "between90_120"}
                                    onChange={() => handleDuration("between90_120")}/>
                                <span className="custom-checkbox">
                                    {duration === "between90_120" && <FaCheck />}
                                </span>
                                <span> 90 - 120 minutos</span>
                            </label>
                            <label className="duration-check">
                                <input type="checkbox" 
                                    checked={duration === "more120"}
                                    onChange={() => handleDuration("more120")}/>
                                <span className="custom-checkbox">
                                    {duration === "more120" && <FaCheck />}
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
                    <button type="button"id="submit-filters" onClick={handleApplyFilters}>Filtrar <FaFilter /></button>
                </form>

                {movies !== null 
                    ?(<MovieGrid movies={movies} page={page} sectionWidth={"calc(100%-2rem)"} onPageChange={controlPage}/>)
                    : <LoadingScreen message={"Usa los filtros para cargar películas..."}/>
                }
            </div>
        </section>
    );
}

export default Filter;