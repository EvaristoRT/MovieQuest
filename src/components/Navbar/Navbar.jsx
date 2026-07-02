import { TiThMenu } from "react-icons/ti";
import SideMenu from "./SideMenu";
import "./Navbar.css";
import { useState } from "react";
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return(
        <>
        <nav>
            <h1>MovieQuest</h1>
            <button onClick={toggleMenu}className="side-menu__open"><TiThMenu size={30} color="#FFB3B6"/></button>
            <SideMenu closeMenu={() => setIsMenuOpen(false)} isOpen={isMenuOpen}/>
        </nav>
        </>

    );
}

export default Navbar;