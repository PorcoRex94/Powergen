import { Link } from "react-router-dom";
import {
  ContainerContent,
  ContainerContentDos,
  GlobalContainer,
} from "./servicios-styles";

export const ServiciosDos = () => {
  return (
    <GlobalContainer id="servicios">
      <h2>Servicios</h2>
      <ContainerContentDos>
        <div className="card cardTwo">
          <img
            src="/assets/imgs/img/grupo_blanco.webp"
            alt="foto ventas"
            className="img__serv__ge"
          />
          <div className="content__text">
            <h3>Grupos Electrógenos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
        </div>
        <div className="card cardTwo">
          <div className="content__text">
            <h3>Energías Alternativas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
          <img
            src="/assets/imgs/img/energias_alternativas.webp"
            alt="foto alquiler"
            className="img__serv__ea"
          />
        </div>
        <div className="card cardTwo">
          <img
            src="/assets/imgs/img/autoelevador.webp"
            alt="foto autoelevadores"
            className="img__serv__ae"
          />
          <div className="content__text">
            <h3>Autoelevadores</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
        </div>
        <div className="card cardTwo">
          <div className="content__text">
            <h3>Motoimplementos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
          <img
            src="/assets/imgs/img/motoimplementos.webp"
            alt="foto paneles solares"
            className="img__serv__mi"
          />
        </div>
      </ContainerContentDos>
    </GlobalContainer>
  );
};
