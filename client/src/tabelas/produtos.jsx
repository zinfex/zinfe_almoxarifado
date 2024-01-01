import { useState, useEffect } from "react";
import Api from "../config/Api";

function Produtos() {
  const [listProducts, setListProducts] = useState();

  function getProdutos() {
    Api.get("produtos").then((response) => {
      console.log(response);
      setListProducts(response.data);
    });
  }
  useEffect(() => {
    getProdutos();
  }, []);

  function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (  
    <div className="tabela">
      <h2>Estoque:</h2>
      {typeof listProducts !== "undefined" &&
        listProducts.map((values) => {
          if (values.amount > 0) {
            return (
              <div className="box-info">
                <div className="infos">
                  <p>Nome: {values.name}</p>
                  <p>Preço: {formatarMoeda(values.cost)}</p>
                  <p>Categoria: {values.category}</p>
                  <p>Quantidade: {values.amount}</p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Produtos;
