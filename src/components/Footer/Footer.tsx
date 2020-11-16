import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Footer: React.FC = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
