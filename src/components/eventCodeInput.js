import React, { useState, useContext } from "react";
import { Error, Success, Wrapper, Section } from "./styled-components/common";
import { EventCodeWrapper } from "./styled-components/EventCodePage";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";
import { useSpring, animated } from "react-spring";
require("dotenv").config();

const EventCodeInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setEvent, event } = useContext(AppContext);

  const clearFlashMessages = () => {
    setError("");
    setSuccess("");
  };
  const getEvent = async () => {
    clearFlashMessages();
    let eventCode = inputValue;
    if (eventCode === "") {
      setError("Please enter a code");
    }

    let res = await fetch(
      `https://damp-falls-69999.herokuapp.com/api/events/${eventCode}`
    );

    let eventData = await res.json();
    if (eventData.error) {
      // no event found. set error
      setError(eventData.error);
    } else if (inputValue === "") {
      // event input blank. set error.
      setError(`Please enter an event code.`);
    } else {
      // found an event. navigate to event page route
      await setEvent(eventData.event);
      setSuccess(eventData.success);
      setTimeout(() => {
        navigate(`/events/${eventCode}`);
      }, 1500);
    }
  };

  const fadeIn = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <Wrapper>
      <Section style={{ background: `none`, boxShadow: `none` }}>
        <EventCodeWrapper>
          {success && (
            <Success>
              <p>{success}</p>
            </Success>
          )}
          {error && (
            <Error>
              <p>{error}</p>
            </Error>
          )}
          <div
            className="input-button-wrapper"
            style={{
              marginTop: `1em`
            }}
          >
            <h1 style={{ color: `#fefefe`, fontSize: `2.25em` }}>
              RSVP to an event in seconds. <br />
              No account required.
            </h1>
            <label htmlFor="event-code">Enter event code:</label>
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
      </Section>
    </Wrapper>
  );
};

export default EventCodeInput;
