import React from "react";
import { Profile } from "../components/Profile";
import { moments, users } from "../data/local";

export const ProfileRoute: React.FC = () => {
  return <Profile user={users[0]} moments={moments} />;
};
