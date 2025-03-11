import { createGlobalStyle } from "styled-components";

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
