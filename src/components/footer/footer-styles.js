import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: calc(100vw - var(--scrollbar-width));
`;

export const FooterContainerTop = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--negro);
`;

export const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;

  .link__item {
    font-size: 1.2rem;
    color: var(--naranja);

    &:hover {
      color: white;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const IconContainerTop = styled.div`
  display: flex;
  gap: 25px;

  .icon__top {
    color: var(--naranja);
    font-size: 1.4rem;
  }

  .icon__top:hover {
    color: white;
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }
`;

export const IconContainerDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .icon__down {
    font-size: 1.2rem;
    position: relative;
    top: 3px;
  }

  a {
    display: flex;
    gap: 7px;
    color: var(--naranja);
    &:hover {
      color: white;
    }

    &:hover .icon__down {
      color: white;
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export const FooterContainerDown = styled.div`
  padding: 1rem;
  background-color: var(--naranja);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
  }

  .ambraco {
    font-size: 1.3;
    font-weight: 600;
  }
`;
