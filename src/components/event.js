import React, { useContext, useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { useSpring, animated } from "react-spring";
import axios from "axios";
// components && styles
import { Section, Success, Wrapper } from "./styled-components/common";
import { EventWrapper } from "./styled-components/Event";
import GuestTable from "./GuestTable";
import RsvpModal from "./RsvpModal";
import { AppContext } from "../AppContext";
// images
import clock from "../img/clock-icon.svg";
import locationIcon from "../img/location-icon.svg";

const Event = ({ eventCode }) => {
  const { user, event, setEvent } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState([{ name: "Test" }]);
  const [successFlash, setSuccessFlash] = useState("");

  const isLoggedInUser = user.id === event.user_id ? true : false;

  const fetchEvent = async () => {
    let res = await axios.get(
      `https://damp-falls-69999.herokuapp.com/api/events/${eventCode}`
    );

    if (res.data.event) {
      setEvent(res.data.event);
      setGuests(res.data.event.guests);
    } else {
      navigate("/");
    }
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString("default", {
      month: "short",
      weekday: "long",
      day: "numeric"
    });
  };

  const formatTime = dateString => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("default", {
      hour: "numeric"
    });
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
    fetchEvent();
    console.log("re-fetching");
  }, []);

  return (
    <>
      {modal && (
        <RsvpModal
          setSuccessFlash={setSuccessFlash}
          modal={modal}
          fetchEvent={fetchEvent}
          closeModal={() => setModal(false)}
        />
      )}
      <animated.div style={fadeIn}>
        <Wrapper>
        <EventWrapper>
          {successFlash !== "" && (
            <Success style={fadeIn}>
              <p>{successFlash}</p>
            </Success>
          )}
          <Section
          >
            <img
              alt="placeholder"
              src={
                event.header_image ||
                `https://www.adventuresnt.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg`
              }
            />
            <div className="date-rsvp-section">
              <div
                style={{
                  marginBottom: `2em`
                }}
              >
                <h2>{event.title}</h2>
                {!isLoggedInUser ? (
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setModal(true);
                    }}
                  >
                    RSVP
                  </button>
                ) : null}
                <hr
                  style={{
                    border: `1px solid rgba(220, 220, 220, 0.75)`
                  }}
                />
              </div>
              <div style={{ margin: `1em` }}>
                <img
                  alt="time icon"
                  src={clock}
                  style={{
                    width: `1.5em`
                  }}
                />
                <h3 style={{ display: `inline`, marginLeft: `1em` }}>
                  {formatDate(event.date)} at {formatTime(event.date)}
                </h3>
              </div>
              <div style={{ margin: `1em` }}>
                <img
                  alt="time icon"
                  src={locationIcon}
                  style={{
                    width: `1.5em`
                  }}
                />
                <h3 style={{ display: `inline`, marginLeft: `1em` }}>
                  {event.location || `TBD`}
                </h3>
              </div>
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
            </div>
          </Section>
          <Section>
            <h2>Who's going?</h2>
            <GuestTable guests={guests} />
          </Section>
        </EventWrapper>
        </Wrapper>
      </animated.div>
    </>
  );
};

export default Event;
