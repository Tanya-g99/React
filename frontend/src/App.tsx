import React, { useState } from "react";
import { createHashRouter } from "react-router-dom";
import { MomentFeed } from "./components/MomentFeed";
import { Profile } from "./components/Profile";
import { ModalAddMoment } from "./components/ModalAddMoment";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { EventFeed } from "./components/EventFeed";

import { moments, users, events } from "./data/local";
import ErrorPage from "./components/Error";

const App: React.FC = () => {



  const [isLogged, setLogged] = useState(false);

  return (
    <>
        {/* <div className="container-sm p-2vw mb-4">
          <Switch>
            <Route exact path="/" render={() => <MomentFeed moments={moments} />} />
            <Route
              path="/profile"
              render={() =>
                isLogged ? (
                  <Profile user={users[0]} moments={moments} />
                ) : (
                  <Login login={() => setLogged(true)} />
                )
              }
            />
            <Route
              path="/notifications"
              render={() => <EventFeed events={events} />}
            />
          </Switch> */}
    </>
  );
};

export default App;
