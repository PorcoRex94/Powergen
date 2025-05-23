import { Hero } from "../hero/Hero";
import {
  GlobalContainer,
  GlobalSectionContainer,
  GlobalSectionText,
  SectionContainerTop,
  TextContainerLeft,
  TextContainerRight,
} from "./energias-styles";

export const EnergiasAlternativas = () => {
  return (
    <>
      <GlobalContainer>
        <Hero
          title={"Energías Alternativas"}
          backgroundImage={"/assets/imgs/img/energias-alternativas.webp"}
        />
        <GlobalSectionContainer>
          <h2>Reducción de consumo y gasto eléctrico significativo.</h2>
          <GlobalSectionText>
            <SectionContainerTop>
              <TextContainerLeft>
                <p>
                  Disminución de la huella de carbono, contribuyendo
                  directamente a un planeta más sostenible y con menor
                  dependencia de los combustibles fósiles.
                </p>
              </TextContainerLeft>
              <TextContainerRight>
                <p>
                  Energía 100% limpia y renovable. No produce gases de efecto
                  invernadero ni otros contaminantes durante su funcionamiento,
                  ayudando a combatir el cambio climático.
                </p>
              </TextContainerRight>
            </SectionContainerTop>
            <SectionContainerTop>
              <TextContainerRight className="diff">
                <p>
                  Instalación versátil y funcionamiento silencioso. Se pueden
                  instalar en una gran variedad de techos y terrenos. Su
                  funcionamiento es completamente silencioso, sin generar ruidos
                  molestos.
                </p>
              </TextContainerRight>
              <TextContainerLeft>
                <p>
                  Aumenta el valor de la propiedad, ya que es vista como una
                  mejora valiosa que incrementa el precio de venta de una
                  vivienda.
                </p>
              </TextContainerLeft>
            </SectionContainerTop>
          </GlobalSectionText>
        </GlobalSectionContainer>
      </GlobalContainer>
    </>
  );
};
