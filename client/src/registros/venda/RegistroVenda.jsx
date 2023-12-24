import "../registro.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Api from "../../config/Api";
import Header from "../../components/header";
import Column from "../../components/Column";

function RegistroVenda() {
  const [listClients, setListClients] = useState();
  const [listProducts, setListProducts] = useState();

  const [search, setSearch] = useState({ client: "", product: "" });
  const [values, setValues] = useState();

  const searchProducts = search.product.length
    ? listProducts.filter((product) => product.name.includes(search.product))
    : listProducts;
  const searchClients = search.client.length
    ? listClients.filter((client) => client.nameclient.includes(search.client))
    : listClients;

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    try {
      Api.post("vendas", {
        cliente_id: values.cliente,
        produto_id: values.produto,
        cost: values.cost,
        data_venda: new Date(),
      }).then((res) => {
        console.log(res);
      });

      Api.put("vendas/" + values.produto);

      alert("enviado");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Api.get("clientes").then((res) => {
      setListClients(res.data);
    });

    Api.get("produtos").then((res) => {
      setListProducts(res.data);
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="pag">
        <Column />

        <div className="container-register">
          <h1>Cadastro de vendas</h1>

          <input
            type="number"
            name="cliente"
            placeholder="ID do cliente"
            onChange={handleChangeValues}
          />

          <input
            type="number"
            name="produto"
            placeholder="ID do produto"
            onChange={handleChangeValues}
          />

          <input
            type="number"
            name="cost"
            placeholder="Valor da venda"
            onChange={handleChangeValues}
          />

          <Link to="/">
            <button onClick={() => handleClickButton()}>Realizar venda</button>
          </Link>

          <div className="tables">
            <div>
              <h2>Clientes:</h2>
              <input
                type="search"
                placeholder="Pesquisar nome"
                className="searchBox"
                value={search.client}
                onChange={(e) =>
                  setSearch((oldState) => ({
                    ...oldState,
                    client: e.target.value,
                  }))
                }
              />

              {typeof listClients !== "undefined" &&
                searchClients.map((values) => {
                  return (
                    <p key={values.nameclient}>
                      ID: {values.id} - {values.nameclient}
                    </p>
                  );
                })}
            </div>

            <div>
              <h2>Produtos:</h2>
              <input
                type="search"
                className="searchBox"
                placeholder="Pesquisar nome"
                value={search.product}
                onChange={(e) =>
                  setSearch((oldState) => ({
                    ...oldState,
                    product: e.target.value,
                  }))
                }
              />

              {typeof listProducts !== "undefined" &&
                searchProducts.map((values) => {
                  if (values.amount > 0) {
                    return (
                      <p key={values.name}>
                        ID: {values.id} - {values.name} - R${values.cost} - (
                        {values.amount})
                      </p>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroVenda;
