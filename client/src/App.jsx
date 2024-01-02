
import Chatbot from "./components/chatbot/Chatbot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login/Login";
import RegisterProduct from "./registros/produtos/RegistroProduto";
import RegisterClient from "./registros/clientes/RegistroCliente";
import Caixa from "./caixa/Caixa";
import RegistroVenda from "./registros/venda/RegistroVenda";
import Configuracoes from "./configuracoes/Configuracoes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrarproduto" element={<RegisterProduct />} />
        <Route path="/cadastrarcliente" element={<RegisterClient />} />
        <Route path="/login" element={<Login />} />
        <Route path="/caixa" element={<Caixa />} />
        <Route path="/venda" element={<RegistroVenda />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
