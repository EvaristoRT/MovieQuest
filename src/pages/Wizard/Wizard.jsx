import "./Wizard.css"
import MoodStep from "./steps/MoodStep";
import TimeStep from "./steps/TimeStep";
import CompanyStep from "./steps/CompanyStep";
import GenresStep from "./steps/GenresStep";
import { useEffect, useState } from "react";

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

                case 1:
                    return <TimeStep />;

                case 2:
                    return <CompanyStep />;

                case 3:
                    return <GenresStep />;

                default:
                    return null;
        }
    }
    return(
        <>
        <section id="wizard-section">
            <div id="wizard__header">
                <p id="wizard__header__step">Paso {step+1} de 4</p>
                <p id="wizard__header__progress">{step * 25}% completado</p>
                <div id="wizard__header__progress-bar__back">
                    <div id="wizard__header__progress-bar__front" style={{width:`${step * 25}%`}}></div>
                </div>
            </div>
            <div id="wizard__main">
                {renderStep()}
            </div>
        </section>
        </>
    );
}

export default Wizard;