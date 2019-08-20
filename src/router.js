import React from "react";

import Header from "./components/header";
import Login from "./components/login";
import Signup from "./components/signup";
import Footer from "./components/footer";
import Event from "./components/event";
import EventsDashboard from "./components/EventsDashboard";
import EventCodeInput from "./components/eventCodeInput";

const routes = {
  "/": () => <EventCodeInput />,
  "/events/:id": () => <Event />,
  "/login": () => <Login />,
  "/signup": () => <Signup />,
  "/dashboard": () => <EventsDashboard />
};

export default routes;