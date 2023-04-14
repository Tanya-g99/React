import React, { useState } from "react";
import Modal from "react-modal";
import { IUser } from "../interface";

Modal.setAppElement("#root");

interface ModalProps {
  user: IUser;
  modalState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const ProfileEditModal: React.FC<ModalProps> = ({
  user,
  modalState,
}) => {
  function closeModal() {
    modalState.setIsOpen(false);
  }

  function saveModal() {
    user.email = email;
    user.nickname = nickname;
    user.password = password;

    modalState.setIsOpen(false);
  }

  const [nickname, setNickname] = useState(user.nickname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  return (
    <Modal
      isOpen={modalState.isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Settings"
      closeTimeoutMS={10}
    >
      <form className="px-4">
        <div className="d-flex">
          <span className="h3 me-auto text-green">Изменить данные о себе</span>
          <button
            type="button"
            className="btn-close mt-1 ms-4"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="form-group">
          <input
            type="nickname"
            name="nickname"
            className="form-control my-3"
            placeholder="nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
          <input
            type="email"
            name="email"
            className="form-control my-3"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="current-password"
            name="password"
            className="form-control my-3"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="file"
            name="avatar"
            className="form-control my-3"
            placeholder="Изображение пользователя"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn bg-gray-400 border border-4 w-100"
            onClick={saveModal}
            onChange={(event) => event.preventDefault()}
          >
            Сохранить
          </button>
        </div>
      </form>
    </Modal>
  );
};
