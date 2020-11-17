import { css } from "styled-components";

export const whiteBox = css`
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;
