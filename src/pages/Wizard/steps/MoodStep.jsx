import { IoHappyOutline } from "react-icons/io5";
import { PiSmileySadBold } from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";
import { FaCouch } from "react-icons/fa";
function MoodStep({answers, updateAnswers}){
    return(
        <>
        <p className="step__title">¿Cómo te sientes hoy?</p>
        <p className="step__description">Encontraremos la película que se adape a tu estado de ánimo</p>
        <div className="step__option__container">
            <label className="step__option">
                <input 
                    type="radio"
                    name="mood"
                    checked={answers.mood === "happy"}
                    onChange={()=>updateAnswers("mood", "happy")}
                />
                <div className="step__option__card">
                    <IoHappyOutline />
                    <p>Felíz</p>
                </div>
            </label>
            <label className="step__option">
                <input 
                    type="radio"
                    name="mood"
                    checked={answers.mood === "sad"}
                    onChange={()=>updateAnswers("mood", "sad")}
                />
                <div className="step__option__card">
                    <PiSmileySadBold />
                    <p>Triste</p>
                </div>
            </label>
            <label className="step__option">
                <input 
                    type="radio"
                    name="mood"
                    checked={answers.mood === "thrilled"}
                    onChange={()=>updateAnswers("mood", "thrilled")}
                />
                <div className="step__option__card">
                    <IoIosRocket />
                    <p>Emocionado</p>
                </div>
            </label>
            <label className="step__option">
                <input 
                    type="radio"
                    name="mood"
                    checked={answers.mood === "relaxed"}
                    onChange={()=>updateAnswers("mood", "relaxed")}
                />
                <div className="step__option__card">
                    <FaCouch />
                    <p>Relajado</p>
                </div>
            </label>
        </div>
        </>
    );
}

export default MoodStep;