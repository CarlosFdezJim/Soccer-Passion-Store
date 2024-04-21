import React, { useState } from 'react'; // Añade useState a los imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar Routes

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './HeaderComponent/Header';
import ListadoProductos from './ListadoProductosComponent/ListadoProductos';
import Banner from './BannerComponent/Banner';
import Carrito from './CarritoComponent/Carrito';
import ModalCarrito  from './ModalCarrito/ModalCarrito';
import Contact from './ContactComponent/Contact';
import Footer from './FooterComponent/Footer';


import imagenProducto1 from './assets/producto1.jpg'; // Importa la imagen del producto 1
import imagenProducto2 from './assets/producto2.jpg'; // Importa la imagen del producto 2

/*import imagenProducto3 from './assets/CamisetaFutbolClubBarcelona1992.jpg'; // Importa la imagen del producto 1
import imagenProducto4 from './assets/CamisetaInterDeMilan1999.jpg'; // Importa la imagen del producto 2
import imagenProducto5 from './assets/CamisetaJuventus95-96.jpg'; // Importa la imagen del producto 1
import imagenProducto6 from './assets/CamisetaMilan1988.jpg'; // Importa la imagen del producto 2
import imagenProducto7 from './assets/CamisetaSeleccionAlemana1994.jpg'; // Importa la imagen del producto 1
import imagenProducto8 from './assets/CamisetaSeleccionBrasileña1998.jpg'; // Importa la imagen del producto 2
import imagenProducto9 from './assets/CamisetaSelecciónFrancesa1998.jpg'; // Importa la imagen del producto 1
import imagenProducto10 from './assets/CamisetaSeleccionHolandesa1988.jpg'; // Importa la imagen del producto 2
import imagenProducto11 from './assets/CamisetaSeleccionItaliana2002.jpg'; // Importa la imagen del producto 1
import imagenProducto12 from './assets/SegundaEquipacionSeleccionEspañola 2010.jpg'; // Importa la imagen del producto 2
import imagenProducto13 from './assets/CamisetaDeportivoDeLaCoruna92-93.png'; // Importa la imagen del producto 1*/


function App() {

  const [mostrarModalCarrito, setMostrarModalCarrito] = useState(false);
  const [carrito, setCarrito] = useState([]); // Utiliza useState aquí para inicializar el estado del carrito

  const abrirModalCarrito = () => {
    setMostrarModalCarrito(true);
  };

  const cerrarModalCarrito = () => {
    setMostrarModalCarrito(false);
  };

  // Array de productos
  const productos = [
    { id: 1, nombre: 'Camiseta 1', precio: 20, imagen: imagenProducto1 },
    { id: 2, nombre: 'Camiseta 2', precio: 25, imagen: imagenProducto2 },
    { id: 3, nombre: 'Camiseta 3', precio: 22, imagen: imagenProducto1 },
    { id: 4, nombre: 'Camiseta 4', precio: 18, imagen: imagenProducto2 },
    { id: 5, nombre: 'Camiseta 5', precio: 30, imagen: imagenProducto1 },
    { id: 6, nombre: 'Camiseta 6', precio: 28, imagen: imagenProducto2 },
    { id: 7, nombre: 'Camiseta 7', precio: 24, imagen: imagenProducto1 },
    { id: 8, nombre: 'Camiseta 8', precio: 26, imagen: imagenProducto2 },
    { id: 9, nombre: 'Camiseta 9', precio: 21, imagen: imagenProducto1 },
    { id: 10, nombre: 'Camiseta 10', precio: 32, imagen: imagenProducto2 },
    
    // Agrega más productos aquí según sea necesario
     /*    
    { id: 1, nombre: 'Camiseta 1', precio: 20, imagen: imagenProducto1 },
    { id: 2, nombre: 'Camiseta 2', precio: 25, imagen: imagenProducto2 },
    { id: 3, nombre: 'Camiseta 3', precio: 22, imagen: imagenProducto3 },
    { id: 4, nombre: 'Camiseta 4', precio: 18, imagen: imagenProducto4 },
    { id: 5, nombre: 'Camiseta 5', precio: 30, imagen: imagenProducto5 },
    { id: 6, nombre: 'Camiseta 6', precio: 28, imagen: imagenProducto6 },
    { id: 7, nombre: 'Camiseta 7', precio: 24, imagen: imagenProducto7 },
    { id: 8, nombre: 'Camiseta 8', precio: 26, imagen: imagenProducto8 },
    { id: 9, nombre: 'Camiseta 9', precio: 21, imagen: imagenProducto9 },
    { id: 10, nombre: 'Camiseta 10', precio: 32, imagen: imagenProducto10 },
    { id: 9, nombre: 'Camiseta 9', precio: 21, imagen: imagenProducto11 },
    { id: 10, nombre: 'Camiseta 10', precio: 32, imagen: imagenProducto12 },
    { id: 9, nombre: 'Camiseta 9', precio: 21, imagen: imagenProducto13 }
    */
  ];

  const agregarAlCarrito = (idProducto) => {
    // Encuentra el producto con el ID correspondiente
    const productoAñadido = productos.find(producto => producto.id === idProducto);
    // Añade el producto al carrito
    setCarrito([...carrito, productoAñadido]);
  };

  

  return (
    <div className="App">

      <Router>
          <Header abrirModalCarrito={abrirModalCarrito} />
          <ModalCarrito mostrar={mostrarModalCarrito} cerrarModal={cerrarModalCarrito} carrito={carrito} />
          <Routes> {/* Utiliza <Routes> en lugar de <Switch> */}
            <Route path="/productos" element={<ListadoProductos />} />
            <Route path="/carrito" element={<Carrito />} /> {/* Renderiza el componente de <Route> dentro de <Routes> */}
        </Routes>
      </Router>

      <main>
        <Banner />
        <section className="productos-container">
          <h2>Productos Destacados</h2>
          <ListadoProductos productos={productos} onAgregarAlCarrito={agregarAlCarrito} />
        </section>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
