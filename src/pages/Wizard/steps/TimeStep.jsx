import { FaBolt, FaFilm } from "react-icons/fa6";
import { FaRegClock, FaHourglass } from "react-icons/fa";
function TimeStep({answers, updateAnswers}){
    return(
            <>
            <p className="step__title">¿Cuánto tiempo tienes?</p>
            <p className="step__description">Encontraremos películas que se adapten al tiempo que tienes disponible</p>
            <div className="step__option__container">
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.time === "less90"}
                        onChange={()=>updateAnswers("time", "less90")}
                    />
                    <div className="step__option__card">
                        <FaBolt />
                        <p>Menos de 90 minutos</p>
                    </div>
                </label>
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.time === "between90_120"}
                        onChange={()=>updateAnswers("time", "between90_120")}
                    />
                    <div className="step__option__card">
                        <FaRegClock />
                        <p>Entre 90 y 120 minutos</p>
                    </div>
                </label>
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.time === "over120"}
                        onChange={()=>updateAnswers("time", "over120")}
                    />
                    <div className="step__option__card">
                        <FaHourglass />
                        <p>Más de 120 minutos</p>
                    </div>
                </label>
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.time === "any"}
                        onChange={()=>updateAnswers("time", "any")}
                    />
                    <div className="step__option__card">
                        <FaFilm />
                        <p>Cualquiér duración</p>
                    </div>
                </label>
            </div>
            </>
        );
}

export default TimeStep;