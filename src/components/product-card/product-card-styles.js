import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  padding: 1rem;
`;
