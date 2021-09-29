import styled from "styled-components";
import { colors } from "../../styles/bootstrap/colors";
import { darken } from "polished";
import { spacing } from "../../styles/bootstrap/spacing";
import { media } from "../../styles/bootstrap/breakpoints";

export const Wrapper = styled.nav<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  background: ${darken(0.05, colors.header)};
  border-right: 1px solid ${darken(0.2, colors.header)};
  flex: 1;

  ${media.minWidth("laptop")`
    display: block;
    flex: unset;
    min-width: 25%;
  `}
`;

export const List = styled.ul`
  padding: ${spacing.small};
`;
