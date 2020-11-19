import React from "react";
import styled from "styled-components";
import { whiteBox } from "mixins/whiteBox";
import { Link } from "react-router-dom";

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.m};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  p {
    margin: 10px 0;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${whiteBox};
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
`;

const PageNotFound: React.FC = () => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go to homepage</Link>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default PageNotFound;
