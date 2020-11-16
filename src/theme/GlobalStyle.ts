import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.textPrimary};
    }
`;

export default GlobalStyle;
