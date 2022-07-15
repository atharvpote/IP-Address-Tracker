import { createGlobalStyle } from "styled-components";
import { baseFontSize, fontFamily } from "./typography";

export const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
}

*,*::after,*::before{
    box-sizing: inherit;
}

body{
    margin: 0;
    font-size: ${baseFontSize}px;
    font-family: ${fontFamily};
}
`;
