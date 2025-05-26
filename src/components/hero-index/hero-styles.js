import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const dropFromTop = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  80% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const dropFromDown = keyframes`
    0% {
    transform: translateY(40vh);
  }
  80% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const dropFromLeft = keyframes`
    0%{
        transform: translateX(-100vw);
    }
    80%{
        transform: translateX(5px);
    }
    100%{
        transform: translateX(0);
    }
`;

// 🔹 El h2 comienza FUERA de la pantalla (izquierda) y entra con rebote
export const slideFromLeft = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  width: calc(100vw - var(--scrollbar-width));
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .hero__content {
    position: relative;
    z-index: 2;
  }
`;

export const HeroSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? "1" : "0")};
  transition: opacity 1s ease-in-out;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroText = styled.div`
  position: absolute;
  bottom: 70%;
  left: 0%;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  h1 {
    animation: ${dropFromTop} 1.2s ease-out;
  }

  h2 {
    animation: ${({ $isFirst }) => ($isFirst ? dropFromDown : dropFromTop)} 1.2s
      ease-out;
  }

  p {
    animation: ${dropFromDown} 1.2s ease-out;
    display: ${({ $isFirst }) => ($isFirst ? "none" : "block")};
  }

  .p__text__tres {
    font-size: 1.4rem;
  }
`;

export const ScrollButton = styled(Link)`
  padding: 1rem;
  background-color: var(--naranja);
  color: white;
  border-radius: 10px;
  animation: ${dropFromLeft} 1.2s ease-out;

  &:hover {
    background-color: rgb(249, 177, 52);
    transform: scale(1.1);
    color: black;
  }
`;
