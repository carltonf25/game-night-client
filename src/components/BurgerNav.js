import React, { useEffect } from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import { animated } from "react-spring";

const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #272236;
  a {
    font-size: 3rem;
    color: #16f5b3;
    transition: 0.2s ease;
    :hover {
      color: #18f7b5;
      transform: scale(1.03);
    }
    :first-child {
      text-decoration: none;
      position: absolute;
      top: 2em;
      right: 2em;
    }
  }
`;

const BurgerNav = ({ style, setNavOpen, isNavOpen }) => {
  return (
    <animated.div style={style}>
      <NavWrapper>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setNavOpen(!isNavOpen);
          }}
        >
          ✖
        </a>
        <A
          className="nav-link"
          href="/login"
          onClick={() => {
            setNavOpen(!isNavOpen);
          }}
        >
          Log in
        </A>
        <A
          className="nav-link"
          href="/signup"
          onClick={() => {
            setNavOpen(!isNavOpen);
          }}
        >
          Sign up
        </A>
        <A
          className="nav-link"
          href="/"
          onClick={() => {
            setNavOpen(!isNavOpen);
          }}
        >
          Home
        </A>
      </NavWrapper>
    </animated.div>
  );
};

export default BurgerNav;
