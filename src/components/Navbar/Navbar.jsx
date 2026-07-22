import { TiThMenu } from "react-icons/ti";
import SideMenu from "./SideMenu";
import "./Navbar.css";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return(
        <>
        <nav>
            {/*Desktop section*/}
            <h1>MovieQuest</h1>
            <ul className="nav-menu__links">
                <li>
                    <NavLink 
                        to="/"
                        end
                        className={({ isActive }) => isActive ? "active" : ""}>Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/filter"
                        className={({ isActive }) => isActive ? "active" : ""}>Filtrar
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/wizard"
                        className={({ isActive }) => isActive ? "active" : ""}>Recomendación
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/random"
                        className={({ isActive }) => isActive ? "active" : ""}>Sorprendeme
                    </NavLink>
                </li>
                <li><FaMoon /><label className="switch">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="slider"></span>
                    </label></li>
            </ul>



            {/*Movile section*/}
            <button onClick={toggleMenu}className="side-menu__open"><TiThMenu size={30}/></button>
            <SideMenu closeMenu={() => setIsMenuOpen(false)} isOpen={isMenuOpen}/>
        </nav>
        </>

    );
}

export default Navbar;