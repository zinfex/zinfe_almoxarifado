import { Link } from "react-router-dom";
import { MdLiveHelp } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Header() {
    return (
        <header>
            <h1>ZINFE's ALMOXARIFADO</h1>
    
            <div className="header-forms">
                <Link to='/suporte' className="header-button">
                    <MdLiveHelp /> Suporte
                </Link>
    
                <Link to='/login' className="header-button">
                    <FaUser /> Login
                </Link>
            </div>
        </header>
        )
}

export default Header