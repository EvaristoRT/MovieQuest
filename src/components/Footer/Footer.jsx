import "./Footer.css"
import { PiFilmSlateBold } from "react-icons/pi";
function Footer(){
    return(
        <>
        <div id="footer__column__page">
            <PiFilmSlateBold id="footer__column__icon"/>
            <p id="footer__column__logo">MovieQuest</p>
            <p id="footer__column__description">Ayudando a los usuarios a descubrir <span>su siguiente película favorita</span></p>
        </div>
        <div id="footer__column__links">
            <div className="footer__column__links__column">
                <ul className="footer__column__links__wrapper">
                    <li className="footer__column__links__column__title">Navegación</li>
                    <li className="footer__column__links__column__link">Inicio</li>
                    <li className="footer__column__links__column__link">Filtrar</li>
                    <li className="footer__column__links__column__link">Recomendación</li>
                    <li className="footer__column__links__column__link">Sorprendeme</li>
                </ul>
            </div>
            <div className="footer__column__links__column">
                <ul className="footer__column__links__wrapper">
                    <li className="footer__column__links__column__title">Recursos</li>
                    <li className="footer__column__links__column__link">Acerca</li>
                    <li className="footer__column__links__column__link"><a href="https://github.com/EvaristoRT/MovieQuest">Github</a></li>
                </ul>
            </div>
        </div>
        <div id="footer__rights">
            <p>© 2026 MovieQuest.</p>
        </div>
        </>
    );
};

export default Footer;