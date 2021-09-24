import styled from "styled-components";
import { colors } from "../../styles/bootstrap/colors";
import { spacing } from "../../styles/bootstrap/spacing";
import { darken } from "polished";

export const Wrapper = styled.header`
  position: relative;
  z-index: 2;
  background: ${colors.header};
  padding: ${spacing.medium} ${spacing.bigger};
  box-shadow: 0 0 4px ${darken(0.2, colors.header)};
`;

export const Title = styled.h1`
  font-size: 24px;
  cursor: pointer;
`;
