import Modal from "react-modal";

import icon from "../../assets/icons.svg";
import css from "../ModalWrapper/ModalWrapper.module.css";
import CamperDetails from "../CamperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectModalState } from "../../redux/modal/selector";
import { closeModal } from "../../redux/modal/slice";
import { useState } from "react";

Modal.setAppElement("#root");

export default function ModalWrapper({ isOpen, camper, children }) {
  const handleClose = () => {
    isOpen = false;
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.overlay}
      className={css.modal}
    >
      <button
        type="button"
        className={css.modalCloseButton}
        onClick={handleClose}
      >
        <svg className={css.icon} width="16" height="16">
          <use href={`${icon}#icon-close`}></use>
        </svg>
      </button>

      {/* {children} */}
      <CamperDetails camper={camper} />
    </Modal>
  );
}
