import Header from "../components/header";
import Column from "../components/Column";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Configuracoes() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      const userInfo = [decodedToken.email, decodedToken.id];
      setUser(userInfo);
    }
  }, []);

  return (
    <>
      <Header />

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
