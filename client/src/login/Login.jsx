import Axios from "axios";
import "./index.css";
import { useState } from "react";
import validarEmail from "../validations/Email";

function Login() {
  const [values, setValues] = useState();
  const [formData, setFormData] = useState();
  
  const handleChangeValues = (value) => {
    setFormData()
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  function SignIn() {
    try {
      Axios.post("http://localhost:3001/usuarios/login", {
        email: values.email,
        senha: values.senha,
      })
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);

          alert("Bem vindo");
          location.href = "/";
        })
        .catch(console.log);
    } catch (e) {
      setFormData('')
      console.log(e);
    }
  }

  function SignUp() {
    if (validarEmail(values.email) == null) {
      try {
        Axios.post("http://localhost:3001/usuarios", {
          email: values.email,
          senha: values.senha,
        }).then((res) => {
          console.log(res);
          alert("Conta cadastrada");
        });
        
        setFormData('')
      } catch (e) {
        console.log(e);
      }
  
      console.log(values);
    } else {
      alert("Insira um e-mail válido")
    }
  }


  return (
    <div className="container-login">
      <h1 className="titulo-login">Entre na sua conta e veja seu estoque</h1>

      <div className="inputs-login">
        <input
          value={formData}
          className="input-login"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChangeValues}
        />

        <input
          value={formData}
          className="input-login"
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={handleChangeValues}
        />
      </div>

      <div className="buttons-login">
        <button onClick={SignIn}>Entrar</button>
        <button onClick={SignUp}>Criar uma conta</button>
      </div>

      <div className="img-container">
        <h1>
          Gerencie seu estoque <br /> da melhor forma
        </h1>
      </div>
    </div>
  );
}

export default Login;
