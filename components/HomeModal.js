import React from "react";
import Modal from "./Modal";

function HomeModal() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      title="Super Title"
      isOpen={isOpen}
      className="main-modal"
    >
      <p>A la espera del texto</p>
    </Modal>
  );
}

export default HomeModal;
