import React from "react";
import ReactModal from "react-modal";

const Modal = ({
  onRequestClose,
  title,
  body,
  className = "",
  children,
  overlayClassName,
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
      <span
        className="modal-close"
        onClick={onRequestClose}
        data-testid="modal-close-button"
      />
    </div>
    <div className="modal-content">{children}</div>
  </ReactModal>
);

export default Modal;
