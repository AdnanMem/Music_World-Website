import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ showModal, setShowModal }) => {
  const close = <FontAwesomeIcon icon={faTimes} />;

  const closeModal = () => {
    setShowModal(!showModal);
    submitBtnHandler();
  };

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const submitBtnHandler = () => {
    setNameInput("");
    setEmailInput("");
    setPasswordInput("");
    setConfirmPasswordInput("");
  };

  return (
    <div className={showModal ? "visible" : "modal"}>
      <div className="close" onClick={closeModal}>
        {close}
      </div>
      <form className="modal-form">
        <input
          type="text"
          className="modal-input"
          placeholder="Enter your name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <input
          type="email"
          className="modal-input"
          placeholder="Enter your e-mail"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          type="password"
          className="modal-input"
          placeholder="Enter your password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />

        <input
          type="password"
          className="modal-input"
          placeholder="Confirm your password"
          value={confirmPasswordInput}
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
        />
      </form>
      <button className="modal-btn" onClick={submitBtnHandler}>
        Submit
      </button>
    </div>
  );
};

export default Modal;
