import Home from "../../Home";
import "./Chatbot.css";
import { useEffect, useState } from "react";



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
        </ul>
      </div>
    </>
  );
}

export default Chatbot;
