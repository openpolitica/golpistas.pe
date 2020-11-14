import React from "react";
import Modal from "./Modal";
import styles from "../styles/MarchasModal.module.css";

const title = (
  <div className={styles.header}>
    <h2 className={styles.title}>Segunda Marcha Nacional</h2>
    <span className={styles.paragraph}>14 de Noviembre</span>
  </div>
);

const marchasLima = [
  "Plaza San Martín - 4 p.m.",
  "Parque Kennedy (plantón), Miraflores - 11:30 a.m.",
  "Explanada del Ministerio de Cultura, San Borja - 3 p.m.",
  "Parque Kennedy (marcha), Miraflores - 4 p.m.",
  "Av. Raúl Ferrero con Av. Manuel Prado, La Molina - 4 p.m.",
  "Parque de la Amistad, Surco - 4 p.m.",
  "Plaza Tupac Amaru, Magdalena - 4 p.m.",
  "Parque Juan Pablo II, San Miguel - 4 p.m.",
  "Parque Miguel Grau, San Borja - 4 p.m.",
  "Municipalidad de Los Olivos, Los Olivos 4 p.m.",
  "Av. San Felipe con Av. Brasil, Jesús María - 4 p.m.",
  "Centro Cívico Municipal, Comas - 4 p.m.",
  "Parque Emilio del Solar, Chosica - 4 p.m.",
  "Plaza de Armas, San Juan de Lurigancho - 4:30 p.m.",
];

const marchasProvincias = [
  "Plaza Barranca, Ica - 4 p.m.",
  "Plazuela El Recreo, Trujillo - 5 p.m.",
  "Iglesia San Francisco, Cajamarca - 2 p.m.",
  "Plazuela Elías Aguirre, Chiclayo - 2 p.m.",
  "Plazuela Merino, Piura - 5 p.m.",
  "Plaza Mayor Parte Alta, Paita - 4 p.m.",
  "Plaza España, Arequipa - 2 p.m.",
  "Alameda de la República, Huánuco - 5 p.m.",
];

const marchasCallao = ["Plaza Grau - 10 a.m.", "Óvalo de La Perla - 4:30 p.m."];

const marchasExtranjero = [
  "Palacio de Bellas Artes, Ciudad de México - 12m.",
  "Hyde Park Speakers, Londres - 12m.",
  "Embajada de Perú, Helsinky - 12:30 p.m.",
  "Town Hall, Sídney - 12:30 p.m.",
  "Bradenburger Tor, Berlín - 2 p.m.",
  "Karlplatz, Munich - 14:45 p.m.",
  "Plaza de la Virgen, Valencia - 4 p.m.",
  "Puerta del Sol, Madrid - 9 p.m.",
];

function Block({ place, marchas }) {
  return (
    <div className={styles.block}>
      <h4 className={styles.place}>{place}</h4>
      <div className={styles.blockContent}>
        <div className={styles.lineContainer}>
          <div className={styles.circle} />
          <div className={styles.line} />
          <div className={styles.circle} />
        </div>
        <div className={styles.marchas}>
          {marchas.map((marcha) => (
            <p key={marcha}>{marcha}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MarchasModal() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      title={title}
      isOpen={isOpen}
      className="main-modal"
      overlayClassName="white"
    >
      <div className={`scrollable-content ${styles.content}`}>
        <Block place="LIMA" marchas={marchasLima} />
        <Block place="PROVINCIAS" marchas={marchasProvincias} />
        <Block place="CALLAO" marchas={marchasCallao} />
        <Block place="EXTRANJERO" marchas={marchasExtranjero} />
      </div>
      <footer className={styles.footerRight}>
        #TodosLosDíasHastaQueCaigan
      </footer>
      <footer className={styles.footerLeft}>
        Información extraída de @AccionGraficaPe
      </footer>
    </Modal>
  );
}
