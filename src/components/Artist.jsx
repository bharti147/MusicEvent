import React from 'react';
import Slider from 'react-slick';
import '../styles/MiniSlider.css';
import artist1 from '../assets/artist1.png'; 
import artist2 from '../assets/artist2.png'; 
import artist3 from '../assets/artist3.png'; 
const Artist = () => {
  const settings = {
    dots: false,
    // infinite: true,
    speed: 700,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:3,
    autoplay: false,
    draggable: true  
    // autoplaySpeed: 2000,
  };

  return (
    <div className="miniSlider">
      <Slider {...settings}>
        <div>
          <img src={artist3} alt="Image 1" className="mini-image" />
        </div>
        <div>
          <img src={artist1} alt="Image 2" className="mini-image" />
        </div>
        <div>
          <img src={artist2} alt="Image 3" className="mini-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Artist;
