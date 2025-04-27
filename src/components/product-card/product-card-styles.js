import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  transition: box-shadow 0.2s;
  display: flex;
  height: 350px;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  margin: 0.25rem 0;
`;

export const ImageWrapper = styled.div`
  width: 35%;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  padding: 1rem;
  text-align: center;
  width: 65%;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  gap: 30px;
`;

export const ContainerTextFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;
