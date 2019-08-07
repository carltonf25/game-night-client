import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { useRedirect } from "hookrouter";

const EventWrapper = styled.div`
  color: #fefefe;
  width: 75vw;
`;

const Event = () => {
  const { user, event } = useContext(AppContext);

  return (
    <EventWrapper>
      <h1>{event ? event.title : "Placeholder title"}</h1>
      <p>{event ? event.description : "Description placeholder"}</p>
      <hr />
    </EventWrapper>
  );
};

export default Event;
