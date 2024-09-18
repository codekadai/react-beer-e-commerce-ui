import { createPortal } from "react-dom";
import "./Modal.scss";

const Modal = (props) => {
  const { children, isOpen, type } = props;
  return createPortal(
    isOpen && <div className={`modal-drawer ${type}-drawer`}>{children}</div>,
    document.body
  );
};

export default Modal;
