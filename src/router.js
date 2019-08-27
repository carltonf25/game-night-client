import React from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Event from "./components/Event";
import EventsDashboard from "./components/EventsDashboard";
import EventBuilder from "./components/EventBuilder";
import EventCodeInput from "./components/EventCodeInput";

const routes = {
  "/": () => <EventCodeInput />,
  "/events/:eventCode": ({ eventCode }) => <Event eventCode={eventCode} />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/dashboard": () => <EventsDashboard />,
  "/create": () => <EventBuilder />
};

export default routes;
