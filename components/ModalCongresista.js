import Image from "next/image";
import styles from "../styles/ModalCongresista.module.css";
import JudgeIcon from "../icons/JudgeIcon";
import XIcon from "../icons/XIcon";
import { pluralize } from "../utils";

const partidos = {
  "FUERZA POPULAR": "FP",
  "FRENTE POPULAR AGRICOLA FIA DEL PERU - FREPAP": "FREPAP",
  "ACCION POPULAR": "AP",
  "PARTIDO DEMOCRATICO SOMOS PERU": "SP",
  "ALIANZA PARA EL PROGRESO": "APEP",
  "EL FRENTE AMPLIO POR JUSTICIA, VIDA Y LIBERTAD": "FA",
  "UNION POR EL PERU": "UPEP",
  "PODEMOS PERU": "PP",
};

export default function ModalCongresista({ currentCongresista, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modal}>
        <div className={styles.imageContainer}>
          <Image
            src={currentCongresista.imageUrl}
            width={480}
            height={650}
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            {currentCongresista.nombres.toLowerCase()}{" "}
            {currentCongresista.apellidos.toLowerCase()}
          </p>
          <p className={styles.partido}>
            <img
              src={`/partidos/${
                partidos[
                  currentCongresista.partidoPolitico.nombre
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                ]
              }.png`}
              className={styles.partidoLogo}
            />
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
            {currentCongresista.investigaciones}{" "}
            {pluralize(
              currentCongresista.investigaciones,
              "denuncias",
              "denuncia"
            )}
          </p>
        </div>
        <div onClick={handleClose} className={styles.x}>
          <XIcon />
        </div>
      </div>
    </div>
  );
}
