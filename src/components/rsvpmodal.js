import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import axios from "axios";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: grid;
  grid-template-columns: 10vh auto 10vh;
  grid-template-rows: 10vh 1fr 20vh;
  .modal {
    background: #272236;
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 1em;
    color: #fefefe;
    transition: 0.3s ease;
    -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    a {
      margin-left: 95%;
      color: #16f5b3;
      transition: 0.2s ease;
      font-size: 1.5em;
      cursor: pointer;
      :hover {
        color: #17b180;
      }
    }
    @media screen and (max-width: 760px) {
      grid-column: 1/-1;
    }
  }
`;

const RsvpModal = ({ closeModal, modal }) => {
  const { event } = useContext(AppContext);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState([]);

  const addGuest = async () => {
    let data = { guests: [name] };
    const res = await fetch(
      `http://localhost:8000/api/events/${event.id || 1}/guests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(data)
        }
      }
    );
    let test = await res;
    console.log(test);
  };

  const props = useSpring({
    to: { marginRight: `0px` },
    from: { marginRight: `-50px` }
  });

  return (
    <Overlay>
      <animated.div className="modal" style={props}>
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
