import styled from "styled-components";
import { media } from "../../styles/bootstrap/breakpoints";

export const Main = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;

  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 64px);

  ${media.minWidth("laptop")`
    flex-direction: row;
  `}
`;
