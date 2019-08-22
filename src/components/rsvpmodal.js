import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { useSpring, animated } from "react-spring";
import { Overlay } from "./styled-components/RsvpModal";
import axios from "axios";

const RsvpModal = ({ closeModal, modal }) => {
  const { event } = useContext(AppContext);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState([]);

  const addGuest = async () => {
    let data = { guests: [name] };

    const res = await axios.post(
      `http://localhost:8000/api/events/${event.event_code || 1}/guests`,
      data
    );
    console.log(res);
  };

  const slideIn = useSpring({
    from: {
      transform: `translate3d( 300px, 0, 0)`
    },
    to: {
      transform: `translate3d(0,0,0)`
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
          <form>
            <label for="name">Name:</label>
            <br />
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
                closeModal();
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
