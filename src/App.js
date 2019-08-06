import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import EventCodeInput from "./components/eventCodeInput";
import Event from "./components/event";
import { AppContext } from "./AppContext";

import "./App.css";

function App() {
  const [event, setEvent] = useState({});
  const [user, setUser] = useState({});
  return (
    <AppContext.Provider value={{ event, setEvent, user, setUser }}>
      <div className="App">
        <Header />
        {event.event_code ? <Event /> : <EventCodeInput />}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
