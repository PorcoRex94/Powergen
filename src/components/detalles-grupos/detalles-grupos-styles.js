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
  padding-bottom: 3.5rem;
`;

export const SliderHeroContainer = styled.div`
  display: flex;
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
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 46%;
  padding: 0 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .input__container {
    border-bottom: 1px solid gray;
    padding-bottom: 0.5rem;
  }
`;

export const PremStandContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DetalleContainer = styled.div`
  width: 85%;
  padding: 1rem;

  h2 {
    text-align: center;
    padding-bottom: 2.5rem;
  }
`;

export const EspecifcTextContainer = styled.div`
  display: flex;
  gap: 25px;
  padding: 0.75rem 0;
  border-bottom: 1px solid gray;
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
