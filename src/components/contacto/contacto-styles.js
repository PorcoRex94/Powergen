import styled from "styled-components";

export const GlobalContactContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  h2 {
    width: 100%;
    text-align: center;
    padding: 1rem;
    background-color: var(--naranja);
  }
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
  }
`;

export const ContactContainerRight = styled.div`
  width: 50%;
`;
