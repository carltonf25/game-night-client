import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import BurgerNav from "./components/BurgerNav";
import EventCodeInput from "./components/eventCodeInput";
import Event from "./components/event";
import { AppContext } from "./AppContext";
import routes from "./router";
import { useRoutes, useRedirect } from "hookrouter";
import { useSpring } from "react-spring";
import "./App.css";

const App = () => {
  const routeResult = useRoutes(routes);
  const [event, setEvent] = useState({});
  const [user, setUser] = useState({});

  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    display: isNavOpen ? `` : `none`,
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0, 0)`
  });

  return (
    <AppContext.Provider value={{ event, setEvent, user, setUser }}>
      <BurgerNav
        style={navAnimation}
        setNavOpen={setNavOpen}
        isNavOpen={isNavOpen}
      />
      <div className="App">
        <Header setNavOpen={setNavOpen} isNavOpen={isNavOpen} />
        {routeResult}
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;