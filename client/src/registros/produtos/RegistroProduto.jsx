import { useState } from "react";
import { Link } from "react-router-dom";
import "../registro.css";
import Api from "../../config/Api";
import Header from "../../components/header";
import Column from "../../components/Column";

function RegisterProduct() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    try {
      Api.post("produtos", {
        name: values.name,
        cost: values.cost,
        category: values.category,
        amount: values.amount,
      }).then((response) => {
        console.log(response);
      });

      alert("Enviado");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header />

      <div className="pag">
        <Column />

        <div className="container-register">

          <h1>Produto:</h1>

          <input
            type="text"
            name="name"
            placeholder="Nome do produto"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="cost"
            placeholder="Preço do produto"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="category"
            placeholder="Categoria do produto"
            onChange={handleChangeValues}
          />
          <input
            type="number"
            name="amount"
            placeholder="Quantidade"
            onChange={handleChangeValues}
          />

          <Link to="/">
            <button onClick={() => handleClickButton()}>
              Cadastrar produto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterProduct;
