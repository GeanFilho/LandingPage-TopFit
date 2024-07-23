import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import './SliderComponent.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importar as imagens (substitua pelos caminhos reais das suas imagens)
import image1 from '../assets/cross.jpg';
import image2 from '../assets/musc.jpg';
import image3 from '../assets/terra.jpg';
import image4 from '../assets/aero.jpg';

const SliderComponent = () => {
  const slidesData = [
    {
      image: image1,
      title: 'Crossfit',
      description: 'Focado no aumento da força, resistência e condicionamento físico geral.'
    },
    {
      image: image2,
      title: 'Musculação',
      description: 'É amplamente praticada para melhorar a saúde geral, o desempenho atlético e a estética corporal.'
    },
    {
      image: image3,
      title: 'Força',
      description: 'Esses treinos melhoram a massa muscular, a densidade óssea e a capacidade funcional.'
    },
    {
      image: image4,
      title: 'Aeróbico',
      description: 'Esses exercícios melhoram a saúde cardiovascular, a resistência e ajudam na queima de calorias.'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <motion.div
      className="slider-container"
      id="programas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="separator"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div> {/* Linha separadora */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Confira nossos <span>Programas</span>
      </motion.h2>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <motion.div
            key={index}
            className="slide"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 * (index + 1) }}
          >
            <div className="card">
              <img src={slide.image} alt={slide.title} className="card-image" />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default SliderComponent;
