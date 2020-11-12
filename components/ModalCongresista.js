import Image from "next/image";
import styles from "../styles/ModalCongresista.module.css";
import JudgeIcon from "../icons/JudgeIcon";
import XIcon from "../icons/XIcon";

export default function ModalCongresista({ currentCongresista, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modal}>
        <div className={styles.imageContainer}>
          <Image src={currentCongresista.imageUrl} width={480} height={650} className={styles.image}/>
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            {currentCongresista.nombres.toLowerCase()}{" "}
            {currentCongresista.apellidos.toLowerCase()}
          </p>
          <p className={styles.partido}>
            {currentCongresista.partidoPolitico.nombre.toLowerCase()}
          </p>
          <hr className={styles.line} />
          <p className={styles.cargo}>
            <span className={styles.label}>Cargo: </span>
            {currentCongresista.cargoPublico.tipo} por{" "}
            <span>
              {currentCongresista.partidoPolitico.departamento.toLowerCase()}
            </span>
          </p>
          <p className={styles.denuncias}>
            <div className={styles.iconContainer}>
              <JudgeIcon />
            </div>
            {currentCongresista.investigaciones} denuncias
          </p>
        </div>
        <div onClick={handleClose} className={styles.x}>
          <XIcon />
        </div>
      </div>
    </div>
  );
}
