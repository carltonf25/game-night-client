import React from 'react';
import { NavWrapper } from './styled-components/BurgerNav';
import { A } from 'hookrouter';
import { animated } from 'react-spring';

const BurgerNav = ({ user, logOut, style, setNavOpen, isNavOpen }) => {
  return (
    <animated.div style={style}>
      <NavWrapper>
        <a
          href="#0"
          onClick={e => {
            e.preventDefault();
            setNavOpen(!isNavOpen);
          }}
        >
          ×
        </a>
        {user ? (
          <>
            <A
              href="/dashboard"
              onClick={() => {
                setNavOpen(!isNavOpen);
              }}
            >
              Dashboard
            </A>
            <A
              className="nav-link"
              href="/"
              onClick={e => {
                e.preventDefault();
                logOut();
                setNavOpen(!isNavOpen);
              }}
            >
              Log out
            </A>
          </>
        ) : (
          <>
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
          </>
        )}
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
