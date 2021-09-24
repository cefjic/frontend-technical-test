import styled from "styled-components";
import { colors } from "../../styles/bootstrap/colors";
import { spacing } from "../../styles/bootstrap/spacing";

export const Wrapper = styled.header`
  position: relative;
  z-index: 2;
  background: ${colors.header};
  padding: ${spacing.medium} ${spacing.important};
  box-shadow: 0 0 10px #000;
`;

export const Title = styled.h1`
  font-size: 24px;
`;
