import React from 'react';
import { Carousel } from 'antd';
import hero1 from '../../assets/images/hero1.png';

const CarouselSection = () => {
  const contentStyle = {
    height: '100px',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  };

  return (
    <Carousel autoplay>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img src={hero1} alt='hero1' style={imageStyle} />
        </div>
      </div>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img src={hero1} alt='hero1' style={imageStyle} />
        </div>
      </div>
      
    </Carousel>
  );
};

export default CarouselSection;
