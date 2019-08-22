import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";
import { Section, Error } from "./styled-components/common";
import { PageWrapper } from "./styled-components/Login";
require("dotenv").config();

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);

  const logIn = async (email, password) => {
    // check that values were entered
    if (email === "") {
      setError(`Please enter an email address`);
    } else if (password === "") {
      setError(`A password is required`);
    }

    const res = await axios.post(`http://localhost:8000/auth/login`, {
      email,
      password
    });

    console.log(res);

    if (res.data.error) {
      setError(res.data.error);
    } else if (res.data.user) {
      setUser(res.data.user);
      navigate("/dashboard");
    }
  };

  return (
    <PageWrapper>
      <Section>
        <h1 style={{ color: `#fefefe`, fontSize: `2.25em` }}>Sign in</h1>
        {error && (
          <Error>
            <p>{error}</p>
          </Error>
        )}
        <form>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <br />
          <button
            onClick={e => {
              e.preventDefault();
              logIn(email, password);
            }}
          >
            Log in
          </button>
        </form>
      </Section>
    </PageWrapper>
  );
};

export default Login;
