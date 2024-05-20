import React from 'react';
import Slider from 'react-slick';
import '../styles/ImageCarousel.css';
import image1 from '../assets/image1.png'; 
import image2 from '../assets/image2.png'; 
import image3 from '../assets/image3.png'; 

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows:false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="carousel-container">
     <div>
        <h2> Hello </h2>
      </div>
      <Slider {...settings} className='sliderCustom'>
       
        <div>
          <img src={image1} alt="Image 1" className="carousel-image" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="carousel-image" />
        </div>
        <div>
          <img src={image3} alt="Image 3" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
