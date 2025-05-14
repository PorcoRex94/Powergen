import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scrollbar-width));
`;

export const SectionTextContainer = styled.section`
  width: 75%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1.5rem;
`;

export const SectionGridContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  h2 {
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: var(--naranja);
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 700px;
  gap: 15px;
  padding: 1.5rem;

  .card {
    width: 100%;
    border-radius: 10px;
    text-align: center;
    background-color: var(--negro);
  }

  .img__servicios {
    width: 100%;
    height: 50%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .content__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 2rem;

    h3 {
      color: var(--naranja);
    }

    p {
      color: white;
    }
  }

  .btn__gap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
  }

  .btn__service {
    padding: 1rem;
    background-color: var(--naranja);
    color: white;
    border-radius: 10px;

    &:hover {
      background-color: rgb(249, 177, 52);
      transform: scale(1.1);
      color: black;
    }
  }
`;
