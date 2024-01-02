import "./Chatbot.css";

import { suporteToggle } from "./script";
import { IoIosArrowDropright } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Chatbot() {

  return (
    <div id="chatbot" className="chat-fechado">
      <span className="title">CHAT BOT</span>
      <a className="fecharChat" onClick={suporteToggle}><IoIosArrowDropright /></a>

      <ul className="botsay">
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/8649/8649607.png" />
          <span className="say">Qual sua dúvida?</span>
        </li>
        
        <div className="chat-buttons">
          <button>Como funciona?</button>
          <button>Quem somos?</button>
          <a href="https://whatsa.me/5585996989310/?t=Ol%C3%A1,%20gostaria%20de%20saber%20como%20funciona%20o%20sistema.">
            <button><FaWhatsapp/>{' '}Entrar em contato</button>
          </a>
          <a href="https://github.com/zinfex" target='_blank' >
            <button><FaGithub />{' '}Desenvolvedor</button> 
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Chatbot;
