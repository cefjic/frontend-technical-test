import styled from "styled-components";
import { spacing } from "../../styles/bootstrap/spacing";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-height: calc(100vh - 64px);
  padding: ${spacing.small} ${spacing.small} ${spacing.big};
`;

export const BubbleWrapper = styled.div`
  overflow: auto;
  padding-right: ${spacing.medium};
`;
