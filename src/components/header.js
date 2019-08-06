import React from "react";
import styled from "styled-components";
import logo from "../img/text-logo.svg";

const HeaderWrapper = styled.header`
  background: #261a30;
  padding: 2em;
  grid-area: header;
  -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  display: grid;
  grid-template-areas: "logo open open nav";
  grid-template-columns: auto 40% 1fr;

  img {
    width: 300px;
    grid-area: logo;
  }

  h1 {
    text-transform: uppercase;
    color: #16f5b3;
    margin: 0;
  }

  nav {
    grid-column: 3;
    text-transform: uppercase;
    a {
      color: #16f5b3;
      font-weight: 600;
      text-decoration: none;
      margin-left: 1em;
      transition: 0.2s ease;
      :hover {
        border-bottom: 2px solid #ff70dc;
        color: #17b180;
      }
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <img src={logo} />
    <nav>
      <a href="#0">Log in</a>
      <a href="#0">Sign up</a>
    </nav>
  </HeaderWrapper>
);

export default Header;
