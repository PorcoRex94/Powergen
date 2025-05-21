import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: calc(100vw - var(--scrollbar-width));
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.with-background {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  @media (max-width: 960px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 45vh;
  }

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

  .hero__content {
    position: relative;
    z-index: 2;
  }

  .hache__uno {
    font-size: 3rem;
    padding: 1.5rem;
    color: var(--naranja);
  }

  @media (max-width: 960px) {
    .hache__uno {
      font-size: 2rem;
    }
  }

  @media (max-width: 500px) {
    .hache__uno {
      font-size: 1.5rem;
    }

    .hide-on-mobile {
      display: none;
    }
  }
`;
