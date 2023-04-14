import React from "react";
import { Moment } from "../components/Moment";
import { moments } from "../data/local";

export const MomentRoute: React.FC = () => {
  return <Moment moment={moments[0]} />;
};