import React from 'react';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroCliente from './components/cliente/cadastro_cliente/cadastroCliente';
import ListaCliente from './components/cliente/lista_cliente/lista_cliente';
import ListaProduto from './components/produto/lista_produto/lista_produto';
import CadasrtoProduto from './components/produto/cadastro_produto/cadastro_produto';
import ListaServico from './components/serviço/lista_serviço/lista_servico';
import CadastroServico from './components/serviço/cadastro_serviço/cadastro_servico';
import Editar from './components/cliente/editar_cliente/editar';
import EditarProduto from './components/produto/editar_produto/editar_produto';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editar_cliente" element={<Editar />} />
      <Route path="/editar_produto" element={<EditarProduto />} />
      <Route path="/cadastro_produto" element={<CadasrtoProduto />} />
      <Route path="/cadastro_cliente" element={<CadastroCliente />} />
      <Route path="/cadastro_servico" element={<CadastroServico/>} />
      <Route path="/Lista_cliente" element={<ListaCliente />} />
      <Route path="/Lista_produto" element={<ListaProduto/>} />
      <Route path="/Lista_servico" element={<ListaServico/>} />
    </Routes>
  </BrowserRouter>
  );
}



export default App;
