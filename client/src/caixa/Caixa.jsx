import "./caixa.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../config/Api";
import Column from "../components/Column";

function Caixa() {
  const [listVendas, setListVendas] = useState();
  const [listClientes, setListClientes] = useState()

  const [listTot, setListTots] = useState()
  
  useEffect(() => {
    Api.get("vendas").then((res) => {
      setListVendas(res.data);
    });

    Api.get("clientes").then((res) => {
      setListClientes(res.data)
    })

    setListTots([listVendas, listClientes])
  }, []);
  console.log(listTot)

  
  function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div>
      <div className="pag">
        <Column />

        <div className="body">
          <div className="relatorys">
            <h2>Histórico de vendas:</h2>
            <br /> <br />
            <table>
              <thead>
                <tr>
                  <th>VALOR</th>
                  <th>CLIENTE</th>
                  <th>PRODUTO</th>
                  <th>DATA</th>
                </tr>
              </thead>

              <tbody>
                {typeof listVendas !== "undefined" &&
                  listVendas.map((values) => {
                    const dataFormatada = new Intl.DateTimeFormat(
                      "pt-BR"
                    ).format(new Date(values.data_venda));

                    return (
                      <tr>
                        <td>{formatarMoeda(values.cost)}</td>
                        <td>id: {values.cliente_id}</td>
                        <td>id: {values.produto_id}</td>
                        <td>{dataFormatada}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <Link to="/venda">
              <button className="cadastrar">Cadastrar venda</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caixa;
