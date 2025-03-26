import { Link } from "react-router-dom";
import { ContainerContent, GlobalContainer } from "./servicios-styles";

export const Servicios = () => {
  return (
    <GlobalContainer id="servicios">
      <h2>Servicios</h2>
      <ContainerContent>
        <div className="card">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto ventas"
            className="img__servicios"
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
        <div className="card">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto alquiler"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Alquiler</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
        </div>
        <div className="card">
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
        <div className="card">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto servicio técnico"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Servicio Técnico</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto transporte"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Transporte, Movimiento e Izaje</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto paneles solares"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Energías Renovables</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae pariatur minima eius rem praesentium culpa sit saepe
              esse ut veniam aliquid doloribus
            </p>
            <Link className="btn__service">Ver más...</Link>
          </div>
        </div>
      </ContainerContent>
    </GlobalContainer>
  );
};
