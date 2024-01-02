import "./index.css"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; 
import Column from "../components/coluna/Column";

function Configuracoes() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      setUser([decodedToken.email, decodedToken.id]);
    } catch(e) {
      console.log(e)
    }
  }, []);

  return (
    <>
      <div className="pag">
        <Column />

        <div className="container-config">
          Email da conta: {user[0]} <br />
          Id da conta: {user[1]}
        </div>
      </div>
    </>
  );
}

export default Configuracoes;
