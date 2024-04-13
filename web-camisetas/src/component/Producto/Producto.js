import React from 'react';
import './Producto.css'; // Importa los estilos CSS
import { Card, Button } from 'react-bootstrap'; // Importa Card y Button de Bootstrap

function Producto({ productos, onAgregarAlCarrito }) {
  return (
    <div className="productos">
      {productos.map(producto => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => onAgregarAlCarrito(producto.id)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default Producto;
