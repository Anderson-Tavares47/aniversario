// Em _app.tsx ou no seu componente
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

interface PhotoCarouselProps {
  images: string[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <h2> Feliz aniversário ! </h2>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Imagem ${idx + 1}`} style={{ width: "100%", }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
