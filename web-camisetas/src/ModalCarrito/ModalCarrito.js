import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalCarrito({ mostrar, cerrarModal, carrito }) {

    // Función para agrupar los productos por ID y contar la cantidad
    const productosAgrupados = carrito.reduce((acumulador, producto) => {
        // Verifica si ya existe un producto con el mismo ID en el acumulador
        const productoExistente = acumulador.find(item => item.id === producto.id);
        if (productoExistente) {
        // Si existe, incrementa la cantidad
        productoExistente.cantidad++;
        } else {
        // Si no existe, añade el producto al acumulador con cantidad 1
        acumulador.push({ ...producto, cantidad: 1 });
        }
        return acumulador;
    }, []);

    return (
        <Modal show={mostrar} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Carrito de compras</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {carrito.map(item => (
                <li key={item.id}>
                  <img src={item.imagen} alt={item.nombre} style={{ maxWidth: '50px' }} /> {/* Imagen pequeña */}
                  <div>
                    <h3>{item.nombre}</h3> {/* Nombre del producto */}
                    <p>Precio: ${item.precio}</p> {/* Precio del producto */}
                  </div>
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }

export default ModalCarrito;

