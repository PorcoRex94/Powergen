import { Link } from "react-router-dom";
import { Hero } from "../hero/Hero";
import {
  ContainerContent,
  GlobalContainer,
  SectionGridContainer,
  SectionTextContainer,
} from "./grupos-styles";

export const GruposElectrogenos = () => {
  return (
    <>
      <GlobalContainer>
        <Hero
          title={"Grupos Electrógenos"}
          backgroundImage={"/assets/imgs/img/foto_portada_ge.webp"}
        />
        <SectionTextContainer>
          <p>
            Desde nuestros comienzos en 1986, entendemos que vender es, ante
            todo, asesorar.
          </p>
          <p>
            Por eso, brindamos una visión completa de las opciones disponibles
            en el mercado, considerando aspectos clave como el precio, la
            calidad, el servicio de postventa, la disponibilidad de repuestos y
            las prestaciones de cada producto.
          </p>
          <p>
            Acompañamos a cada cliente en el proceso de elección, para que
            encuentre la alternativa que mejor se adapte a sus necesidades.
          </p>
          <p>
            Nuestro compromiso es ayudarlo a tomar una decisión informada,
            basada en la confianza y la experiencia.
          </p>
        </SectionTextContainer>
        <SectionGridContainer>
          <h2>Soluciones</h2>
          <ContainerContent>
            <div className="card">
              <img
                src="/assets/imgs/img/eq_grandes.webp"
                alt="foto ventas"
                className="img__servicios"
              />
              <div className="content__text">
                <h3>Venta</h3>
                <div className="btn__gap">
                  <p>
                    Grupos Electrógenos Powergen: Energía confiable a tu
                    alcance.
                  </p>
                  <Link to="/ventas" className="btn__service">
                    Ver más...
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/assets/imgs/img/foto_alquiler.webp"
                alt="foto alquiler"
                className="img__servicios"
              />
              <div className="content__text">
                <h3>Alquiler</h3>
                <div className="btn__gap">
                  <p>
                    Generadores eléctricos para hogar, eventos, industria y
                    más...
                  </p>
                  <Link to={"/alquiler"} className="btn__service">
                    Ver más...
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/assets/imgs/img/st_grupo_grande.webp"
                alt="foto alquiler"
                className="img__servicios"
              />
              <div className="content__text">
                <h3>Servicio Técnico</h3>
                <div className="btn__gap">
                  <p>
                    Mantenimiento y reparación garantizada para tus equipos.
                  </p>
                  <Link to={"/servicio-tecnico"} className="btn__service">
                    Ver más...
                  </Link>
                </div>
              </div>
            </div>
          </ContainerContent>
        </SectionGridContainer>
      </GlobalContainer>
    </>
  );
};
