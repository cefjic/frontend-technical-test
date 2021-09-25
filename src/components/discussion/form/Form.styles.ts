import { lighten } from "polished";
import styled from "styled-components";
import { colors } from "../../../styles/bootstrap/colors";
import { spacing } from "../../../styles/bootstrap/spacing";

export const Layout = styled.form`
  display: flex;
  margin-top: ${spacing.big};
  padding-right: ${spacing.medium};
`;

export const Input = styled.input`
  flex: 1;
  padding: ${spacing.smallest} ${spacing.smaller};
  border-radius: 20px;
  background: transparent;
  color: ${lighten(0.7, colors.header)};
  border: 1px solid ${lighten(0.4, colors.header)};
  font-size: 14px;
  transition: border 0.2s;

  :active,
  :focus {
    outline: none;
  }

  :focus {
    border: 1px solid ${lighten(0.5, colors.header)};
  }

  ::placeholder {
    color: ${lighten(0.7, colors.header)};
  }
`;

export const Button = styled.button`
  margin-left: ${spacing.small};
  padding: ${spacing.smallest} ${spacing.smaller};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
  background: ${lighten(0.4, colors.header)};

  :hover {
    background: ${lighten(0.6, colors.header)};
  }

  :active {
    background: ${lighten(0.8, colors.header)};
  }
`;
