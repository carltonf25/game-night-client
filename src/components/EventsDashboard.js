import React, { useContext, useState, useEffect } from "react";
import { Section, Wrapper, Success, Error } from "./styled-components/common";
import { CreateButton } from "./styled-components/EventsDashboard";
import EventCard from "./EventCard";
import axios from "axios";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";
import { animated, useSpring } from "react-spring";

const EventsDashboard = () => {
  const { user } = useContext(AppContext);
  const [events, setEvents] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const getEvents = async () => {
    const res = await axios.get(
      `https://damp-falls-69999.herokuapp.com/api/users/${user.id}/events?api_token=${user.api_token}`
    );

    if (res.data.events) {
      setEvents(res.data.events);
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

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <animated.div style={fadeIn}>
    <Wrapper>
      <Section>
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
        <h1>Events Dashboard</h1>
        <CreateButton
          onClick={e => {
            e.preventDefault();
            navigate(`/create`);
          }}
        >
          Create
        </CreateButton>
        {events.length > 0 ? (
          events.map(e => (
            <EventCard
              user={user}
              {...e}
              setSuccess={setSuccess}
              setError={setError}
              getEvents={getEvents}
            />
          ))
        ) : (
          <p
            style={{
              justifySelf: `center`
            }}
          >
            No upcoming events.
          </p>
        )}
      </Section>
    </Wrapper>
    </animated.div>
  );
};

export default EventsDashboard;
