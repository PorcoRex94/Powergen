import React, { useState, useEffect } from "react";
import {
  HeroContainer,
  HeroSlide,
  HeroImage,
  HeroText,
  ScrollButton,
} from "./hero-styles";

const images = [
  {
    src: "/assets/imgs/img/city.jpg",
    text: "Líderes en Energía",
    section: "#nosotros",
  },
  {
    src: "/assets/imgs/img/city.jpg",
    text: "Grupos Electrógenos",
    text2: "Para Industria, Minería y Petróleo",
    section: "#contacto",
  },
  {
    src: "/assets/imgs/img/city.jpg",
    text: "GUARDIA 24HS",
    text2: "0810-444-1313",
    section: "#guardia",
  },
];

export const HeroIndex = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Cambia la imagen cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      {images.map((image, index) => (
        <HeroSlide key={index} $active={index === currentIndex}>
          <HeroImage src={image.src} alt={`Slide ${index}`} />
          {index === currentIndex && (
            <HeroText className="hero__content" $isFirst={index === 0}>
              {currentIndex === 0 && <h1>Bienvenidos a Powergen</h1>}
              <h2>{image.text}</h2>
              {image.text2 && <p>{image.text2}</p>}
              <ScrollButton to={image.section}>Ver más</ScrollButton>
            </HeroText>
          )}
        </HeroSlide>
      ))}
    </HeroContainer>
  );
};
