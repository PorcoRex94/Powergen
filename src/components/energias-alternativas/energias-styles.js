import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scrollbar-width));
`;

export const GlobalSectionContainer = styled.section`
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: var(--negro);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;

  h2 {
    color: var(--naranja);
  }
`;

export const GlobalSectionText = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  text-align: left;
`;

export const SectionContainerTop = styled.div`
  display: flex;
  gap: 50px;
  padding: 1rem;

  .diff {
    width: 70%;
  }
`;

export const TextContainerLeft = styled.div`
  width: 40%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px -5px 5px var(--naranja), 5px 5px 5px var(--naranja),
    -5px 0px 5px var(--naranja), -5px 5px 5px var(--naranja),
    -5px -5px 5px var(--naranja);
`;

export const TextContainerRight = styled.div`
  width: 60%;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px -5px 5px var(--naranja), 5px 5px 5px var(--naranja),
    -5px 0px 5px var(--naranja), -5px 5px 5px var(--naranja),
    -5px -5px 5px var(--naranja);
`;
