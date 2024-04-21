// ListadoProductos.js

import React from 'react';
import './ListadoProductos.css';
import Producto from '../ProductoComponent/Producto';

function ListadoProductos({ productos, onAgregarAlCarrito }) {
  const agregarAlCarrito = (producto) => {
    onAgregarAlCarrito(producto);
  };

  return (
    <div className="productos-container" id="listadoproductos">
      <h2>Listado de Productos</h2>
      <div className="productos">
        {productos.map(producto => (
          <Producto
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
          onAgregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
}


export default ListadoProductos;
