import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Event from "./components/event";
import EventCodeInput from "./components/eventCodeInput";

const routes = {
  "/": () => <EventCodeInput />,
  "/events/:id": () => <Event />
};

export default routes;
