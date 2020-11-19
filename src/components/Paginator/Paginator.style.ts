import styled from "styled-components";
import breakPoints from "theme/breakPoints";
import { whiteBox } from "mixins/whiteBox";
import { ReactComponent as Arrow } from "assets/arrow.svg";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ul.container {
    ${whiteBox}
    display: grid;
    justify-content: center;
    padding: 10px;

    grid-template-columns: repeat(auto-fit, 50px);
    grid-gap: 10px;
    width: 100%;
    list-style: none;

    li {
      height: 50px;
    }

    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.tertiary};
      background-color: white;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.textSecondary};
      cursor: pointer;
      outline: 0;
    }

    .previous,
    .next {
      background-color: ${({ theme }) => theme.colors.tertiary};
      border-radius: ${({ theme }) => theme.borderRadius.tertiary};
    }

    .disabled {
      background-color: transparent;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.main};
    }
  }

  @media ${breakPoints.tablet} {
    ul.container {
      width: 80%;
    }
  }
`;

export const Next = styled(Arrow)`
  width: 40%;
  height: 40%;
  fill: ${({ theme }) => theme.colors.textSecondary};
`;

export const Previous = styled(Next)`
  transform: rotateY(180deg);
`;
