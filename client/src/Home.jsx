import Produtos from "./tabelas/produtos"
import Clientes from "./tabelas/clientes";
import Header from "./components/header";
import Column from "./components/Column";

function Home() {
    const token = localStorage.getItem('token')
    if(token == (null || undefined)) {
        location.href= '/login'
    } 
    
    return(
        <>
            < Header />
            <div className="container">
                <Column />

                <div className="tabelas">
                    <Produtos />
                    <Clientes />
                </div>
            </div>
        </>
    )
}

export default Home;