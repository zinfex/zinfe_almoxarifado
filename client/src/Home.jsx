import Produtos from "./tabelas/produtos";
import Clientes from "./tabelas/clientes";
import Column from "./components/coluna/Column";

function Home() {
  const token = localStorage.getItem("token");
  if (token == (null || undefined)) {
    location.href = "/login";
  }

  return (
    <div className="container">
      <Column />

      <div className="tabelas">
        <Produtos />
        <Clientes />
      </div>

    </div>
  );
}

export default Home;
