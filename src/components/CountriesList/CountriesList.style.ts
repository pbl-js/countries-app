import styled from "styled-components";
import { whiteBox } from "mixins/whiteBox";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.mainPadding};
`;

export const ListWrapper = styled.ul`
  ${whiteBox}
`;
