import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  FooterContainer,
  FooterContainerDown,
  FooterContainerTop,
  IconContainer,
  IconContainerDown,
  IconContainerTop,
  UlContainer,
} from "./footer-styles";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const buildWhatsAppUrl = (message) => {
    const phoneNumber = "5491162641313"; // Número internacional
    const encodedMessage = encodeURIComponent(message || "¡Hola!"); //

    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Quiero asesoramiento, por favor!`;
    } else {
      // Escritorio: usar WhatsApp Web
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=¡Hola! Quiero asesoramiento, por favor!`;
    }
  };

  const handleSendMessage = () => {
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank");
  };
  return (
    <FooterContainer>
      <FooterContainerTop>
        <img src="/assets/imgs/logos/logo__pwrgen.webp" alt="Logo Powergen" />
        <nav>
          <UlContainer>
            <li>
              <Link to="/" className="link__item">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="#nosotros" className="link__item">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="#servicios" className="link__item">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="#contacto" className="link__item">
                Contacto
              </Link>
            </li>
          </UlContainer>
        </nav>
        <IconContainer>
          <IconContainerTop>
            <a
              href="https://www.instagram.com/powergengrupos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon__top" />
            </a>
            <a
              href="https://www.facebook.com/powergengruposelectrogenos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon__top" />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon__top" />
            </a>
          </IconContainerTop>
          <IconContainerDown>
            <a href="mailto:central@powergen.com.ar">
              <IoIosMail className="icon__down" />
              central@powergen.com.ar
            </a>
            <a href="">
              <BsFillTelephoneFill className="icon__down" />
              1147601313
            </a>
            <a
              href="https://www.google.com/maps/place/DAI,+Carlos+Francisco+Melo+3580,+B1604+Villa+Martelli,+Provincia+de+Buenos+Aires/@-34.5414837,-58.5081017,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb6d708c70f1b:0x68556064ca06e4fe!8m2!3d-34.5414881!4d-58.5055268!16s%2Fg%2F11csmgf43d?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiMapPinFill className="icon__down" />
              Carlos F. Melo 3580 - Buenos Aires
            </a>
          </IconContainerDown>
        </IconContainer>
      </FooterContainerTop>
      <FooterContainerDown>
        <p>
          Copyright © 2025 - Powergen - Developed by{" "}
          <span className="ambraco">Ambraco</span>
        </p>
      </FooterContainerDown>
    </FooterContainer>
  );
};
