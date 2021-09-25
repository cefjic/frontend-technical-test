import styled from "styled-components";
import { spacing } from "../../styles/bootstrap/spacing";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: ${spacing.small};
  margin-bottom: ${spacing.big};
`;
