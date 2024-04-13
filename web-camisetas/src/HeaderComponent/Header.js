import React from 'react';
import './Header.css';
import imagenlogo from './AssetsLogo/logo.png';

function Header({ abrirModalCarrito }) {

    const handleClick = (event) => {
        event.preventDefault(); // Evita que el enlace cambie de página
        abrirModalCarrito(); // Llama a la función abrirModalCarrito
        };
        
  return (
    <header>
      <div className="logo">
        <img src={imagenlogo} alt="Logo" />
      </div>
      <div className="tienda">
        <h1>Soccer Passion Store</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#" onClick={handleClick}>Carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
