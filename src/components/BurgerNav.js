import React from "react";
import { NavWrapper } from "./styled-components/BurgerNav";
import { A } from "hookrouter";
import { animated } from "react-spring";

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
