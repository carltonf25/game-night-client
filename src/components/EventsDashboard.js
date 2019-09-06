import React, { useContext, useState, useEffect } from "react";
import { Section, Wrapper } from "./styled-components/common";
import { CreateButton } from "./styled-components/EventsDashboard";
import EventCard from "./EventCard";
import axios from "axios";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";

const EventsDashboard = () => {
  const { user } = useContext(AppContext);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/users/${user.id}/events`
    );

    if (res.data.events) {
      setEvents(res.data.events);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Wrapper
      style={{
        minHeight: `84vh`
      }}
    >
      <Section
        style={{
          display: `grid`,
          gridTemplateColumns: `1/-1`
        }}
      >
        <h1>Upcoming Events</h1>
        <div
          style={{
            gridRow: `2/3`
          }}
        >
          <CreateButton
            onClick={e => {
              e.preventDefault();
              navigate(`/create`);
            }}
          >
            Create
          </CreateButton>
          {events.length > 0 ? (
            events.map(e => <EventCard {...e} />)
          ) : (
            <p
              style={{
                justifySelf: `center`
              }}
            >
              No upcoming events.
            </p>
          )}
        </div>
      </Section>
    </Wrapper>
  );
};

export default EventsDashboard;
