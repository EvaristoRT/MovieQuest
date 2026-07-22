import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaFilter, FaQuestion, FaDiceSix } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
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
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "active" : ""} 
                        onClick={closeMenu}><AiFillHome />Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/filter" 
                        className={({ isActive }) => isActive ? "active" : ""} 
                        onClick={closeMenu}><FaFilter />Filtrar
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/wizard" 
                        className={({ isActive }) => isActive ? "active" : ""} 
                        onClick={closeMenu}><FaQuestion />Recomendación
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/random" 
                        className={({ isActive }) => isActive ? "active" : ""} 
                        onClick={closeMenu}><FaDiceSix />Sorprendeme
                    </NavLink>
                </li>
                <li id="side-menu__mode"><FaGear />Modo Oscuro 
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