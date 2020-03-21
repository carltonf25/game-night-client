import React, { useState } from 'react';
import { ChecklistItem as Item, EditButton } from './styled-components/EventBuilder.js';

const ChecklistItem = ({ item, heading, defaultVal, type, event, setEvent }) => {
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(defaultVal);

  let bgColor = checked ? `#c7f5df` : `#e2e9ec`;

  return (
    <Item
      style={{
        background: bgColor,
        borderLeft: checked ? `5px solid #15f5b3` : `5px solid #b29cbb`
      }}
    >
      <h2>{heading}</h2>
      {editing ? (
        <input
          type={type || 'text'}
          value={
            /* allow state to set value to blank*/
            value !== '' ? value || defaultVal : ''
          }
          onChange={e => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        ></input>
      ) : item !== 'header_image' ? (
        <p>{value || defaultVal}</p>
      ) : (
        <img
          alt="header"
          style={{
            width: `90%`,
            marginBottom: `1em`,
            maxHeight: `150px`
          }}
          src={value || defaultVal}
        />
      )}
      <EditButton
        onClick={e => {
          e.preventDefault();
          if (editing === true) {
            setEvent(event => ({ ...event, [item]: value }));
            setChecked(true);
          }
          setEditing(!editing);
        }}
      >
        {editing ? 'Save' : 'Edit'}
      </EditButton>
    </Item>
  );
};

export default ChecklistItem;
