import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useSpring, animated } from "react-spring";
import { Wrapper, Section, Error } from "./styled-components/common";
import axios from "axios";
import { A, navigate } from "hookrouter";
import ChecklistItem from "./ChecklistItem";

const EventEditor = ({ eventCode }) => {
  const { user } = useContext(AppContext);

  const [error, setError] = useState("");
  const [event, setEvent] = useState({});

  const fetchEvent = async () => {
    const res = await axios.get(
      `https://damp-falls-69999.herokuapp.com/api/events/${eventCode}?api_token=${user.api_token}`
    );

    if (res.data.event) {
      setEvent(res.data.event);
    } else {
      navigate("/dashboard");
    }
  };
  const updateEvent = async () => {
    const res = await axios.put(
      `https://damp-falls-69999.herokuapp.com/api/events/${event.event_code}?api_token=${user.api_token}`,
      event
    );

    console.log(res);

    if (res.status === 200) {
      navigate("/dashboard");
    } else {
      setError("Error updating the event.");
    }
  };

  useEffect(() => {
    fetchEvent();
    console.log(event);
  }, []);

  const slideIn = useSpring({
    from: {
      transform: `translate3d(100%,0, 0)`,
      opacity: 0
    },
    to: {
      transform: `translate3d(0,0,0)`,
      opacity: 1
    }
  });

  return (
    <Wrapper>
      <Section
        style={{
          gridColumn: `2/3`,
          display: `grid`,
          gridTemplateColumns: `10% 1fr 10%`,
          background: `none`,
          boxShadow: `none`
        }}
      >
        <A
          style={{
            color: `#15f5b3`,
            textTransform: `uppercase`,
            fontWeight: 600,
            textDecoration: `none`
          }}
          href="/dashboard"
        >
          ◀ Back
        </A>
        <h1
          style={{
            gridColumn: `2/3`,
            textAlign: `center`
          }}
        >
          Edit Event: {event.title}
        </h1>
        {error && (
          <Error>
            <p>{error}</p>
          </Error>
        )}
        <ChecklistItem
          item="header_image"
          setEvent={setEvent}
          heading="Header Image URL"
          defaultVal={event.header_image}
        />
        <ChecklistItem
          item="title"
          setEvent={setEvent}
          heading="Title"
          defaultVal={event.title}
        />
        <ChecklistItem
          item="description"
          setEvent={setEvent}
          heading="Description"
          defaultVal={event.description}
        />
        <ChecklistItem
          item="date"
          setEvent={setEvent}
          heading="When?"
          defaultVal={event.date}
          type="date"
        />
        <ChecklistItem
          item="location"
          setEvent={setEvent}
          heading="Where?"
          defaultVal={event.location}
        />
        <button
          style={{ gridColumn: `2/3`, width: `25%`, marginLeft: `auto` }}
          onClick={e => {
            e.preventDefault();
            updateEvent();
          }}
        >
          Save
        </button>
      </Section>
    </Wrapper>
  );
};

export default EventEditor;