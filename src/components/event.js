import React, { useContext, useState, useEffect } from "react";
import { Section } from "./styled-components/common";
import { EventWrapper, GuestTable } from "./styled-components/Event";

import axios from "axios";
import RsvpModal from "./RsvpModal";
import { AppContext } from "../AppContext";

const Event = () => {
  const { user, event, setEvent } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState([{ name: "Test" }]);

  const fetchGuests = async () => {
    let res = await axios.get(
      `http://localhost:8000/api/events/${event.event_code}/guests`
    );

    if (res.data.guests) {
      setGuests(res.data.guests);
    } else {
      console.log("no guests found");
    }
  };

  useEffect(() => {
    setEvent(event);
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
          <img src={event.header_image} />
          <div className="date-section">
            <h3>
              {event.date} at {event.location || "TBD"}
            </h3>
            <h2>{event.title}</h2>
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
