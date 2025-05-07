import styled from "styled-components";

export const GlobalContainer = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerHUno = styled.div`
  padding: 1.2rem;
`;

export const SliderHeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 9%;
  padding: 0rem 1rem;
`;

export const ImgContainer = styled.div`
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  width: 41%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 46%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const PremStandContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CarritoContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  background: #fdfdfd;
  display: flex;
  justify-content: space-around;
`;

export const ButtonInDecContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
  top: 9px;
`;

export const ButtonInDec = styled.button`
  border-radius: 15px;

  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  background-color: white;
`;

export const ButtonCart = styled.button`
  border-radius: 35px;
  border: 2px solid black;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: white;
`;
