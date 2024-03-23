import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { ReactNode } from "react";
import x_btn from "../../../assets/x_btn.svg";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.closeBtn}>
          <button className={styles.modalClose} onClick={onClose}>
            <img src={x_btn} alt="" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
export default Modal;
