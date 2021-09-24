import styled from "styled-components";
import { colors } from "../../styles/bootstrap/colors";
import { spacing } from "../../styles/bootstrap/spacing";

export const ErrorWrapper = styled.div`
  background: ${colors.header};
  width: 600px;
  margin: auto;
  border-radius: 5px;
  padding: ${spacing.medium} ${spacing.biggest};
  margin-top: ${spacing.important};
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: ${spacing.small};
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 300;
`;
