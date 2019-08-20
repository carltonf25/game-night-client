import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";
require("dotenv").config();

const PageWrapper = styled.div`
  grid-area: main;
  grid-column: 2/3;
  color: #16f5b3;
  margin: 2em;
  min-height: 80vh;

  @media screen and (max-width: 760px) {
    grid-column: 1/-1;
  }
`;

const Section = styled.div`
  background: #261a30;
  padding: 15px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin-bottom: 2em;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 10% 1fr 10%;

  h1 {
    grid-column: 2/3;
  }

  form {
    grid-column: 2/3;
    label {
      color: #16f5b3;
      font-size: 1.5em;
    }

    input {
      background: none;
      border: 1px solid #16f5b3;
      font-size: 1.3em;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      padding: 15px;
      color: #fefefe;
      margin: 1em 0;
      width: 70%;
    }
  }
  table {
    grid-column: 1/-1;
  }

  .description-date {
    display: grid;
    grid-template-columns: 65% 35%;
  }
  button {
    background: #16f5b3;
    padding: 16px;
    border: none;
    font-size: 1.3em;
    -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      background: #17b180;
    }

    @media screen and (max-width: 760px) {
      table {
        width: 100%;
      }
    }
  }
`;

const Error = styled.div`
  background: #ff8e74;
  padding: 15px;
  font-weight: 600;
  margin: 1em 0;
  color: #fefefe;
  border-left: 5px solid red;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;

const Signup = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);

  const handleSubmit = async (email, password) => {
    // check that values are entered
    if (email === "") {
      setError(`Please enter an email address`);
    } else if (password === "") {
      setError(`A password is required`);
    }

    // valid email and password, submit data to signup
    let res = await axios.post(`http://localhost:8000/signup`, {
      email,
      password
    });

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
        <h1 style={{ color: `#fefefe`, fontSize: `2.25em` }}>Sign up</h1>
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
              handleSubmit(email, password);
            }}
          >
            Sign up
          </button>
        </form>
      </Section>
    </PageWrapper>
  );
};

export default Signup;
