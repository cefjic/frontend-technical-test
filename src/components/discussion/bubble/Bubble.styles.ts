import { lighten } from "polished";
import styled, { css } from "styled-components";
import { colors } from "../../../styles/bootstrap/colors";
import { spacing } from "../../../styles/bootstrap/spacing";

export const Wrapper = styled.div<{
  isLoggedUser: boolean;
  hasSamePreviousAuthor: boolean;
}>`
  display: flex;
  justify-content: ${({ isLoggedUser }) =>
    isLoggedUser ? "flex-end" : "flex-start"};
  margin-top: ${({ hasSamePreviousAuthor }) =>
    hasSamePreviousAuthor ? spacing.base : spacing.small};
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const Author = styled.span<{ isLoggedUser: boolean }>`
  margin-bottom: ${spacing.smaller};
  padding: 0 ${spacing.big};
  font-size: 14px;
  text-align: ${({ isLoggedUser }) => (isLoggedUser ? "right" : "left")};
`;

export const MessageBubble = styled.div<{
  isLoggedUser: boolean;
  hasSamePreviousAuthor: boolean;
}>`
  position: relative;
  background: ${({ isLoggedUser }) =>
    isLoggedUser ? colors.blue : lighten(0.15, colors.header)};
  padding: ${spacing.smaller} ${spacing.big};
  border-radius: 20px;
  font-size: 14px;

  ${({ hasSamePreviousAuthor, isLoggedUser }) =>
    !hasSamePreviousAuthor &&
    css`
      ::before {
        position: absolute;
        content: "";
        top: -${spacing.base};

        width: ${spacing.smallest};
        height: ${spacing.smallest};
        transform: rotate(45deg);

        ${isLoggedUser
          ? css`
              background: ${colors.blue};
              right: ${spacing.bigger};
            `
          : css`
              background: ${lighten(0.15, colors.header)};
              left: ${spacing.bigger};
            `}
      }
    `}
`;
