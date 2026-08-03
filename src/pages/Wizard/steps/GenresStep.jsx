import { GenresContext } from "../../../context/GenresContext";
import { useContext } from "react";
function GenresStep( { answers, updateAnswers }){
    const {genres} = useContext(GenresContext);
    function handleCheckAll() {
    if (answers.genres.length === genres.length) {
            updateAnswers("genres", []);
        } else {
            updateAnswers(
                "genres",
                genres.map(genre => genre.id)
            );
        }
    }
    function handleCheck(id){
        if(answers.genres.includes(id)){
            updateAnswers("genres", answers.genres.filter(genreId => genreId !== id));
        }else{
            updateAnswers("genres",[...answers.genres, id])
        }
    }
    
    return(
        <>
            <p className="step__title">Elige tus géneros favoritos</p>
            <p className="step__description">Puedes seleccionar uno o varios para personalizar aún más la recomendación.</p>
            <div id="genres-container">
                <div id="select-all-container">
                    <label key="check-all" className="genre-pill">
                        <input
                            type="checkbox"
                            name="all-genre"
                            id="all-genre"
                            checked={answers.genres.length === genres.length}
                            onChange={handleCheckAll}
                        />
                        <span>Seleccionar todos</span>
                    </label>
                </div>
                {
                    genres.map((genre, id)=>(
                        <label key={genre.id} className="genre-pill">
                            <input
                                type="checkbox"
                                name={genre.name}
                                id={`genre-${genre.id}`}
                                checked={answers.genres.includes(genre.id)}
                                onChange={()=>handleCheck(genre.id)}
                            />
                            <span>{genre.name}</span>
                        </label>
                    ))
                }
            </div>
        </>
    );
}

export default GenresStep;