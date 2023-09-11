import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import im1 from "../assets/3.jpg";
import im2 from "../assets/4.jpg";
import im3 from "../assets/5.jpg";
import '../style/Services.scss';

const Services = () => {
  return (
    <div className="carousel-container">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={3000} 
      >
        <div className="carousel-slide">
          <img src={im1} alt="Image_1" />
        </div>
        <div className="carousel-slide">
          <img src={im2} alt="Image_2" />
        </div>
        <div className="carousel-slide">
          <img src={im3} alt="Image_3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
