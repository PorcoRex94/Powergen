import styled from "styled-components";

export const GlobalContainer = styled.section`
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
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
    gap: 50px;
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
    gap: 15px;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, minmax(100px, 1fr));
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 550px;
    min-height: 450px;
    background-color: var(--negro);
    border-radius: 10px;
    text-align: center;
    color: var(--naranja);
  }

  .img__serv__ge,
  .img__serv__ae {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .img__serv__ea,
  .img__serv__mi {
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .img__serv__ge,
  .img__serv__ae {
    clip-path: polygon(0% 0%, 77% 0%, 90% 100%, 0% 100%);
  }

  .img__serv__ea,
  .img__serv__mi {
    clip-path: polygon(25.8% 0%, 100% 0%, 100% 100%, 10.5% 100%);
  }

  .img__serv__ae {
    clip-path: polygon(0% 0%, 77% 0%, 92.3% 100%, 0% 100%);
  }

  .content__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 1rem;
    width: 65%;
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
