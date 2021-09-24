import styled from "styled-components";
import { colors } from "../../../styles/bootstrap/colors";
import { spacing } from "../../../styles/bootstrap/spacing";
import { lighten, darken } from "polished";

export const Layout = styled.li`
  background: ${lighten(0.1, colors.header)};
  padding: ${spacing.small};
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 4px ${darken(0.07, colors.header)};
  transition: background 0.2s;

  :hover {
    background: ${lighten(0.15, colors.header)};
    cursor: pointer;
  }

  & + & {
    margin-top: ${spacing.small};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing.biggest};
  height: ${spacing.biggest};
  background: linear-gradient(
    ${lighten(0.05, colors.header)},
    ${darken(0.05, colors.header)} 66%
  );
  border-radius: 50%;
  box-shadow: 0 0 4px ${colors.header};
  margin-right: ${spacing.small};
`;

export const Name = styled.p``;
