import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  width: calc(100vw - var(--scrollbar-width));
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.with-background {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-image: url("/assets/imgs/img/pwrgen-hero.png");
  }

  @media (max-width: 960px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 45vh;
  }

  .hache__uno {
    font-size: 3rem;
    padding: 1.5rem;
    color: white;
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
