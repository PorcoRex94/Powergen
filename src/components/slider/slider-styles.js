import styled from "styled-components";

export const MarcasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 1.5rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 1024px) {
    border: 10px solid red;
    gap: 15px;
  }
`;

export const ImgFloraContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100vw;
  background: url("../assets/imgs/img/foto-hero-index.jpg") no-repeat center
    center/cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .img__flora {
    position: relative;
    z-index: 2;
  }

  .hache__dos__flora {
    font-size: 3rem;
    padding: 1rem;
    color: var(--naranja);
  }
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--naranja);
    font-size: 3rem;
    padding: 1rem;
  }
  background-color: var(--negro);
`;
