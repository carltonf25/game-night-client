import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
require('dotenv').config();
const ApiTest = () => {
  let [events, setEvents] = useState([]);
  useEffect(() => {
    let prefix =
      process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_DEV_PREFIX
        : process.env.REACT_APP_PROD_PREFIX;
    console.log(prefix);
    console.log(process.env.NODE_ENV);
    let getEvents = async () => {
      let res = await fetch(`${prefix}/api/events`);
      let data = await res.json();
      setEvents(data);
    };
    getEvents();
  }, []);
  return (
    <div>
      {events && (
        <ul>
          {events.map(e => (
            <li>{e.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiTest;
