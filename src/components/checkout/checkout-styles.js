import styled from "styled-components";

export const GlobalContainer = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const InfoProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  margin: 1rem;

  img {
    width: 300px;
    height: 150px;
  }
`;

export const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: ${({ single }) => (single ? "1fr" : "repeat(2, 1fr)")};
`;

export const PremiumStandardContainer = styled.div`
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 35px;

  label {
    margin-right: 20px;
    cursor: pointer;
  }

  input[type="radio"] {
    margin-right: 8px;
  }
`;
