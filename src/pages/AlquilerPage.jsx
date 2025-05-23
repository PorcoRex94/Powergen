import {
  GlobalContainer,
  GlobalSectionTextContainer,
  SectionTextBottomContainer,
  SectionTextContainer,
  SectionTextTopContainer,
  TextTopContainer,
} from "../components/alquiler-styles/alquiler-styles";
import { Hero } from "../components/hero/Hero";

export const AlquilerPage = () => {
  return (
    <>
      <GlobalContainer>
        <Hero
          title={"Alquiler de Grupos Electrógenos"}
          backgroundImage={"/assets/imgs/img/foto_portada_alquiler.webp"}
        />
        <GlobalSectionTextContainer>
          <SectionTextContainer>
            <SectionTextTopContainer>
              <TextTopContainer>
                <p>
                  <span>Solución inmediata:</span> En Powergen, te ofrecemos una
                  amplia flota de grupos electrógenos en alquiler para cubrir
                  tus necesidades puntuales de energía.
                </p>
                <p>
                  Contamos con la solución perfecta para tu caso en particular.
                </p>
              </TextTopContainer>
              <TextTopContainer>
                <p>
                  <span>Flexibilidad y variedad:</span> Por el tiempo que lo
                  necesites, nuestra flexible gama de generadores en alquiler se
                  adapta a tus requerimientos específicos.
                </p>
                <p>
                  Encuentra la potencia y el equipo ideal para cada ocasión.
                </p>
              </TextTopContainer>
            </SectionTextTopContainer>
            <SectionTextBottomContainer>
              <TextTopContainer>
                <p>
                  <span>Seguridad y respaldo:</span> Nuestro servicio de
                  alquiler incluye asesoramiento experto, entrega de energía en
                  punta de cable, operadores calificados, asegurando una
                  experiencia sin complicaciones.
                </p>
                <p>¡Consulta nuestra flota y solicita tu cotización!</p>
              </TextTopContainer>
            </SectionTextBottomContainer>
          </SectionTextContainer>
        </GlobalSectionTextContainer>
      </GlobalContainer>
    </>
  );
};
