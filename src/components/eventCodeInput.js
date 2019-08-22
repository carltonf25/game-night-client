import React, { useState, useContext } from "react";
import { Error } from "./styled-components/common";
import { EventCodeWrapper } from "./styled-components/EventCodePage";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";
require("dotenv").config();

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
