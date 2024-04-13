import React from 'react';
import './Producto.css'; // Importa los estilos CSS
import { Card, Button } from 'react-bootstrap'; // Importa Card y Button de Bootstrap

function Producto(props) {
  const { id, nombre, imagen, precio, onAgregarAlCarrito } = props;

  const handleClick = () => {
    onAgregarAlCarrito(id);
  };

  return (
    <Card className="producto"> {/* Utiliza la clase .card de Bootstrap */}
      <Card.Img variant="top" src={imagen} alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: {precio}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;
