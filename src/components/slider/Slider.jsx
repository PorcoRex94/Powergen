import { useRef } from "react";
import {
  BackgroundContainer,
  ImgFloraContainer,
  MarcasContainer,
} from "./slider-styles";
import { useEffect } from "react";
import { LogoSlider } from "./LogoSlider";

export const Slider = () => {
  const logoContainersRef = useRef([]);

  useEffect(() => {
    const intervaloCambio = 5000; // Intervalo de 5 segundos

    const cambiarImagenes = () => {
      const logoContainers = logoContainersRef.current;

      if (logoContainers.length < 2) return; // Aseguramos que haya al menos dos filas de logos

      const imagenesPrimeraFila = logoContainers[0].querySelectorAll("img");
      const imagenesSegundaFila = logoContainers[1].querySelectorAll("img");

      if (imagenesPrimeraFila.length > 0 && imagenesSegundaFila.length > 0) {
        // Intercambiamos las imágenes entre las dos filas
        logoContainers[0].appendChild(imagenesSegundaFila[0]);
        logoContainers[1].appendChild(imagenesPrimeraFila[0]);
      }
    };

    const intervalId = setInterval(cambiarImagenes, intervaloCambio);

    return () => clearInterval(intervalId); // Limpieza al desmontar el componente
  }, []);

  const logosFila1 = [
    "/assets/imgs/logos/logo-adt.png",
    "/assets/imgs/logos/logo-burger.png",
    "/assets/imgs/logos/logo-campo.png",
    "/assets/imgs/logos/logo-casi.png",
    "/assets/imgs/logos/logo-chevrolete.png",
    "/assets/imgs/logos/logo-chisap.png",
    "/assets/imgs/logos/logo-dia.png",
    "/assets/imgs/logos/logo-embajada.png",
    "/assets/imgs/logos/logo-energas.png",
    "/assets/imgs/logos/logo-fargo.png",
    "/assets/imgs/logos/logo-farmacity.png",
    "/assets/imgs/logos/logo-fravega.png",
  ];

  const logosFila2 = [
    "/assets/imgs/logos/logo-granja.webp",
    "/assets/imgs/logos/logo-kansas.webp",
    "/assets/imgs/logos/logo-lan.png",
    "/assets/imgs/logos/logo-lola.png",
    "/assets/imgs/logos/logo-molinos.webp",
    "/assets/imgs/logos/logo-nescafe.png",
    "/assets/imgs/logos/logo-orc.webp",
    "/assets/imgs/logos/logo-osde.webp",
    "/assets/imgs/logos/logo-paladini.png",
    "/assets/imgs/logos/logo-remax.png",
    "/assets/imgs/logos/logo-sony.png",
    "/assets/imgs/logos/logo-vital.png",
    "/assets/imgs/logos/logo-zara.png",
  ];

  return (
    <section>
      <MarcasContainer className="marcas__container">
        <LogoSlider logos={logosFila1} />
        {/*
        <ImgFloraContainer className="img__flora__container">
          <div className="img__flora">
            <h2 className="hache__dos__flora">
              Clientes que confían en POWEGEN
            </h2>
          </div>
        </ImgFloraContainer>
        */}
        <BackgroundContainer>
          <h2 className="hache__dos__flora">
            Clientes que confían en POWERGEN
          </h2>
        </BackgroundContainer>
        <LogoSlider logos={logosFila2} />
      </MarcasContainer>
    </section>
  );
};
