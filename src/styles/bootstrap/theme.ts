import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors } from "./colors";
import { BodyFont } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    ${BodyFont}
    background: ${colors.body};
    color: ${colors.font}
  }
  
  #__next {

    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    flex-direction: column
  }
`;
