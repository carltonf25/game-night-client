import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import EventCodeInput from "./components/eventCodeInput";
import Event from "./components/event";
import { AppContext } from "./AppContext";
import routes from "./router";
import { useRoutes, useRedirect } from "hookrouter";
import "./App.css";

function App() {
  const routeResult = useRoutes(routes);
  const [event, setEvent] = useState({});
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ event, setEvent, user, setUser }}>
      <div className="App">
        <Header />
        {routeResult}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
