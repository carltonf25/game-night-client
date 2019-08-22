import React, { useState, useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Wrapper, Section } from "./styled-components/common";
import { ChecklistItem, EditButton } from "./styled-components/EventBuilder.js";

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
        <Section
          style={{
            gridColumn: `2/3`,
            display: `grid`,
            gridTemplateColumns: `10% 1fr 10%`
          }}
        >
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
