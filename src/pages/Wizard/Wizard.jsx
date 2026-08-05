import "./Wizard.css"
import MoodStep from "./steps/MoodStep";
import TimeStep from "./steps/TimeStep";
import CompanyStep from "./steps/CompanyStep";
import GenresStep from "./steps/GenresStep";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx"
import { getRecommendedMovie } from "../../services/tmdb.js";

function Wizard(){
    const navigate = useNavigate();
    const [step, setStep] = useState(0)
    const [movie, setMovie] = useState()
    const [answers, setAnswers] = useState({
        mood: null,
        time: null,
        company: null
    });
    const moodGenres = {
        happy: [
            35,     // Comedia
            12,     // Aventura
            16,     // Animación
            10751,  // Familia
            14      // Fantasía
        ],
        sad: [
            18,     // Drama
            10749,  // Romance
            10402,  // Música
            36,     // Historia
            99      // Documental
        ],
        thrilled: [
            28,     // Acción
            53,     // Suspenso
            80,     // Crimen
            878,    // Ciencia ficción
            27      // Terror
        ],
        relaxed: [
            14,     // Fantasía
            12,     // Aventura
            16,     // Animación
            99,     // Documental
            10751   // Familia
        ]
    };
    const companyGenres = {
        alone: [],

        partner: [
            10749,  // Romance
            35,     // Comedia
            18      // Drama
        ],

        friends: [
            35,     // Comedia
            28,     // Acción
            53,     // Suspense
            12,     // Aventura
            27      // Terror
        ],

        family: [
            10751,  // Familia
            16,     // Animación
            12,     // Aventura
            14,     // Fantasía
            35      // Comedia
        ]
    };
    function buildFilters() {
        let minRuntime = null;
        let maxRuntime = null;

        switch (answers.time) {
            case "less90":
                maxRuntime = 89;
                break;

            case "between90_120":
                minRuntime = 90;
                maxRuntime = 120;
                break;

            case "more120":
                minRuntime = 121;
                break;
            case "any":
                minRuntime = 0;
                maxRuntime = 99999;
        }

        const genres = [
            ...new Set([
                ...moodGenres[answers.mood],
                ...companyGenres[answers.company]
            ])
        ];

        return {
            genres,
            minRuntime,
            maxRuntime
        };
    }
    function getRandomGenres(genres) {
        const shuffled = [...genres].sort(() => Math.random() - 0.5);

        return shuffled.slice(0, 2);
    }

    function updateAnswers(key, value){
        setAnswers(prev => ({
            ...prev,
            [key]: value
        }))
    }
    function renderStep() {
        switch (step) {
                case 0:
                    return <MoodStep answers={answers} updateAnswers={updateAnswers}/>;
                    break;
                case 1:
                    return <TimeStep answers={answers} updateAnswers={updateAnswers}/>;
                    break;
                case 2:
                    return <CompanyStep answers={answers} updateAnswers={updateAnswers}/>;
                    break;
                default:
                    return null;
        }
    }

    async function handleStep(){
        switch (step){
            case 0:
                if(answers.mood === null) return;
                break;
            case 1:
                if(answers.time === null) return;
                break;
            case 2:
                if(answers.company === null) return;
                const filters = buildFilters();
                const selectedGenres = getRandomGenres(filters.genres);
                const movieId = await getRecommendedMovie(
                    selectedGenres,
                    filters.minRuntime,
                    filters.maxRuntime
                );
                navigate(`/movie/${movieId}`);
                return;
            default:
                break;
        }
        setStep(prev => prev + 1);
    }
    return(
        <>
        <section id="wizard-section">
            <div id="wizard__header">
                <p id="wizard__header__step">Paso {step > 2 ? 3 : step+1} de 3</p>
                <p id="wizard__header__progress">{step !==3 ? step * (Math.floor((1/3)*100)) : 100}% completado</p>
                <div id="wizard__header__progress-bar__back">
                    <div id="wizard__header__progress-bar__front" style={{width:`${step !== 3 ? step * (Math.floor((1/3)*100)): 100}%`}}></div>
                </div>
            </div>
            <div id="wizard__main">
                {renderStep()}
            </div>
            <div id="wizard__buttons">
                {step > 0 && step < 3
                    ? <button className="step-button" id="wizard__previous-step" onClick={() => setStep(prev => prev - 1)}><FaArrowLeft />Paso anterior</button>
                    : null
                }
                {step >= 0 && step < 3
                ? <button className="step-button" id="wizard__next-step" onClick={handleStep}>{step !== 2 ?"Siguiente paso": "Encontrar mi película"}<FaArrowRight /></button>
                : null}
                {/*step===3
                    ? <button id="wizard__skip-step" onClick={() => setStep(prev => prev + 1)}>Saltar paso</button>
                    : null
                */}
                {
                    step === 3
                    ? <LoadingScreen message={"Buscando tu película"} />
                    : null
                }
            </div>
        </section>
        </>
    );
}

export default Wizard;