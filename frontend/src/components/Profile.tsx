import React from "react";
import { IMoment, IUser } from "../interface";
import { MomentsGrid } from "./MomentsGrid";
import { ProfileEditModal } from "./ProfileEdit";
import "../scss/profile.scss";

type ProfileProps = {
  moments: IMoment[];
  user: IUser;
};

export const Profile: React.FC<ProfileProps> = ({ user, moments }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="profile mx-auto">
      <div className="profile border my-4 shadow rounded">
        <div className="rowProfile mb-2">
          <img
            src={user.profile_img}
            alt="tupic"
            className="shadow border border-2 rounded-circle"
          />
          <div className="">
            <p className="fw-bold px-3 h1">{user.nickname}</p>
            <button
              className="btn border border-2 px-3 w-100 my-1"
              onClick={openModal}
            >
              Редактировать
            </button>
          </div>
        </div>
        <div className="navbar">
          <div className="">
            <span className="fw-bold me-1">Рейтинг: </span>
            <span className="me-4">{user.rating}</span>
          </div>
          <div className="d-flex me-auto">
            <span className="fw-bold p-0 me-2">Дата регистрации: </span>
            {user.reg_day.toDateString()}
          </div>
        </div>
      </div>
      <MomentsGrid moments={moments} />
      {/* <MomentsGrid moments={moments.filter((moment) => moment.author === user.nickname)}/> */}
      <ProfileEditModal
        user={user}
        modalState={{ isOpen: modalIsOpen, setIsOpen: setIsOpen }}
      />
    </div>
  );
};
