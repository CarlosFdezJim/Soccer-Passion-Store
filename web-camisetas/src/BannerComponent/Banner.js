import React from 'react';
import './Banner.css'; // Importa los estilos CSS
import bannerImage from './images/banner1.jpg'; // Importa la imagen

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Banner = () => {
  return (
    <Carousel infiniteLoop autoPlay>
      <div>
        <img src={bannerImage} alt="Imagen 1" />
      </div>
      <div>
        <img src={bannerImage} alt="Imagen 2" />
      </div>
      <div>
        <img src={bannerImage} alt="Imagen 3" />
      </div>
    </Carousel>
  );
};

export default Banner;

