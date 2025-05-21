import styled from "styled-components";

export const GlobalContainer = styled.main`
  width: calc(100vw - var(--scrollbar-width));
`;
export const GlobalSectionTextContainer = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--negro);
`;

export const SectionTextContainer = styled.div`
  width: 85%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  span {
    color: var(--naranja);
    font-size: 1.2rem;
  }
`;

export const SectionTextTopContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 1rem;
`;

export const SectionTextBottomContainer = styled.div`
  padding: 1rem;
`;

export const SectionTextBottomBotContainer = styled.div`
  padding: 1rem;
`;

export const TextTopContainer = styled.div`
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 5px -5px 5px var(--naranja), 5px 5px 5px var(--naranja),
    -5px 0px 5px var(--naranja), -5px 5px 5px var(--naranja),
    -5px -5px 5px var(--naranja);
`;

export const TextTop = styled.div`
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
`;
