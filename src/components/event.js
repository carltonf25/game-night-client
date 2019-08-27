import React, { useContext, useState, useEffect } from "react";
import { Section } from "./styled-components/common";
import { EventWrapper } from "./styled-components/Event";
import { useRedirect, navigate } from "hookrouter";

import axios from "axios";
import GuestTable from "./GuestTable";
import RsvpModal from "./RsvpModal";
import { AppContext } from "../AppContext";

const Event = ({ eventCode }) => {
  const { user, event, setEvent } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState([{ name: "Test" }]);

  const fetchEvent = async () => {
    let res = await axios.get(`http://localhost:8000/api/events/${eventCode}`);

    if (res.data.event) {
      setEvent(res.data.event);
      setGuests(res.data.event.guests);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    fetchEvent();
    console.log(event);
  }, []);

  const parseDate = datetime => {
    let d = datetime.split(/[- :]/);
    return new Date(Date.UTC(d[0], d[1] - 1, d[2], d[3], d[4], d[5]));
  };

  return (
    <>
      {modal && <RsvpModal modal={modal} closeModal={() => setModal(false)} />}
      <EventWrapper>
        <Section
          style={{
            padding: 0
          }}
        >
          <img
            alt="placeholder"
            src={
              event.header_image ||
              `https://www.adventuresnt.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg`
            }
          />
          <div className="date-rsvp-section">
            <h3>
              {event.date} at {event.location || "TBD"}
            </h3>
            <h2>{event.title}</h2>
            <button
              onClick={e => {
                e.preventDefault();
                setModal(true);
              }}
            >
              RSVP
            </button>
          </div>
        </Section>
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
          <GuestTable guests={guests} />
        </Section>
      </EventWrapper>
    </>
  );
};

export default Event;
