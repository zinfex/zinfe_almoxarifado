import { FaBox } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineGridView } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Column() {
    return (
        <div className="column">
            <Link to='/'><button><MdOutlineGridView />   Visualizar</button></Link>
            <Link to='/caixa'><button><FaCashRegister />   Caixa</button></Link>
            <Link to='/cadastrarproduto'><button><FaBox />   Cadastro de produtos</button></Link>
            <Link to='/cadastrarcliente'><button><FaUser />   Cadastro de clientes</button></Link>
            <Link to='/configuracoes'><button><IoMdSettings />   Configurações</button></Link>
        </div>
    )
}

export default Column