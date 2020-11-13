import React from "react";
import ReactModal from "react-modal";
import XIcon from "../icons/XIcon";

const Modal = ({
  onRequestClose,
  title,
  body,
  className = "",
  children,
  overlayClassName,
  color = "#fff",
  ...restProps
}) => (
  <ReactModal
    {...restProps}
    onRequestClose={onRequestClose}
    className={`modal ${className}`}
    ariaHideApp={false}
    overlayClassName={`react-modal-overlay ${overlayClassName}`}
  >
    <div className="modal-top-section">
      {typeof title === "string" ? (
        <h2 className="modal__title">{title}</h2>
      ) : (
        title
      )}
      <span className="modal-close" onClick={onRequestClose}>
        <XIcon color={color} />
      </span>
    </div>
    <div className="modal-content">{children}</div>
  </ReactModal>
);

export default Modal;
