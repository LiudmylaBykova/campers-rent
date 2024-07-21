import Modal from "react-modal";

import icon from "../../assets/icons.svg";
import css from "../ModalWrapper/ModalWrapper.module.css";
import CamperDetails from "../CamperDetails/CamperDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectModalState } from "../../redux/modal/selector";
import { closeModal } from "../../redux/modal/slice";

Modal.setAppElement("#root");

export default function ModalWrapper({ camper }) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectModalState);

  const handleClose = () => {
    dispatch(closeModal());
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
        <svg className={css.icon} width="32" height="32">
          <use href={`${icon}#icon-close`}></use>
        </svg>
      </button>
      <CamperDetails camper={camper} />
    </Modal>
  );
}
