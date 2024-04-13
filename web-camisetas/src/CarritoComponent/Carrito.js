import React, { useState } from 'react';

import './Carrito.css'; // Estilos del carrito


function Carrito({ carrito }) {
  const [productosCarrito] = useState([]);
  

  const hacerPedido = () => {
    // Aquí podrías implementar lógica para enviar el pedido
    // Por ahora, simplemente redirigimos al usuario al componente de Contacto
    // Esto asume que tienes una ruta definida para el componente de Contacto en tu archivo de enrutamiento
    // Asegúrate de importar Link de react-router-dom
  };

  return (
    <div className="carrito">
      <h2>Carrito de compras</h2>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>{item.nombre} - ${item.precio}</li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
