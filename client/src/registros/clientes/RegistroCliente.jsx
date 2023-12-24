import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../registro.css";
import Api from "../../config/Api";
import Header from "../../components/header";
import Column from "../../components/Column";

function RegisterClient() {
  const [formData, setFormData] = useState();
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    try {
      Api.post("clientes", {
        nameclient: values.nameclient,
        email: values.email,
        cpf: values.cpf,
        cep: values.cep,
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
          <h1>Cliente:</h1>

          <input
            type="text"
            name="nameclient"
            value={formData}
            placeholder="Nome completo do cliente"
            className="register"
            onChange={handleChangeValues}
          />
          <input
            type="email"
            name="email"
            value={formData}
            placeholder="Email do cliente"
            className="register"
            onChange={handleChangeValues}
          />

          <input
            type="number"
            name="cpf"
            value={formData}
            placeholder="CPF do cliente"
            className="register"
            onChange={handleChangeValues}
          />

          <input
            type="number"
            name="cep"
            value={formData}
            placeholder="CEP do cliente"
            className="register"
            onChange={handleChangeValues}
          />

          <Link to="/">
            <button onClick={() => handleClickButton()}>
              Cadastrar cliente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterClient;
