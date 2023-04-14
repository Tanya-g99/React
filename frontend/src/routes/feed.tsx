import React from "react";
import { MomentFeed } from "../components/MomentFeed";
import { moments } from "../data/local";

export const FeedRoute: React.FC = () => {
    return <MomentFeed moments={moments} />
}