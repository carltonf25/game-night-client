import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../AppContext';
import { Section, Wrapper, Error, Success } from './styled-components/common';
import { Form } from './styled-components/Form';
import { navigate } from 'hookrouter';
require('dotenv').config();

const Signup = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AppContext);
  const prefix =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_DEV_PREFIX
      : process.env.REACT_APP_PROD_PREFIX;

  const clearFlashMessages = () => {
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (email, password) => {
    clearFlashMessages();
    // check that values are entered
    if (email === '') {
      setError(`Please enter an email address`);
    } else if (password === '') {
      setError(`A password is required`);
    }

    // valid email and password, submit data to signup
    let res = await axios.post(`${prefix}/signup`, {
      email,
      password
    });

    if (res.data.error) {
      setError(res.data.error);
    } else if (res.data.user) {
      let userString = JSON.stringify(res.data.user);
      localStorage.setItem('user', userString);
      setUser(res.data.user);
      // flash success message and log into dashboard page
      setSuccess(`Account successfully created! Logging you in..`);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }
  };

  return (
    <Wrapper>
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
        <Form>
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
        </Form>
      </Section>
    </Wrapper>
  );
};

export default Signup;
