import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import History from "../components/History";
import Banner from "../components/Banner";
import Votes from "../components/Votes";
import Timeline from "../icons/Timeline";
import Header from "../components/Header";
import Congresistas from "../components/Congresistas";
import ModalCongresista from "../components/ModalCongresista";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCongresista, setCurrentCongresista] = useState({
    nombres: "EDUARDO GEOVANNI",
    apellidos: "ACATE CORONEL",
    mail: "eacate@congreso.gob.pe",
    cargoPublico: {
      tipo: "Congresista",
      activo: true,
    },
    votos: {
      votoVacancia: 1,
      admisionVacancia: 0,
    },
    investigaciones: 3,
    imageUrl:
      "https://res.cloudinary.com/dmki8aqt6/image/upload/v1605166589/golpista.pe/EDUARDO_GEOVANNI_ACATE_CORONEL_x8gigx.jpg",
    partidoPolitico: {
      nombre: "ALIANZA PARA EL PROGRESO",
      departamento: "LORETO",
    },
  });

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>golpistas.pe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <History />
      <div className={styles.timelineContainer}>
        <Timeline />
      </div>
      <Banner />
      <Votes />
      <Congresistas openModal={openModal} />
      {isOpen && (
        <ModalCongresista
          currentCongresista={currentCongresista}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
