import React, { useState, useContext } from "react";
import styled from "styled-components";
import { A, navigate } from "hookrouter";
import ButtonBlock from "./ButtonBlock";
import axios from "axios";
import { AppContext } from "../AppContext";

const CardWrapper = styled.div`
  background-color: #fefefe;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  color: #fefefe;
  grid-column: auto;
  transition: 0.2s ease;
  grid-column: 2/3;
`;

const EventCard = ({
  event,
  setSuccess,
  setError,
  getEvents,
  user,
  setDeleteModal
}) => {
  const { id, title, header_image, date, event_code } = event;

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString("default", {
      month: "short",
      weekday: "long",
      day: "numeric"
    });
  };
  const copyCode = () => {
    let copyText = document.querySelector(`#copy-${event_code}`);
    copyText.focus();
    copyText.select();

    document.execCommand("copy");
    setSuccess(`Event code copied to clipboard`);

    setTimeout(() => {
      setSuccess(``);
    }, 2500);
  };
  return (
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr 1fr 1fr 1fr`,
        gridTemplateRows: `1fr`,
        margin: `1.5em 0`
      }}
    >
      <CardWrapper
        style={{
          backgroundImage: `url(${header_image})`,
          gridColumn: `1/4`
        }}
      >
        <div
          style={{
            background: `rgba(100, 100, 100, 0.6)`,
            width: `100%`,
            height: `100%`
          }}
        >
          <div style={{ padding: `1.5em` }}>
            <h3>{title}</h3>
            <h4>{formatDate(date)}</h4>
            <input
              id={`copy-${event_code}`}
              value={event_code}
              style={{ opacity: 0 }}
            />
          </div>
        </div>
      </CardWrapper>
      <ButtonBlock
        style={{
          height: `100%`
        }}
        id={id}
        event_code={event_code}
        event={event}
        setDeleteModal={setDeleteModal}
        getEvents={getEvents}
        copyCode={copyCode}
      />
    </div>
  );
};

export default EventCard;
