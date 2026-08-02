import { FaUser, FaUsers, FaHeart } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
function CompanyStep({answers, updateAnswers}){
    return(
            <>
            <p className="step__title">¿Con quién vas a verla?</p>
            <p className="step__description">Ajustaremos las recomendaciones según la compañía</p>
            <div className="step__option__container">
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.company === "alone"}
                        onChange={()=>updateAnswers("company", "alone")}
                    />
                    <div className="step__option__card">
                        <FaUser />
                        <p>Solo</p>
                    </div>
                </label>
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.company === "partner"}
                        onChange={()=>updateAnswers("company", "partner")}
                    />
                    <div className="step__option__card">
                        <FaHeart />
                        <p>En pareja</p>
                    </div>
                </label>
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.company === "family"}
                        onChange={()=>updateAnswers("company", "family")}
                    />
                    <div className="step__option__card">
                        <FaPeopleRoof />
                        <p>En familia</p>
                    </div>
                </label>
                <label className="step__option">
                    <input 
                        type="radio"
                        name="mood"
                        checked={answers.company === "friends"}
                        onChange={()=>updateAnswers("company", "friends")}
                    />
                    <div className="step__option__card">
                        <FaUsers />
                        <p>Con amigos</p>
                    </div>
                </label>
            </div>
            </>
        );
}

export default CompanyStep;