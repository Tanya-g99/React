import React from "react";
import { IMoment} from "../interface";

type MomentsGridProps = {
    moments: IMoment[];
  };

export const MomentsGrid: React.FC<MomentsGridProps> = ({ moments }) => {
    return (
      <div className="row row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4">
        {moments.map((moment) => {
            return (
                <div key={"prof__moment" + moment.id} className="p-1">
                    <img className="border border-2" src={moment.image} alt={"moment" + moment.id}/>
                </div>
            )
        })}
      </div>
    );
  };
  