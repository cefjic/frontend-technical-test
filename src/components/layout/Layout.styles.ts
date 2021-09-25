import styled from "styled-components";
import { media } from "../../styles/bootstrap/breakpoints";

export const Main = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;

  display: flex;
  flex-direction: column;

  ${media.minWidth("laptop")`
    flex-direction: row;
  `}
`;
