import React from "react";
import { IEvent } from "../interface";
import { EventComp } from "./EventComp";

type EventCompProps = {
  events: IEvent[];
};

export const EventFeed: React.FC<EventCompProps> = ({ events }) => {
  return (
    <div className="pt-3">
      {events.map((event, id) => {
        return <EventComp key={'event' + id} event={event} />;
      })}
    </div>
  );
};
