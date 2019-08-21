import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10vh 1fr 10vh;
  width: 100vw;
`;

const Section = styled.div`
  background: #261a30;
  padding: 15px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin: 2em;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: auto;
  color: #fefefe;

  h1 {
    grid-column: 2/3;
    justify-self: center;
    border-bottom: 2px solid #16f5b3;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 760px) {
    grid-column: 1/-1;
  }
`;

const ChecklistItem = styled.div`
  color: #261a2f;
  background: #c2f7e7;
  padding: 15px;
  grid-column: 2/3;
  margin: 10px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;

const EditButton = styled.button`
  border: none;
  background: none;
  transition: 0.2s ease;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;

const EventBuilder = () => {
  const slideIn = useSpring({
    from: {
      transform: `translate3d(100%,0, 0)`
    },
    to: {
      transform: `translate3d(0,0,0)`
    }
  });

  return (
    <animated.div style={slideIn}>
      <Wrapper>
        <Section>
          <h1>New Event</h1>
          <ChecklistItem>
            <h2>Title</h2>
            <EditButton>Edit</EditButton>
            <p>Board Games and Beer</p>
          </ChecklistItem>
          <ChecklistItem>
            <h2>Description</h2>
            <EditButton>Edit</EditButton>
            <p>
              This week, we'll be playing Risk, and drinking heavily as we watch
              our friendships melt away
            </p>
          </ChecklistItem>
          <ChecklistItem>
            <h2>When & Where?</h2>
          </ChecklistItem>
          <ChecklistItem>
            <h2>Code</h2>
          </ChecklistItem>
        </Section>
      </Wrapper>
    </animated.div>
  );
};

export default EventBuilder;
