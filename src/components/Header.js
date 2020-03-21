import React, { useContext } from 'react';
import { ReactComponent as Logo } from '../img/text-logo.svg';
import { A } from 'hookrouter';
import { AppContext } from '../AppContext';
import { HeaderWrapper } from './styled-components/Header';
import logo from '../img/gn-logo.png';

const Header = ({ logOut, isNavOpen, setNavOpen }) => {
  const { user } = useContext(AppContext);
  return (
    <HeaderWrapper>
      <A href="/">
        <img alt="logo" style={{ width: `12em` }} src={logo} />
      </A>
      <nav>
        {user ? (
          <>
            <A href="/dashboard">Dashboard</A>
            <A
              href="/"
              onClick={e => {
                e.preventDefault();
                logOut();
              }}
            >
              Log out
            </A>
          </>
        ) : (
          <>
            <A href="/login">Log in</A>
            <A href="/signup">Sign up</A>
          </>
        )}
      </nav>
      <div
        className="hamburger"
        onClick={() => {
          setNavOpen(!isNavOpen);
        }}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
