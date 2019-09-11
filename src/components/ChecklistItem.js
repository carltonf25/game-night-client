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
      ) : (
        <p>{value}</p>
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