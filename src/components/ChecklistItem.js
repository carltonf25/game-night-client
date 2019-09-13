import React, { useState } from "react";
import {
  ChecklistItem as Item,
  EditButton
} from "./styled-components/EventBuilder.js";

const ChecklistItem = ({
  item,
  heading,
  defaultVal,
  type,
  event,
  setEvent
}) => {
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(defaultVal);

  let bgColor = checked ? `green` : `#fefefe`;

  const getLabelText = () => {
    let text = "";
    switch (type) {
      case "header_image":
        console.log(type);
        text = `Paste an Image URL`;
        break;

      default:
        console.log(type);
        text = ``;
        break;
    }
    console.log(text);
    return text;
  };

  return (
    <Item
      style={{
        background: { bgColor }
      }}
    >
      <h2>{heading}</h2>
      {editing ? (
        <input
          type={type || "text"}
          value={value}
          onChange={e => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        ></input>
      ) : item !== "header_image" ? (
        <p>{value}</p>
      ) : (
        <img
          alt="header"
          style={{
            width: `90%`,
            margin: `0 auto 1em auto`
          }}
          src={value}
        />
      )}
      <EditButton
        onClick={e => {
          e.preventDefault();
          if (editing === true) {
            setEvent(event => ({ ...event, [item]: value }));
          }
          setEditing(!editing);
        }}
      >
        {editing ? "Save" : "Edit"}
      </EditButton>
    </Item>
  );
};

export default ChecklistItem;
