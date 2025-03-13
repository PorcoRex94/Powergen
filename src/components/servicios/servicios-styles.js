import styled from "styled-components";

export const GlobalContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  grid-template-rows: repeat(2, auto);
  gap: 15px;
  width: 100%;
  height: 1100px;
  padding: 1rem;
  margin-bottom: 1rem;

  .card {
    width: 100%;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
  }

  .img__servicios {
    width: 100%;
    height: 50%;
  }

  .content__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 1rem;
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
/*------------------SERVICIOS DOS---------------------- */

export const ContainerContentDos = styled.div`
  display: flex;
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
  }

  .img__servicios {
    width: 50%;
    height: 100%;
  }

  .content__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 1rem;
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
