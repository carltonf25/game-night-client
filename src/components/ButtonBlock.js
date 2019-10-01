import React, { useContext } from "react";
import { navigate } from "hookrouter";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const BlockWrapper = styled.div`
  button {
    transition: 0.2s ease;
    height: 25%;
    width: 60%;
    font-size: 10px;
    :hover {
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      transform: translate3d(5%, 0, 0);
    }
  }
`;

const ButtonBlock = ({
  event,
  id,
  event_code,
  setDeleteModal,
  getEvents,
  copyCode
}) => {
  const { setEvent } = useContext(AppContext);

  const openDeleteModal = () => {
    setEvent(event);
    setDeleteModal(true);
  };
  return (
    <BlockWrapper
      style={{
        display: `flex`,
        flexDirection: `column`,
        gridColumn: `4/-1`
      }}
    >
      <button
        title="Copy event code to clipboard"
        onClick={e => {
          e.preventDefault();
          copyCode();
        }}
        style={{ background: `#e1e1e1` }}
      >
        Share
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          navigate(`/events/${event_code}`);
        }}
        style={{ background: `#e1e1e1` }}
      >
        View
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          navigate(`/events/${event_code}/edit`);
        }}
        style={{ background: `#e1e1e1` }}
      >
        Edit
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          openDeleteModal();
        }}
        style={{ background: `tomato`, color: `#fefefe`, fontSize: `1em` }}
      >
        ✖
      </button>
    </BlockWrapper>
  );
};

export default ButtonBlock;
