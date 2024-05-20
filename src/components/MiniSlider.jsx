import React from 'react';
import Slider from 'react-slick';
import '../styles/MiniSlider.css';
import img4 from '../assets/img4.png'; // Replace with your image paths

const MiniSlider = () => {
  const settings = {
    dots: false,
    // infinite: true,
    speed: 700,
    arrows:false,
    slidesToShow: 2.90,
    slidesToScroll: 1,
    initialSlide:1,
    autoplay: false,
    draggable: true  
    // autoplaySpeed: 2000,
  };

  return (
    <div className="miniSlider">
      <Slider {...settings}>
        <div>
          <img src={img4} alt="Image 1" className="mini-image" />
        </div>
        <div>
          <img src={img4} alt="Image 2" className="mini-image" />
        </div>
        <div>
          <img src={img4} alt="Image 3" className="mini-image" />
        </div>
      </Slider>
    </div>
  );
};

export default MiniSlider;
