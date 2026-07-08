import"./AboutUs.css";
import whatIsImage from "../../assets/images/whatIs.png"
import whatIsImageLight from "../../assets/images/whatIsLight.png"
import tmdbLogo from "../../assets/images/tmdbLogo.svg"
import aboutDark from "../../assets/images/heroAboutUs.png"
import aboutLight from "../../assets/images/heroAboutUsLight.png"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"
import { BsStars } from "react-icons/bs";
import { MdOutlineVideoLibrary, MdOutlineQueryStats } from "react-icons/md";
import { FaMedal, FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaSave, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiReactrouter, SiModelcontextprotocol, SiVite, SiThemoviedatabase } from "react-icons/si";

function AboutUs(){
    const { darkMode } = useContext(ThemeContext);
    return(
        <>
            <section id="hero" style={{
                backgroundImage: `
                    linear-gradient(transparent 0%,
                    var(--background-primary-2) 30%,
                    var(--background-primary) 100%),
                    url(${darkMode ? aboutDark : aboutLight})
                `
            }}>
                <p id="hero__title">Acerca de <span>MovieQuest</span></p>
                <p id="hero__description">Ayudando a los amantes de las películas a pasar menos tiempo buscando y más disfrutando</p>
            </section>

            <section id="what-is">
                <div id="what-is__info">
                    <p id="what-is__title">¿Qué es <span>MovieQuest?</span> <br /> <br /></p>
                    <p id="what-is__description">MovieQuest es una plataforma de descubrimiento de películas diseñada para ayudarte a decidir qué ver. En lugar de limitarse a mostrar un catálogo, combina información de TMDB con herramientas interactivas para ofrecer recomendaciones personalizadas según tus gustos, el tiempo disponible y el tipo de experiencia que buscas. <br /> <br />
                    Organiza tu biblioteca con listas de favoritos, películas por ver y colecciones personalizadas. Además, consulta estadísticas sobre tus hábitos de visualización, acepta desafíos cinematográficos y descubre nuevos títulos mediante funciones como recomendaciones inteligentes y el modo "Sorpréndeme", convirtiendo la elección de una película en una experiencia mucho más entretenida.</p>
                    <button id="what-is__button">Empieza a explorar</button>
                </div>
                <img src={darkMode ? whatIsImage : whatIsImageLight} alt="What is image" id="what-is__image"/>
            </section>
            <section id="features">
                <p id="features__title">Características principales</p>
                <div id="feature__item__wrapper">
                    <div className="feature__item">
                        <BsStars className="feature__item__icon"/>
                        <p className="feature__item__title">Recomendaciónes Inteligentes</p>
                        <p className="feature__item__description">Descubre películas según tu estado de ánimo, el tiempo disponible y tus géneros favoritos.</p>
                    </div>
                    <div className="feature__item">
                        <MdOutlineVideoLibrary className="feature__item__icon"/>
                        <p className="feature__item__title">Biblioteca Personal</p>
                        <p className="feature__item__description">Guarda tus películas favoritas, crea una lista para ver más tarde y lleva un registro de las que ya has visto, todo en un solo lugar.</p>
                    </div>
                    <div className="feature__item">
                        <FaMedal className="feature__item__icon"/>
                        <p className="feature__item__title">Retos de Películas</p>
                        <p className="feature__item__description">Completa desafíos temáticos y descubre joyas ocultas de la historia del cine.</p>
                    </div>
                    <div className="feature__item">
                        <MdOutlineQueryStats className="feature__item__icon"/>
                        <p className="feature__item__title">Mis estadísticas</p>
                        <p className="feature__item__description">Visualiza tus géneros favoritos, el tiempo que has visto películas, las décadas que más disfrutas y tus hábitos de visualización.</p>
                    </div>
                </div>
            </section>
            <section id="stack">
                <div id="stack__wrapper">
                    <p id="stack__title">Construido con</p>
                    <div id="stack__technologies__wrapper">
                        <p id="react" className="stack__row__element"><FaReact />React</p>
                        <p id="react-router" className="stack__row__element"><SiReactrouter />React router</p>
                        <p id="context-api" className="stack__row__element"><SiModelcontextprotocol />Context API</p>
                        <p id="vite" className="stack__row__element"><SiVite />Vite</p>
                        <p id="javaScript" className="stack__row__element"><FaJsSquare />JavaScript(ES6+)</p>
                        <p id="css" className="stack__row__element"><FaCss3Alt />CSS3</p>
                        <p id="html" className="stack__row__element"><FaHtml5 />HTML5</p>
                        <p id="tmdb-api" className="stack__row__element"><SiThemoviedatabase />TMDB API</p>
                        <p id="local-storage" className="stack__row__element"><FaSave />Local Storage</p>
                        <p id="git" className="stack__row__element"><FaGitAlt />Git</p>
                        <p id="github" className="stack__row__element" style={
                            {
                                color: darkMode ? "#FFF" : "#000",
                                boxShadow: darkMode
                                ? "0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 20px rgba(255,255,255,.6)"
                                : "0 0 5px #000000, 0 0 10px #000000, 0 0 20px rgba(255,255,255,.6)"
                            }
                        }><FaGithub />Github</p>
                    </div>
                </div>
            </section>
            <section id="about-and-credits">
                <div className="about-and-credits__card">
                    <p className="about-and-credits__title">Sobre el Proyecto</p>
                    <p className="about-and-description">MovieQuest es un proyecto de portafolio diseñado para demostrar principios modernos de diseño UI/UX, una integración eficiente de APIs y sistemas de diseño responsivos. Representa el compromiso de crear experiencias cinematográficas centradas en el usuario, intuitivas y atractivas.</p>
                </div>
                <div className="about-and-credits__card">
                    <p className="about-and-credits__title">Datos y Créditos</p>
                    <p className="about-and-description">Esta aplicación utiliza la API de TMDB, pero no cuenta con el respaldo ni la certificación de TMDB.</p>
                    <img src={tmdbLogo} alt="" />
                </div>
            </section>
        </>
    );
};

export default AboutUs;