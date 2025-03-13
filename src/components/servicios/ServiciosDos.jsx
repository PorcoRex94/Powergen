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
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto ventas"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Venta</h3>
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
            <h3>Alquiler</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto alquiler"
            className="img__servicios"
          />
        </div>
        <div className="card cardTwo">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto autoelevadores"
            className="img__servicios"
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
            <h3>Servicio Técnico</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto servicio técnico"
            className="img__servicios"
          />
        </div>
        <div className="card cardTwo">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto transporte"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Transporte</h3>
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
            <h3>Energía Renovables</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto paneles solares"
            className="img__servicios"
          />
        </div>
      </ContainerContentDos>
    </GlobalContainer>
  );
};
