import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaSearch, FaQuestion, FaDiceSix } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
function SideMenu({ closeMenu, isOpen }){
    return(
        <div className={`side-menu ${isOpen ? "open" : ""}`}>
            <button onClick={closeMenu}className="side-menu__close">
                <IoClose size={30} color="#E5BDBE"/>
            </button>
            <ul className="side-menu__links">
                <li className="active"><AiFillHome />Inicio</li>
                <li><FaSearch/>Buscar</li>
                <li><FaQuestion />Recomendación</li>
                <li><FaDiceSix />Sorprendeme</li>
                <li><FaGear />Ajustes</li>
            </ul>
        </div>
    );
}

export default SideMenu;