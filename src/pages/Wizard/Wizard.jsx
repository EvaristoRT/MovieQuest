import "./Wizard.css"
import MoodStep from "./steps/MoodStep";
import TimeStep from "./steps/TimeStep";
import CompanyStep from "./steps/CompanyStep";
import GenresStep from "./steps/GenresStep";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Wizard(){
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState({
        mood: null,
        time: null,
        company: null,
        genres: []
    })

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
                case 3:
                    return <GenresStep answers={answers} updateAnswers={updateAnswers}/>;
                    break;
                default:
                    return null;
        }
    }

    function handleStep(){
        switch (step){
            case 0:
                if(answers.mood === null) return;
                break;
            case 1:
                if(answers.time === null) return;
                break;
            case 2:
                if(answers.company === null) return;
                break;
            case 3:
                if(answers.genres.length === 0) return;
                break;
            default:
                break;
        }
        setStep(prev => prev + 1);
    }
    return(
        <>
        <section id="wizard-section">
            <div id="wizard__header">
                <p id="wizard__header__step">Paso {step > 3 ? 4 : step+1} de 4</p>
                <p id="wizard__header__progress">{step * 25}% completado</p>
                <div id="wizard__header__progress-bar__back">
                    <div id="wizard__header__progress-bar__front" style={{width:`${step * 25}%`}}></div>
                </div>
            </div>
            <div id="wizard__main">
                {renderStep()}
            </div>
            <div id="wizard__buttons">
                {step > 0
                    ? <button className="step-button" id="wizard__previous-step" onClick={() => setStep(prev => prev - 1)}><FaArrowLeft />Paso anterior</button>
                    : null
                }
                <button className="step-button" id="wizard__next-step" onClick={handleStep}>{step !== 3 ?"Siguiente paso": "Encontrar mi película"}<FaArrowRight /></button>
                {step===3
                    ? <button id="wizard__skip-step" onClick={() => setStep(prev => prev + 1)}>Saltar paso</button>
                    : null
                }
            </div>
        </section>
        </>
    );
}

export default Wizard;