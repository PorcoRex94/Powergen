import { GlobalComponents } from "../components/global-components/GlobalComponents";
import { HeroIndex } from "../components/hero-index/HeroIndex";
import { Nosotros } from "../components/nosotros/Nosotros";
import { Servicios } from "../components/servicios/Servicios";
import { ServiciosDos } from "../components/servicios/ServiciosDos";
import { Slider } from "../components/slider/Slider";

export const Index = () => {
  return (
    <>
      <HeroIndex />
      <Nosotros />
      <Servicios />
      <ServiciosDos />
      <Slider />
    </>
  );
};
