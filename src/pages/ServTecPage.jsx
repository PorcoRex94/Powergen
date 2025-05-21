import {
  GlobalContainer,
  GlobalSectionTextContainer,
  SectionTextTopContainer,
  SectionTextBottomContainer,
  TextTopContainer,
  SectionTextContainer,
  SectionTextBottomBotContainer,
  TextTop,
} from "../components/alquiler-styles/st-styles";
import { Hero } from "../components/hero/Hero";

export const ServTecPage = () => {
  return (
    <>
      <GlobalContainer>
        <Hero
          title={"Servicio Técnico"}
          backgroundImage={"/assets/imgs/img/st_grupo_grande.webp"}
        />
        <GlobalSectionTextContainer>
          <SectionTextContainer>
            <SectionTextTopContainer>
              <TextTopContainer>
                <p>
                  <span>Experiencia y profesionalismo:</span> Cuidado Integral
                  para Grupos Electrógenos, con nuestro equipo de técnicos
                  altamente capacitados para el mantenimiento preventivo y
                  correctivo de tus equipos.
                </p>
                <p>
                  Garantizamos el rendimiento óptimo y la durabilidad de tu
                  inversión.
                </p>
              </TextTopContainer>
              <TextTopContainer>
                <p>
                  <span>Mantenimiento preventivo y correctivo:</span> Desde
                  mantenimiento preventivo y correctivo hasta diagnóstico
                  avanzado, reparación de componentes y suministro de repuestos
                  originales.
                </p>
                <p>
                  Protege tu inversión con nuestros planes de mantenimiento
                  personalizados.
                </p>
              </TextTopContainer>
            </SectionTextTopContainer>
            <SectionTextBottomContainer>
              <TextTopContainer>
                <p>
                  <span>Soluciones Rápidas y Eficaces:</span> Nuestro equipo de
                  respuesta está listo para atender tus necesidades de
                  reparación y mantenimiento.
                </p>
                <p>
                  Minimiza las interrupciones y vuelve a la normalidad
                  rápidamente.
                </p>
              </TextTopContainer>
            </SectionTextBottomContainer>
            <SectionTextBottomBotContainer>
              <TextTop>
                <p>
                  Adheridos a Red Argentina de Coordinadores y Auditores
                  Técnicos en Energía, Máquinas y Equipos.
                </p>
                <p>Servicio las 24 hs. Guardia 0810- 444-1313</p>
              </TextTop>
            </SectionTextBottomBotContainer>
          </SectionTextContainer>
        </GlobalSectionTextContainer>
      </GlobalContainer>
    </>
  );
};
