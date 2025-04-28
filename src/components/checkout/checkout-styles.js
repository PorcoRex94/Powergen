import styled from "styled-components";

export const GlobalContainer = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const InfoProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  img {
    width: 300px;
    height: 150px;
  }
`;

export const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: ${({ single }) => (single ? "1fr" : "repeat(2, 1fr)")};
  place-items: center;
`;
