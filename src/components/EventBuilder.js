import React, { useState, useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Wrapper, Section } from "./styled-components/common";
import { EditButton } from "./styled-components/EventBuilder.js";

import ChecklistItem from "./ChecklistItem";

const EventBuilder = () => {
  const slideIn = useSpring({
    from: {
      transform: `translate3d(100%,0, 0)`,
      opacity: 0
    },
    to: {
      transform: `translate3d(0,0,0)`,
      opacity: 1
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
          <h1
            style={{
              gridColumn: `2/3`,
              textAlign: `center`
            }}
          >
            New Event
          </h1>
          <ChecklistItem heading="Title" defaultVal="Title" />
          <ChecklistItem heading="Description" defaultVal="Description" />
          <ChecklistItem
            heading="When & Where?"
            defaultVal="When & Where?"
            type="date"
          />
          <button
            style={{ gridColumn: `2/3`, width: `25%`, marginLeft: `auto` }}
          >
            Publish
          </button>
        </Section>
      </Wrapper>
    </animated.div>
  );
};

export default EventBuilder;
