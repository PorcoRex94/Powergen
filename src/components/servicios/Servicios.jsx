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
            <div className="btn__gap">
              <p>
                Contamos con grupos electrógenos de todas las potencias. Tenemos
                equipos para todas las necesidades: Hogar, comercio, industria,
                minería y petróleo.
              </p>
              <Link to="/grupos" className="btn__service">
                Ver más...
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/imgs/img/hero-index-dos.jpg"
            alt="foto alquiler"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Energías Alternativas</h3>
            <div className="btn__gap">
              <p>
                Ofrecemos soluciones sostenibles, dando como resultado una
                energía más limpia y eficiente.
              </p>
              <Link to={"/energias"} className="btn__service">
                Ver más...
              </Link>
            </div>
          </div>
        </div>
      </ContainerContent>
    </GlobalContainer>
  );
};
