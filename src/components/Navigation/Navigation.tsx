import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "router/routes";

const MainWrapper = styled.nav`
  width: 100%;
`;

const Navigation: React.FC = () => {
  return (
    <MainWrapper>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.about}>About</Link>
    </MainWrapper>
  );
};

export default Navigation;
