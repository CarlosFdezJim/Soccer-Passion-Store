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
      <Card.Img variant="top" src="https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/8c1d2c81075bec58441bdd78446b18bb/f/6/f6dc6b4dfe85bd5b4860e9b8ca30400da4948a26fa1f4c4870cd22eaf513e712.jpeg" alt={nombre} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: {precio}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;
