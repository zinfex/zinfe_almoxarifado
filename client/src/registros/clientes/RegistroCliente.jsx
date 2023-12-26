import { useState } from "react";
import { Link } from "react-router-dom";
import "../registro.css";
import Api from "../../config/Api";
import Column from "../../components/Column";
import validarEmail from "../../validations/Email";

function RegisterClient() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    if(validarEmail(values.email) == null) {
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
        window.location.href = '/'
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('Insira um e-mail válido')
    }
  };

  return (
    <div>

      <div className="pag">
        <Column />

        <div className="container-register">
          <h1>Cliente:</h1>

          <input
            type="text"
            name="nameclient"
            placeholder="Nome completo do cliente"
            className="register"
            onChange={handleChangeValues}
          />
          <input
            type="email"
            name="email"
            placeholder="Email do cliente"
            className="register"
            onChange={handleChangeValues}
          />

          <input
            type="number"
            name="cpf"
            placeholder="CPF do cliente"
            className="register"
            onChange={handleChangeValues}
          />

          <input
            type="number"
            name="cep"
            placeholder="CEP do cliente"
            className="register"
            onChange={handleChangeValues}
          />

          <button onClick={() => handleClickButton()}>
            Cadastrar cliente
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterClient;
