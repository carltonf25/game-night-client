import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import RsvpModal from "./rsvpmodal";
import { AppContext } from "../AppContext";
import { useRedirect } from "hookrouter";

import placeholder from "../img/placeholder.png";

const Section = styled.div`
  background: #261a30;
  padding: 15px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin-bottom: 2em;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    grid-column: 1/-1;
  }
  table {
    grid-column: 1/-1;
  }

  .description-date {
    display: grid;
    grid-template-columns: 65% 35%;
  }

  @media screen and (max-width: 760px) {
    table {
      width: 100%;
    }
  }
`;

const EventWrapper = styled.div`
  margin-top: 2em;
  color: #fefefe;
  grid-template-columns: 10vw auto auto 10vw;
  grid-column: 2/3;

  .event-heading {
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 3em;
    grid-column-gap: 3em;
    img {
      width: 100%;
      max-width: 760px;
      grid-column: 1/2;
      grid-row: 1;
    }
    .date-section {
      padding: 15px;
      grid-row: 1;
      grid-column: 2/3;
    }
    button {
      background: #16f5b3;
      border-radius: 5px;
      font-size: 1.2em;
      padding: 10px;
      grid-row: 2;
      grid-column: 2/3;
      width: 60%;
      margin-bottom: 2em;
      justify-self: center;
      border: none;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      transition: 0.2s ease;
      :hover {
        cursor: pointer;
        transform: scale(1.02);
        background: #17b180;
      }
    }
  }
  @media screen and (max-width: 760px) {
    grid-column: 1/-1;
    .event-heading {
      grid-template-rows: auto;
      .date-section {
        display: none;
      }
      img,
      button {
        grid-column: 1/-1;
      }
    }
    .description-date {
      div {
        grid-column: 1/-1;
      }
    }
  }
`;

const GuestTable = styled.table`
  border: 1px solid rgba(220, 220, 220, 0.5);
  width: 50%;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);

  td,
  th {
    padding: 1em;
  }
`;

const Event = () => {
  const { user, event } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState([{ name: "Test" }]);

  const fetchGuests = async () => {
    let res = await fetch(
      `http://localhost:8000/api/events/${event.id}/guests`
    );
    const guests = await res.json();

    if (guests) {
      setGuests(guests);
    } else {
      console.log("no guests found");
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const parseDate = datetime => {
    let d = datetime.split(/[- :]/);
    return new Date(Date.UTC(d[0], d[1] - 1, d[2], d[3], d[4], d[5]));
  };

  return (
    <>
      {modal && <RsvpModal modal={modal} closeModal={() => setModal(false)} />}
      <EventWrapper>
        <div className="event-heading">
          <img src={event.header_image || placeholder} />
          <div className="date-section">
            <h3>
              {event.date} at {event.location || "TBD"}
            </h3>
            <h2>{event ? event.title : "Placeholder title"}</h2>
          </div>
          <button
            onClick={e => {
              e.preventDefault();
              setModal(true);
            }}
          >
            RSVP
          </button>
        </div>
        <Section>
          <div className="description-date">
            <div
              style={{
                padding: `20px`
              }}
            >
              <h3>About this event:</h3>
              <p>
                {event.description ? event.description : "placeholder text"}
              </p>
            </div>
            <div
              style={{
                padding: `20px`
              }}
            >
              <h3>Date & Time:</h3>
              <p>{event.date ? event.date : "12/31 @ 7pm"}</p>
            </div>
          </div>
        </Section>
        <Section>
          <h2>Who's going?</h2>
          {guests.length >= 3 ? (
            <p>{`${guests[0].name}, ${guests[1].name}, and ${
              guests[2].name
            } are going`}</p>
          ) : null}
          <GuestTable>
            <tbody>
              <tr>
                <th>Guest:</th>
                <th>RSVP</th>
              </tr>
              {guests.map(g => (
                <tr key={`guest-${g.id}`}>
                  <td>{g.name}</td>
                  <td>✅</td>
                </tr>
              ))}
            </tbody>
          </GuestTable>
        </Section>
      </EventWrapper>
    </>
  );
};

export default Event;
