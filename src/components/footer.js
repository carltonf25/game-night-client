import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #261a30;
  grid-area: footer;
  display: flex;
  padding: 1.5em;
  color: #16f5b3;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
`;

const Footer = () => (
  <FooterWrapper>
    <code>Made with ❤ by Carlton Freeman</code>
  </FooterWrapper>
);

export default Footer;
