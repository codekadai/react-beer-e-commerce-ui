import { createPortal } from "react-dom";
import "./Modal.scss";
import { PropTypes } from "prop-types";

const Modal = (props) => {
  const { children, isOpen, type } = props;
  return createPortal(
    isOpen && <div className={`modal-drawer ${type}-drawer`}>{children}</div>,
    document.body
  );
};

Modal.propTypes = {
  type: PropTypes.string,
  isOpen: PropTypes.boolean,
};

export default Modal;
