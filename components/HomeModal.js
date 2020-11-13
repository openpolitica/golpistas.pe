import React from "react";
import Modal from "./Modal";
import styles from "../styles/HomeModal.module.css";

const title = (
  <>
    <h2 className={styles.title}>#AlertaGolpista</h2>
    <p className={styles.paragraph}>
      Comisión de Educación <b>DEBATE HOY</b> la propuesta de derogar o
      modificar la
      <b>Ley Universitaria y la Ley Magisterial.</b>
    </p>
  </>
);

function FieldCongress({ name, region, denuncia }) {
  return (
    <div className={styles.field}>
      <h4 className={styles.name}>{name}</h4>
      <div className={styles.region}>{region}</div>
      {denuncia && <p className={styles.denuncia}>{denuncia}</p>}
    </div>
  );
}

function HomeModal() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      title={title}
      isOpen={isOpen}
      className="main-modal"
      overlayClassName="white"
    >
      <p className={styles.content}>
        Este proyecto fue presentado por la bancada de UPP. ¿Quiénes están
        detrás y qué buscan realmente? ¿Por qué cambiar reformas tan importantes
        para nuestro país en medio de una crisis que ha sacada a miles de
        peruanos a las calles en medio de una pandemia?
      </p>

      <FieldCongress
        name="RUBÉN RAMOS ZAPANA (Autor del proyecto de ley)"
        region="Congresista por Puno"
        denuncia="01 denuncia por contrabando y 02 por contaminación y propagación (tráfico de productos nocivos)."
      />

      <FieldCongress
        name="JAVIER MENDOZA MARQUINA (Autor del proyecto de ley)"
        region="Congresista por Ayacucho"
      />

      <FieldCongress
        name="RUBÉN PANTOJA CALVO (Conformidad del documento)"
        region="Congresista por Cusco"
        denuncia="12 denuncias, entre las cuales destacan: colusión, abuso de autoridad y violación a la intimidad."
      />

      <FieldCongress
        name="JOSÉ VEGA ANTONIO (Conformidad del documento)"
        region="Congresista por Lima"
        denuncia="07 denuncias, entre las cuales destacan: interferencia en procesos judiciales y falsedad ideológica."
      />

      <div className={styles.update}>
        <h3 className={styles.updateTitle}>#ActualizaciónGolpista</h3>
        <div className={styles.updateContent}>
          Acaban de votar a favor del retonor del bachiller automático 2020 -
          2021, pese a la opinión técnica de la SUNEDU y el Ministerio de
          Educación.
        </div>
      </div>

      <footer className={styles.footer}>#TodosLosDíasHastaQueCaigan</footer>
    </Modal>
  );
}

export default HomeModal;
