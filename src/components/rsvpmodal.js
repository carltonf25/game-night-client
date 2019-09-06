import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { Error } from "./styled-components/common";
import { useSpring, animated } from "react-spring";
import { Overlay } from "./styled-components/RsvpModal";
import axios from "axios";

const RsvpModal = ({ fetchEvent, closeModal, modal }) => {
  const { event } = useContext(AppContext);
  const [name, setName] = useState("");
  const [bringing, setBringing] = useState([]);
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState("");

  const addGuest = async () => {
    let data = { guests: [{ name: name }] };

    const res = await axios.post(
      `http://localhost:8000/api/events/${event.event_code}/guests`,
      data
    );

    if (res.data.added === true) {
      fetchEvent();
      closeModal();
    } else {
      setError("Unable to add guest");
    }
  };

  const slideIn = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(100px, 0, 0)`
    },
    to: {
      opacity: 1,
      transform: `translate3d(0, 0, 0)`
    }
  });

  return (
    <Overlay>
      <animated.div className="modal" style={slideIn}>
        <a onClick={closeModal}>✖</a>
        <div
          style={{
            padding: `20px`,
            margin: `0 auto`
          }}
        >
          <h2>RSVP to this Game Night:</h2>
          {error && (
            <Error>
              <p>{error}</p>
            </Error>
          )}
          <form>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              onClick={e => {
                e.preventDefault();
                addGuest();
              }}
            >
              RSVP
            </button>
          </form>
        </div>
      </animated.div>
    </Overlay>
  );
};

export default RsvpModal;
