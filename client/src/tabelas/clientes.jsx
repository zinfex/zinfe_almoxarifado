import { useState, useEffect } from "react";
import Api from "../config/Api";

function Clientes() {
  const [listClients, setListClients] = useState();

  useEffect(() => {
    Api.get("clientes").then((response) => {
      console.log(response);
      setListClients(response.data);
    });
  }, []);

  function buscarCep(cep) {
    window.location.href = `https://viacep.com.br/ws/${cep}/json/`;
  }

  function formatarCep(cep) {
    // Remove caracteres não numéricos
    const cepNumerico = cep.replace(/\D/g, '');

    // Adiciona o traço se o CEP for longo o suficiente
    if (cepNumerico.length > 5) {
      return cepNumerico.substring(0, 5) + '-' + cepNumerico.substring(5, 8);
    }
    
    return cepNumerico;
  }

  return (
    <div className="tabela">
      <h2>Clientes:</h2>

      <div></div>

      {typeof listClients !== "undefined" &&
        listClients.map((values) => {
          return (
            <div className="box-info">
              <div className="infos">
                <p>Nome: {values.nameclient}</p>
                <p>Email: {values.email}</p>
                <p>CPF: {values.cpf}</p>
                <p>CEP: {formatarCep(values.cep)}</p>
                <button
                  className="view-end"
                  onClick={() => buscarCep(values.cep)}
                >
                  Ver endereço
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Clientes;
