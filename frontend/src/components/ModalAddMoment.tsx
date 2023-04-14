import React, { useState } from "react";
import {Form} from 'react-router-dom'
import Modal from "react-modal";

Modal.setAppElement("#root");

type ModalAddMomentProps = {
  modalState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  addMoment: () => void
};

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

export const ModalAddMoment: React.FC<ModalAddMomentProps> = ({
  modalState,
  addMoment
}) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function addMomentClose() {

    addMoment()
    modalState.setIsOpen(false);
  }

  function closeModal() {
    modalState.setIsOpen(false);
  }

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')

  return (
    <Modal
      isOpen={modalState.isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Settings"
      closeTimeoutMS={10}
    >
      <form className="px-4">
        <div className="d-flex">
          <span className="h3 me-auto text-green">Создание момента</span>
          <button
            type="button"
            className="btn-close mt-1"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>

        <input
            type="text"
            name="title"
            className="form-control my-3"
            placeholder="Заголовок"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        <input
            type="file"
            name="avatar"
            className="form-control my-3"
            placeholder="Изображение пользователя"
            value={img}
            onChange={event => setImg(event.target.value)}
          />
        <div className="form-group">
          <input
            type="text"
            name="tegs"
            className="form-control my-3"
            placeholder="Теги"
          />
          <textarea
            name="comment"
            className="form-control my-3"
            placeholder="Описание"
            value={desc}
            onChange={event => setDesc(event.target.value)}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn bg-gray-400 border border-4 w-100"
            onClick={addMomentClose}
            onChange={event => event.preventDefault()}
          >
            Создать
          </button>
        </div>
      </form>
    </Modal>
  );
};
