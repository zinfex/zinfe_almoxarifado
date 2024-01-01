import Home from "../../Home";
import "./Chatbot.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"



function Chatbot() {
  return (
    <>
      <Home />

      

      <div className="chatbot">
        <span className="title">Suporte</span>

        <ul className="botsay">
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/8649/8649607.png" />
            <span className="say">Qual sua dúvida?</span>
          </li>
          
          <button>Como funciona</button>
          <button>Quem somos</button>
          <button>Entrar em contato</button>
        </ul>

        <Link to="/"><button>Fechar</button></Link>
      </div>
    </>
  );
}

export default Chatbot;
