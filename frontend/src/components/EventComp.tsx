import React from "react";
import '../scss/events.scss'
import {
  IEvent,
  instanceOfILike,
  instanceOfISub,
  instanceOfIMoment,
} from "../interface";

type EventCompProps = {
  event: IEvent;
};

export const EventComp: React.FC<EventCompProps> = ({ event }) => {

  return (
    <div className="border border-secondary rounded container my-2 w-100 p-2 rowEvent rowEvent">
      {instanceOfILike(event) && (
        <>
          <img src="logo1.png" alt="" />
          <div>
            <p className="fw-bold m-0 text-truncate">{event.author + " "}</p>
            <span>
              поставил "Нравится" на ваш
              {instanceOfIMoment(event.target)
                ? " момент"
                : " комментарий"}{" "}
            </span>
            <p className="fw-bold m-0 text-truncate">{event.target.content}</p>
            <p className="fw-light mx-auto m-0">1 дн.</p>
          </div>
          <button className="btn bg-gray-600 btn-secondary border my-auto">
            Посмотреть
          </button>
        </>
      )}
      {instanceOfISub(event) && (
        <>
          <img src="logo1.png" alt="" />
          <div>
            <p className="fw-bold m-0 text-truncate">{event.subscriber}</p>
            <span>
              Подписался на <span className="fw-bold">{event.author}</span>
            </span>
            <p className="fw-light mx-auto m-0">1 дн.</p>
          </div>
          <button className="btn bg-gray-600 btn-secondary border my-auto">
            Посмотреть
          </button>
        </>
      )}
    </div>
  );
};
