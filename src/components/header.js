import React, { useContext } from "react";
import logo from "../img/text-logo.svg";
import { A, navigate } from "hookrouter";
import { AppContext } from "../AppContext";
import { HeaderWrapper } from "./styled-components/Header";

const Header = ({ isNavOpen, setNavOpen }) => {
  const { user, setUser } = useContext(AppContext);
  return (
    <HeaderWrapper>
      <A href="/">
        <img src={logo} />
      </A>
      <nav>
        {user ? (
          <A
            href="/"
            onClick={e => {
              e.preventDefault();
              setUser(null);
            }}
          >
            Log out
          </A>
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
