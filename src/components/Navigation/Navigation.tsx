import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import routes from "router/routes";

const StyledNavLink = styled(NavLink)`
  margin-right: 50px;
  color: ${({ theme }) => theme.colors.main};
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.7;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:last-child {
    margin-right: 0;
  }

  &.active {
    opacity: 1;
  }

  :hover {
    opacity: 1;
  }
`;

const Navigation: React.FC = () => {
  return (
    <nav>
      <StyledNavLink to={`${routes.countries}/1`}>Home</StyledNavLink>
      <StyledNavLink to={routes.about}>About</StyledNavLink>
    </nav>
  );
};

export default Navigation;
