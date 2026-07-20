import "./LoadingScreen.css";
import { FaPlay } from "react-icons/fa";
function LoadingScreen(){
    return(
        <section className="loading-screen">
            <div className="loading-screen__loader">
                <div className="loading-screen__outer-ring"></div>

                <div className="loading-screen__film">

                    <div className="loading-screen__play"><FaPlay /></div>

                    <div className="loading-screen__holes">
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="loading-screen__hole"
                            />
                        ))}
                    </div>

                </div>
            </div>

            <p className="loading-screen__text">
                Cargando tu siguiente aventura...
            </p>

            <div className="loading-screen__progress">
                <div className="loading-screen__progress-bar">
                    <div className="loading-screen__progress-fill"></div>
                </div>
            </div>
        </section>
    );
}

export default LoadingScreen;