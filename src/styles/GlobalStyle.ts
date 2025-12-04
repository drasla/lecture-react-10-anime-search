import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #0e0e0e;
    color: #ffffffcc;
    font-family: "Inter", sans-serif;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;