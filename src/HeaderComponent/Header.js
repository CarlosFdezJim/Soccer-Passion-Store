import React from 'react';
import './Header.css';
import imagenlogo from './AssetsLogo/logo.png';

function Header({ abrirModalCarrito }) {

    const handleClick = (event) => {
      event.preventDefault(); // Evita que el enlace cambie de página
      abrirModalCarrito(); // Llama a la función abrirModalCarrito
    };
    const scrollToInicio = (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      const inicioSection = document.getElementById('inicio');
      inicioSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    };
    const scrollToProductos = (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      const productosSection = document.getElementById('listadoproductos');
      productosSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    };
    const scrollToContacto = (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      const contactoSection = document.getElementById('contacto');
      contactoSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
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
          <li><a href="#inicio" onClick={scrollToInicio}>Inicio</a></li>
            <li><a href="#listadoproductos" onClick={scrollToProductos}>Productos</a></li>
            <li><a href="#contacto" onClick={scrollToContacto}>Contacto</a></li>
            <li><a href="#" onClick={handleClick}>Carrito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
