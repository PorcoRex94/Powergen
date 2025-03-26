import styled from "styled-components";

export const GlobalContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  background-color: var(--negro);
  gap: 30px;

  h2 {
    width: 100%;
    text-align: center;
    padding: 1rem;
    background-color: var(--naranja);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 1.5rem;
  width: 100%;

  .empresa {
    text-align: center;
    width: 75%;
    color: white;
  }
`;

export const InfoPilaresContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
  color: white;

  h3 {
    color: var(--naranja);
  }
`;

export const InfoPilaresTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

export const InfoPilaresRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;

  h4 {
    color: var(--naranja);
  }
`;

export const InfoPilaresLeft = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 5px -5px 5px var(--naranja), 5px 5px 5px var(--naranja),
    -5px 0px 5px var(--naranja);
`;

export const InfoPilaresRight = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: -5px -5px 5px var(--naranja), -5px 5px 5px var(--naranja),
    5px 0px 5px var(--naranja);
`;
