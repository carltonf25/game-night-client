import React from "react";
import styled from "styled-components";
import { A } from "hookrouter";
import axios from "axios";

const CardWrapper = styled.div`
  background-color: #fefefe;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin: 2em;
  color: #fefefe;
  height: 20vh;
  border-radius: 5%;
  grid-column: auto;
  transition: 0.2s ease;
  cursor: pointer;
  grid-column: 2/3;

  :hover {
    transform: scale(1.03);
  }
`;

const EventCard = ({
  id,
  title,
  header_image,
  date,
  event_code,
  setSuccess,
  setError,
  getEvents
}) => {
  const deleteEvent = async () => {
    let res = await axios.delete(
      `https://damp-falls-69999.herokuapp.com/api/events/${id}`
    );
    if (res.data.success === true) {
      getEvents();
      setSuccess(`Successfully deleted event.`);
      window.scrollTo(0, 0);
    } else {
      setError("Unable to delete event");
    }
  };
  return (
    <>
      <button
        onClick={e => {
          e.preventDefault();
          deleteEvent(id);
          getEvents();
        }}
        style={{ marginLeft: `85%` }}
      >
        ✖
      </button>
      <A
        style={{
          textDecoration: `none`
        }}
        href={`/events/${event_code}`}
      >
        <CardWrapper
          style={{
            backgroundImage: `url(${header_image})`
          }}
        >
          <div
            style={{
              background: `rgba(100, 100, 100, 0.4)`,
              width: `100%`,
              height: `100%`
            }}
          >
            <div style={{ padding: `1.5em` }}>
              <h3>{title}</h3>
              <h4>{date}</h4>
            </div>
          </div>
        </CardWrapper>
      </A>
    </>
  );
};

export default EventCard;
