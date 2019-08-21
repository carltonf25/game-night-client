import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../AppContext";
import { navigate } from "hookrouter";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10vh 1fr 10vh;
  width: 100vw;
`;

const Section = styled.div`
  background: #261a30;
  padding: 15px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin: 2em;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  color: #fefefe;

  h1 {
    grid-column: 2/3;
    justify-self: center;
    border-bottom: 2px solid #16f5b3;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 760px) {
    grid-column: 1/-1;
  }
`;

const CreateButton = styled.button`
  border: none;
  padding: 15px 10px;
  text-transform: uppercase;
  background: #16f5b3;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;
  color: #261a2f;
  grid-column: 2/3;
  max-width: 100px;
  justify-self: center;
  transition: 0.2s ease;

  :hover {
    cursor: pointer;
    background: #17b180;
  }
`;

const EventsDashboard = () => {
  const { user } = useContext(AppContext);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await axios.get(
      `http://localhost:8000/users/${user.id}/events`
    );

    if (events) {
      setEvents(events);
      console.log(events);
    }
  };

  useEffect(() => {
    getEvents();
  });

  return (
    <Wrapper>
      <Section>
        <h1>Upcoming Events</h1>
        <CreateButton
          onClick={e => {
            e.preventDefault();
            navigate(`/create`);
          }}
        >
          Create
        </CreateButton>
        {events.length > 0 ? (
          <ul>
            {events.map(e => (
              <li>{e.title}</li>
            ))}
          </ul>
        ) : (
          <p
            style={{
              gridColumn: `2/3`,
              justifySelf: `center`
            }}
          >
            No upcoming events.
          </p>
        )}
      </Section>
    </Wrapper>
  );
};

export default EventsDashboard;
