import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import BurgerNav from "./components/BurgerNav.js";
import { AppContext } from "./AppContext.js";
import routes from "./router";
import { useRoutes, useRedirect } from "hookrouter";
import { useSpring } from "react-spring";
import "./App.css";

const App = () => {
  const routeResult = useRoutes(routes);
  const [event, setEvent] = useState({});
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    display: isNavOpen ? `` : `none`,
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0, 0)`
  });

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ event, setEvent, user, setUser }}>
      <BurgerNav
        logOut={() => logOut()}
        user={user}
        style={navAnimation}
        setNavOpen={setNavOpen}
        isNavOpen={isNavOpen}
      />
      <div className="App">
        <Header
          logOut={() => logOut()}
          setNavOpen={setNavOpen}
          isNavOpen={isNavOpen}
        />
        {routeResult}
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
