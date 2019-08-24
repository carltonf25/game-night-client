import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import { Section, Error, Success } from "./styled-components/common";
import { PageWrapper } from "./styled-components/Signup";
import { navigate } from "hookrouter";
require("dotenv").config();

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);

  const clearFlashMessages = () => {
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (email, password) => {
    clearFlashMessages();
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
      setSuccess(`Account successfully created! Logging you in..`);
      setUser(res.data.user);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
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
        {success && (
          <Success>
            <p>{success}</p>
          </Success>
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
