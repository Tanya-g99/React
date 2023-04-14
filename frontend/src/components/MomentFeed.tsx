import React, { useState } from "react";
import { IMoment } from "../interface";
import { Moment } from "./Moment";
import {Pagination} from './Pagination'

type FeedMomentProps = {
  moments: IMoment[];
};

export const MomentFeed: React.FC<FeedMomentProps> = ({ moments }) => {
  const [numberPage, setNumberPage] = useState(1);
  const SetPage = (numberPage: number) => {
    setNumberPage(numberPage);
  };
  const momentCount = 2;
  var momentsPage: IMoment[] = [];
  for (
    let index = (numberPage - 1) * momentCount;
    index < moments.length && index < numberPage * momentCount;
    index++
  ) {
    momentsPage.push(moments[index]);
  }

  return (
    <>
      {momentsPage.map((moment) => (
        <Moment moment={moment} key={moment.id}/>
      ))}
      <Pagination numberPage={numberPage} SetPage={SetPage} elementCount={2} elementsLen={moments.length}/>
    </>
  );
};
