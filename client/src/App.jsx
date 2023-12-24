import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './login/Login';
import RegisterProduct from './registros/produtos/RegistroProduto';
import RegisterClient from './registros/clientes/RegistroCliente';
import Caixa from './caixa/Caixa';
import RegistroVenda from './registros/venda/RegistroVenda';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cadastrarproduto' element={<RegisterProduct />}/>
        <Route path='/cadastrarcliente' element={<RegisterClient />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/caixa' element={<Caixa />}/>
        <Route path='/venda' element={<RegistroVenda />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;