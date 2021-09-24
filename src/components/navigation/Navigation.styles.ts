import styled from "styled-components";
import { colors } from "../../styles/bootstrap/colors";
import { darken } from "polished";
import { spacing } from "../../styles/bootstrap/spacing";

export const Wrapper = styled.nav`
  background: ${darken(0.05, colors.header)};
  border-right: 1px solid ${darken(0.2, colors.header)};
  width: 25%;
`;

export const List = styled.ul`
  padding: ${spacing.small};
`;
