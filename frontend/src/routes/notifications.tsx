import React from "react";
import { EventFeed } from "../components/EventFeed";
import { events } from "../data/local";

export const NotificationsRoute: React.FC = () => {
  return <EventFeed events={events} />;
};