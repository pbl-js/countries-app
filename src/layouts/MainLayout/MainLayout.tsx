import React from "react";
import styled from "styled-components";

import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 40vh;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const InnerWrapper = styled.div`
  z-index: 1;
  flex-grow: 1;
  padding: ${({ theme }) => theme.mainPadding};
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

const MainLayout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <InnerWrapper>
        <Navigation />

        <StyledMain>{children}</StyledMain>
      </InnerWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default MainLayout;
