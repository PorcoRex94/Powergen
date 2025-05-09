import styled from "styled-components";

export const GlobalContactContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    width: 100%;
    text-align: center;
    padding: 1rem;
    background-color: var(--naranja);
  }
`;

export const FirstContainerContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  background-color: var(--naranja);
`;

export const SecondContainerContact = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
`;

export const ThirdContainerContact = styled.div`
  padding: 1.5rem;
`;

export const ContactContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
`;

export const ContactContainerLeft = styled.div`
  width: 50%;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;

  form {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }

  textarea {
    width: 100%;
    height: 200px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1.5px solid black;
  }

  .btn {
    border-radius: 25px;
    padding: 1rem;
    background-color: var(--naranja);
    border: none;

    &:hover {
      background-color: rgb(236, 164, 87);
      transform: scale(1.1);
      color: white;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    width: 49%;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    padding: 8px;
    border-bottom: 1.5px solid black;
  }
`;

export const ContactContainerRight = styled.div`
  width: 50%;
`;

export const ContactContainerBottom = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 1rem;
`;

export const LocalizationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
`;

export const LocalizationTextTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 50%;
`;

export const LocalizationTextTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 85%;
  .icon__map {
    font-size: 1.2rem;
    position: relative;
    top: 3px;
  }
`;

export const LocalizationTextBottom = styled.div`
  text-align: center;

  .icon__map {
    font-size: 1.2rem;
    position: relative;
    top: 3px;
  }
`;
