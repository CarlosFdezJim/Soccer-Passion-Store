import React from 'react';
import './Banner.css'; // Importa los estilos CSS
import bannerImage1 from './images/banner4.jpg'; // Importa la imagen
import bannerImage2 from './images/banner2.jpg'; // Importa la imagen
import bannerImage3 from './images/banner3.jpg'; // Importa la imagen
import bannerImage4 from './images/banner1.jpg'; // Importa la imagen

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Banner = () => {
  return (
    <Carousel infiniteLoop autoPlay>
      <div>
        <img src={bannerImage1} alt="Imagen 1" />
      </div>
      <div>
        <img src={bannerImage2} alt="Imagen 2" />
      </div>
      <div>
        <img src={bannerImage3} alt="Imagen 3" />
      </div>
      <div>
        <img src={bannerImage4} alt="Imagen 4" />
      </div>
    </Carousel>
  );
};

export default Banner;

