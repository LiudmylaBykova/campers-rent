import Modal from "react-modal";

import icon from "../../assets/icons.svg";
import css from "../ModalWrapper/ModalWrapper.module.css";
import CamperDetails from "../CamperDetails/CamperDetails";

Modal.setAppElement("#root");

export default function ModalWrapper({ isOpen, onClose, camper }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.overlay}
      className={css.modal}
    >
      <button
        type="button"
        className={css.modalCloseButton}
        onClick={() => onClose()}
      >
        <svg className={css.icon} width="32" height="32">
          <use href={`${icon}#icon-close`}></use>
        </svg>
      </button>
      <CamperDetails camper={camper} />
    </Modal>
  );
}
