import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ModalAddMoment } from "../components/ModalAddMoment";
import { Navbar } from "../components/Navbar";

export const Root: React.FC = () => {
  function search() {
    console.log("search");
  }

  const [isLogged, setLogged] = useState(false);
  let [userId, setUserId] = useState("");
  // let res = window.sessionStorage.getItem("logged");
  // setLogged(JSON.parse(res!));
  // res = window.sessionStorage.getItem("user_id");
  // setUserId(JSON.parse(res!));

  const [IsOpenAddMoment, setIsOpenAddMoment] = React.useState(false);

  function addMomemt() {}
  return (
    <>
      <Navbar
        isLogged={isLogged}
        openModal={() => setIsOpenAddMoment(true)}
        search={search}
      />
      <div id="detail" className="container-sm p-2vw mb-4">
        <Outlet />
      </div>

      <ModalAddMoment
        modalState={{
          isOpen: IsOpenAddMoment,
          setIsOpen: setIsOpenAddMoment,
        }}
        addMoment={addMomemt}
      />
      <Footer />
    </>
  );
};
