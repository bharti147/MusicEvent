import React from 'react';
import Slider from 'react-slick';
import '../styles/ImageCarousel.css';
import image4 from '../assets/image4.png'; // Replace with your image paths
import image2 from '../assets/image2.png'; // Replace with your image paths
import image6 from '../assets/image6.png'; // Replace with your image paths

const ImageCarousel2 = () => {
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
      </div>
      <Slider {...settings} className='sliderCustom'>
       
        <div>
          <img src={image4} alt="Image 4" className="carousel-image" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="carousel-image" />
        </div>
        <div>
          <img src={image6} alt="Image 6" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel2;
