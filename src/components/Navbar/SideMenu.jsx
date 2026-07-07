import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaFilter, FaQuestion, FaDiceSix } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
function SideMenu({ closeMenu, isOpen }){
    return(
        <div className={`side-menu ${isOpen ? "open" : ""}`}>
            <button onClick={closeMenu}className="side-menu__close">
                <IoClose size={30} color="#E5BDBE"/>
            </button>
            <ul className="side-menu__links">
                <li className="active"><Link to="/"><AiFillHome />Inicio</Link></li>
                <li><FaFilter />Filtrar</li>
                <li><FaQuestion />Recomendación</li>
                <li><FaDiceSix />Sorprendeme</li>
                <li><FaGear />Ajustes</li>
            </ul>
        </div>
    );
}

export default SideMenu;