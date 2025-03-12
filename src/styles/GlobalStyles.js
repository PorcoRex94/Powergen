import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Michroma';
    }

    :root{
        --naranja: #FDB415;
        --negro: #231E21;
    }
`;

export const GlobalBtn = styled.a`
  border-radius: 20px;
  padding: 1rem;
`;
