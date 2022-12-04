import React, { useState } from "react";
import "./style.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href='/'><p>Grupo World Beauty </p></a>
          </div>
        
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
             <a href='/lista_cliente'><p>Listar Cliente</p></a>
            </li>
            <li className="nav-item">
             <a href='/lista_produto'><p>Listar Produto</p></a>
            </li>
            <li className="nav-item">
             <a href='/lista_servico'><p>Listar Servico</p></a>
            </li>
            <li className="nav-item">
             <a href='/cadastro_cliente'><p>Cadastro Cliente</p></a>
            </li>
            <li className="nav-item">
             <a href='/cadastro_produto'><p>Cadastro Produto</p></a>
            </li>
             <li className="nav-item">
             <a href='/cadastro_servico'><p>Cadastro Servico</p></a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar