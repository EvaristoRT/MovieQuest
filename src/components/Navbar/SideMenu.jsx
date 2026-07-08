import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaFilter, FaQuestion, FaDiceSix } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
function SideMenu({ closeMenu, isOpen }){
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    return(
        <div className={`side-menu ${isOpen ? "open" : ""}`}>
            <button onClick={closeMenu}className="side-menu__close">
                <IoClose size={30} />
            </button>
            <ul className="side-menu__links">
                <li className="active"><Link to="/"><AiFillHome />Inicio</Link></li>
                <li><FaFilter />Filtrar</li>
                <li><FaQuestion />Recomendación</li>
                <li><FaDiceSix />Sorprendeme</li>
                <li><FaGear />Modo Oscuro 
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(prev => !prev)}
                        />
                        <span className="slider"></span>
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default SideMenu;