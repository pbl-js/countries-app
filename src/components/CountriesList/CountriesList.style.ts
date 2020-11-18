import styled from "styled-components";
import { whiteBox } from "mixins/whiteBox";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.mainPadding};

  ul.container {
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: repeat(auto-fit, 40px);
    grid-gap: 20px;
    width: 100%;
    height: 50px;
    list-style: none;

    li {
      width: 20px;
      height: 20px;
      background-color: white;
    }
  }
`;

export const Search = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ListWrapper = styled.ul`
  ${whiteBox}
`;
