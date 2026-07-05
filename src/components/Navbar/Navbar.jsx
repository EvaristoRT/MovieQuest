import { TiThMenu } from "react-icons/ti";
import SideMenu from "./SideMenu";
import "./Navbar.css";
import { useState, useEffect } from "react";
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <li className="active">Inicio</li>
                <li>Filtrar</li>
                <li>Recomendación</li>
                <li>Sorprendeme</li>
                <li>Ajustes</li>
            </ul>



            {/*Movile section*/}
            <button onClick={toggleMenu}className="side-menu__open"><TiThMenu size={30} color="#FFB3B6"/></button>
            <SideMenu closeMenu={() => setIsMenuOpen(false)} isOpen={isMenuOpen}/>
        </nav>
        </>

    );
}

export default Navbar;