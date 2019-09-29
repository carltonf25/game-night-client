import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useSpring, animated } from "react-spring";
import { Wrapper, Section, Error } from "./styled-components/common";
import axios from "axios";
import { A, navigate } from "hookrouter";
import ChecklistItem from "./ChecklistItem";

const EventBuilder = () => {
  const { user } = useContext(AppContext);

  const [error, setError] = useState("");
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    user_id: user.id,
    header_image: "http://via.placeholder.com/640x360"
  });

  const createEvent = async () => {
    const res = await axios.post(
      `https://damp-falls-69999.herokuapp.com/api/events`,
      { event, api_token: user.api_token }
    );

    console.log(res);

    if (res.data.created === true) {
      navigate("/dashboard");
    } else {
      setError("Error creating the event.");
    }
  };

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
          New Event
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
          defaultVal="http://via.placeholder.com/640x360"
        />
        <ChecklistItem
          item="title"
          setEvent={setEvent}
          heading="Title"
          defaultVal="Title"
        />
        <ChecklistItem
          item="description"
          setEvent={setEvent}
          heading="Description"
          defaultVal="Description"
        />
        <ChecklistItem
          item="date"
          setEvent={setEvent}
          heading="When?"
          defaultVal=""
          type="date"
        />
        <ChecklistItem
          item="location"
          setEvent={setEvent}
          heading="Where?"
          defaultVal=""
        />
        <button
          style={{ gridColumn: `2/3`, width: `25%`, marginLeft: `auto` }}
          onClick={e => {
            e.preventDefault();
            createEvent();
          }}
        >
          Publish
        </button>
      </Section>
    </Wrapper>
  );
};

export default EventBuilder;
