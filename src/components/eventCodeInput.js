import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";
require("dotenv").config();

const EventCodeWrapper = styled.div`
  grid-area: main;
  grid-column: 2/3;
  color: #16f5b3;
  margin: 2em;
  min-height: 80vh;
  label {
    color: #16f5b3;
    font-size: 1.5em;
  }

  input {
    background: none;
    border: 1px solid #16f5b3;
    font-size: 1.3em;
    width: 30vh;
    -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    padding: 15px;
    color: #fefefe;
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
  }

  @media screen and (max-width: 760px) {
    .input-button-wrapper {
      display: grid;
      grid-template-rows: auto auto;
      button {
        margin-top: 1.5rem;
        grid-row: 2;
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

const EventCodeInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const { setEvent, event } = useContext(AppContext);

  const getEvent = async () => {
    let eventCode = inputValue;
    if (eventCode === "") {
      setError("Please enter a code");
    }

    let res = await fetch(`http://localhost:8000/api/events/${eventCode}`);

    let eventData = await res.json();
    if (eventData.error) {
      // no event found. set error
      setError(eventData.error);
    } else if (inputValue === "") {
      // event input blank. set error.
      setError(`Please enter an event code.`);
    } else {
      // found an event. navigate to event page route
      await setEvent(eventData);
      navigate(`/events/${eventCode}`);
    }
  };
  return (
    <EventCodeWrapper>
      <h1 style={{ color: `#fefefe`, fontSize: `2.25em` }}>
        The easiest event management platform for organizers and attendees
      </h1>
      {error && (
        <Error>
          <p>{error}</p>
        </Error>
      )}
      <label htmlFor="event-code">Enter event code:</label>
      <div
        className="input-button-wrapper"
        style={{
          width: `auto`,
          marginTop: `1em`
        }}
      >
        <input
          type="text"
          name="event-code"
          onChange={e => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button
          onClick={e => {
            e.preventDefault();
            getEvent();
          }}
        >
          Join Event
        </button>
      </div>
    </EventCodeWrapper>
  );
};

export default EventCodeInput;
