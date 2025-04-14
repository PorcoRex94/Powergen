import styled from "styled-components";

export const Sidebar = styled.div`
  width: 100%;
  padding: 1rem;
  background: #fafafa;
  border-right: 1px solid #ddd;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 1rem;
`;

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;
