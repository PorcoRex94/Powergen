import { Link } from "react-router-dom";
import { ContainerContent, GlobalContainer } from "./servicios-styles";

export const Servicios = () => {
  return (
    <GlobalContainer id="servicios">
      <h2>Servicios</h2>
      <ContainerContent>
        <div className="card">
          <img
            src="/assets/imgs/img/grupo_blanco.webp"
            alt="foto ventas"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Grupos Electrógenos</h3>
            <div className="btn__gap">
              <p>
                Contamos con grupos electrógenos de todas las potencias. Tenemos
                equipos para todas las necesidades:
              </p>
              <p>Hogar, comercio, industria, minería y petróleo.</p>
            </div>
            <Link to="/grupos" className="btn__service">
              Ver más...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/imgs/img/energias_alternativas.webp"
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
              <p>Opciones para Campo, Hogar y Empresas.</p>
            </div>
            <Link to={"/energias"} className="btn__service">
              Ver más...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/imgs/img/autoelevador.webp"
            alt="foto ventas"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Autoelevadores</h3>
            <div className="btn__gap">
              <p>
                Contamos con grupos electrógenos de todas las potencias. Tenemos
                equipos para todas las necesidades:
              </p>
              <p>Hogar, comercio, industria, minería y petróleo.</p>
            </div>
            <Link to="/grupos" className="btn__service">
              Ver más...
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="/assets/imgs/img/motoimplementos.webp"
            alt="foto alquiler"
            className="img__servicios"
          />
          <div className="content__text">
            <h3>Motoimplementos</h3>
            <div className="btn__gap">
              <p>
                Ofrecemos soluciones sostenibles, dando como resultado una
                energía más limpia y eficiente.
              </p>
              <p>Opciones para Campo, Hogar y Empresas.</p>
            </div>
            <Link to={"/energias"} className="btn__service">
              Ver más...
            </Link>
          </div>
        </div>
      </ContainerContent>
    </GlobalContainer>
  );
};
