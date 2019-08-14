import React from "react";
import styled from "styled-components";
import logo from "../img/text-logo.svg";
import { A } from "hookrouter";

const HeaderWrapper = styled.header`
  background: #261a30;
  grid-area: header;
  padding: 1.2em;
  align-items: center;
  -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  display: grid;
  grid-template-areas: "logo open open nav";
  grid-template-columns: auto 40% 1fr;
  }


  img {
    width: 200px;
    grid-area: logo;
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
  .hamburger{
  display: none;
  cursor: pointer;
  grid-column: 3/-1;

}

.bar1, .bar2, .bar3 {
  width: 25px;
  height: 3px;
  background-color: #16f5b3;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

  @media screen and (max-width: 760px) {
    nav {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;
const Header = () => (
  <HeaderWrapper>
    <A href="/">
      <img src={logo} />
    </A>
    <nav>
      <A href="/login">Log in</A>
      <A href="/signup">Sign up</A>
    </nav>
    <div
      className="hamburger"
      id="transform-button"
      onclick={() => {
        const el = document.getElementById("transform-button");
        el.classList.toggle("change");
      }}
    >
      <div class="bar1" />
      <div class="bar2" />
      <div class="bar3" />
    </div>
  </HeaderWrapper>
);

export default Header;
