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
  label {
    background: #272236;
    font-size: 1.75em;
  }

  input {
    background: none;
    border: 1px solid #16f5b3;
    font-size: 1.5em;
    -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
    -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
    box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
    padding: 15px;
    color: #fefefe;
  }

  button {
    background: #16f5b3;
    padding: 15px;
    font-size: 1.5em;
    border: 1px solid #165b3;
    -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
    -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
    box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      background: #17b180;
    }
  }
`;

const EventCodeInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const { setEvent, event } = useContext(AppContext);

  const getEvent = async () => {
    let eventCode = inputValue;
    let res = await fetch(`http://localhost:8000/api/events/${eventCode}`);

    let eventData = await res.json();
    if (eventData) {
      await setEvent(eventData);
      navigate(`/events/${eventCode}`);
    } else {
      setError(eventData.error);
    }
  };
  return (
    <EventCodeWrapper>
      <h1 style={{ color: `#fefefe`, fontSize: `2.25em` }}>
        The easiest event management platform for organizers and attendees
      </h1>
      {error && <p>{error}</p>}
      <label htmlFor="event-code">Enter event code:</label>
      <div
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
