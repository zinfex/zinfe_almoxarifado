import { FaBox } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineGridView } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdLiveHelp } from "react-icons/md";

function Column() {
    return (
        <div className="column">
            <div className="image">
                <img src="https://i.pinimg.com/originals/ba/8c/ab/ba8cab6e8f60ff66a8c50674d9ac0e25.png"/>
            </div>

            <Link to='/'><button><MdOutlineGridView />   Dashboard</button></Link>
            <Link to='/caixa'><button><FaCashRegister />   Caixa</button></Link>
            <Link to='/cadastrarproduto'><button><FaBox />   Cadastro de produtos</button></Link>
            <Link to='/cadastrarcliente'><button><FaUser />   Cadastro de clientes</button></Link>
            <Link to='/configuracoes'><button><IoMdSettings />   Configurações</button></Link>

            <div className="column-forms">
                <Link to='/suporte' className="column-button">
                    <MdLiveHelp /> Suporte
                </Link>
    
                <Link to='/login' className="column-button">
                    <FaUser /> Login
                </Link>
            </div>
        </div>
    )
}

export default Column