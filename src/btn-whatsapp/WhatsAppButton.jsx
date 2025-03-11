import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  justify-content: center;
  background-color: #25d366;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1ebe57;
    transform: scale(1.1);
  }

  .icon__wsp {
    font-size: 1.3rem;
  }
`;

export const WhatsAppButton = ({
  message = "¡Hola! Quiero asesoramiento.",
  phone = "5491162641313",
}) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const encodedMessage = encodeURIComponent(message);
  const url = isMobile
    ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  return (
    <Button href={url} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="icon__wsp" /> WhatsApp
    </Button>
  );
};
