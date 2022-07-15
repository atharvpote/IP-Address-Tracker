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

.leaflet-container{
    width: 100%;
    height: calc(100vh - 19rem);
    min-height: 27rem;
    
    @media (min-width: 600px) {
        height: calc(100vh - 14rem);
  }
}
`;
