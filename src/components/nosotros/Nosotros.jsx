import {
  GlobalContainer,
  InfoContainer,
  InfoPilaresContainer,
  InfoPilaresLeft,
  InfoPilaresRight,
  InfoPilaresRow,
  InfoPilaresTextContainer,
} from "./nosotros-styles";

export const Nosotros = () => {
  return (
    <GlobalContainer id="nosotros">
      <h2>Sobre Nosotros</h2>
      <InfoContainer>
        <p className="empresa">
          En Powergen, nos enorgullece ser pioneros en la industria de grupos
          electrógenos y energías alternativas desde 1986. A lo largo de nuestra
          historia, hemos acompañado y asesorado a nuestros clientes con un
          compromiso inquebrantable hacia la calidad y la satisfacción del
          cliente. Permítanos presentarnos y mostrarle por qué somos su mejor
          opción. Nos dedicamos a la fabricación e importación de una amplia
          gama de productos y servicios relacionados con la generación de
          energía y maquinaria
        </p>
        <InfoPilaresContainer>
          <h3>Nuestros Pilares Fundamentales</h3>
          <InfoPilaresTextContainer>
            <InfoPilaresRow>
              <InfoPilaresLeft>
                <h4>Asesoramiento Continuo</h4>
                <p>
                  Nuestro compromiso es brindar asesoramiento completo en todos
                  los aspectos de nuestros productos y servicios, desde la
                  elección de la marca hasta el servicio postventa.
                </p>
              </InfoPilaresLeft>
              <InfoPilaresRight>
                <h4>Compromiso de Precios Moderados</h4>
                <p>
                  No aumentamos nuestros precios en situaciones de crisis
                  energética o en alquileres de emergencia. Nos comprometemos a
                  igualar presupuestos competitivos respaldados por nuestro
                  compromiso.
                </p>
              </InfoPilaresRight>
            </InfoPilaresRow>
            <InfoPilaresRow>
              <InfoPilaresLeft>
                <h4>Marca Propia (PWG)</h4>
                <p>
                  Nuestros equipos PWG están diseñados para soportar trabajos
                  rigurosos, y también están disponibles para la venta.
                  Ofrecemos una extensión de garantía sin costo adicional para
                  quienes optan por equipos de calidad premium y reforzados.
                </p>
              </InfoPilaresLeft>
              <InfoPilaresRight>
                <h4>Repuesto Express a Todo el País</h4>
                <p>
                  Solo vendemos equipos respaldados por la disponibilidad futura
                  de repuestos. En Powergen, nuestra relación con el cliente no
                  termina con la venta, sino que comienza con ella. Nuestros
                  asesores y técnicos lo acompañarán durante toda la vida útil
                  del equipo.
                </p>
              </InfoPilaresRight>
            </InfoPilaresRow>
            <InfoPilaresRow>
              <InfoPilaresLeft>
                <h4>Variedad</h4>
                <p>
                  En Powergen, entendemos que cada cliente es único, por lo que
                  ofrecemos una amplia variedad de marcas y modelos para
                  satisfacer todas las necesidades. Ofrecemos ventas tanto al
                  por mayor como al por menor.
                </p>
              </InfoPilaresLeft>
              <InfoPilaresRight>
                <h4>Responsabilidad</h4>
                <p>
                  Contamos con un Departamento de Atención al Cliente
                  comprometido a brindar soluciones rápidas y efectivas.
                  Supervisamos el cumplimiento de nuestros proveedores y
                  aseguramos el bienestar de nuestro personal y clientes.
                </p>
              </InfoPilaresRight>
            </InfoPilaresRow>
          </InfoPilaresTextContainer>
        </InfoPilaresContainer>
      </InfoContainer>
    </GlobalContainer>
  );
};
