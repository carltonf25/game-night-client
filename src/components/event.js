import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { useRedirect } from "hookrouter";

import placeholder from "../img/placeholder.png";

const EventWrapper = styled.div`
  color: #fefefe;
  grid-column: 1/-1;

  .event-heading {
    display: grid;
    grid-template-columns: 65vw 35vw;
    grid-template-rows: auto auto;
    width: 100vw;
    img {
      width: 100%;
      grid-column: 1/2;
      grid-row: 1;
      border-top: 1px solid #fefefe;
      border-bottom: 1px solid #fefefe;
    }
    .date-section {
      padding: 15px;
      border-top: 1px solid #fefefe;
      border-bottom: 1px solid #fefefe;
    }
    button {
      background: #16f5b3;
      border-radius: 5px;
      font-size: 1.2em;
      margin: 1em;
      padding: 15px;
      grid-row: 2;
      grid-column: 2/3;
      width: 60%;
      justify-self: center;
      border: none;
      -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
      -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
      box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
      transition: 0.2s ease;
      :hover {
        cursor: pointer;
        transform: scale(1.02);
        background: #17b180;
      }
    }
  }
`;

const Section = styled.div`
  background: #261a30;
  padding: 15px;
  -webkit-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  -moz-box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  box-shadow: 1px 0px 4px 1px rgba(20, 20, 20, 0.6);
  display: grid;
`;

const Event = () => {
  const { user, event } = useContext(AppContext);

  return (
    <EventWrapper>
      <div className="event-heading">
        <img src={event.img || placeholder} />
        <div className="date-section">
          <h3>
            {event.date} at {event.location || "TBD"}
          </h3>
          <h2>{event ? event.title : "Placeholder title"}</h2>
        </div>
        <button>RSVP</button>
      </div>
      <Section>
        <h3>Description:</h3>
        <p>{event ? event.description : "Description placeholder"}</p>
      </Section>
    </EventWrapper>
  );
};

export default Event;
