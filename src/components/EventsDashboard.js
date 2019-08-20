import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { A, useRedirect } from "hookrouter";

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
  margin-bottom: 2em;
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
`;

const EventsDashboard = () => {
  const { user } = useContext(AppContext);

  useEffect(() => {});
  return (
    <Wrapper>
      <Section>
        <h1>Dashboard</h1>
      </Section>
    </Wrapper>
  );
};

export default EventsDashboard;
