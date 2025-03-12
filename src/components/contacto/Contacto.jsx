import { WhatsAppButton } from "../../btn-whatsapp/WhatsAppButton";
import {
  ContactContainer,
  ContactContainerLeft,
  ContactContainerRight,
  ContainerInput,
  FirstContainerContact,
  GlobalContactContainer,
  SecondContainerContact,
  ThirdContainerContact,
} from "./contacto-styles";

export const Contacto = () => {
  return (
    <GlobalContactContainer id="contacto">
      <h2>Contacto</h2>
      <FirstContainerContact>
        <SecondContainerContact>
          <h3>Solicitá asesoramiento ahora</h3>
          <p>
            Desde Powergen ponemos a tu disposición múltiples canales de
            comunicación.
          </p>
          <p>
            Contamos con un equipo de especialistas para darte el mejor Servicio
            de Asesoramiento del mercado, sin costo alguno.
          </p>
          <p>
            Envianos un mensaje a través del formulario en donde podrás
            solicitar Presupuestos, Cotización de Alquiler o Reparación.
          </p>
          <p>
            También podés comunicarte a nuestro WhatsApp para recibir ayuda
            directa de un asesor.
          </p>
          <p>Estamos para ayudarte.</p>
        </SecondContainerContact>
        <ThirdContainerContact>
          <WhatsAppButton message="¡Hola! Estoy en la página de contacto y necesito ayuda." />
        </ThirdContainerContact>
      </FirstContainerContact>
      <ContactContainer>
        <ContactContainerLeft>
          <h3>Formulario de Contacto</h3>
          <form action="">
            <ContainerInput>
              <input
                type="text"
                name="userName"
                required
                placeholder="Nombre"
              />
              <input
                type="text"
                name="sureName"
                required
                placeholder="Apellido"
              />
            </ContainerInput>
            <ContainerInput>
              <input type="email" name="email" required placeholder="Email" />
              <input type="tel" name="phone" required placeholder="Teléfono" />
            </ContainerInput>
            <textarea
              name="message"
              required
              placeholder="Dejá tu mensaje"
            ></textarea>
            <button type="submit" className="btn">
              ENVIAR
            </button>
          </form>
        </ContactContainerLeft>
        <ContactContainerRight>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.476707214346!2d-58.508101724297106!3d-34.54148365421411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6d708c70f1b%3A0x68556064ca06e4fe!2sDAI%2C%20Carlos%20Francisco%20Melo%203580%2C%20B1604%20Villa%20Martelli%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1741717120760!5m2!1sen!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </ContactContainerRight>
      </ContactContainer>
    </GlobalContactContainer>
  );
};
