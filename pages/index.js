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
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCongresista, setCurrentCongresista] = useState(null);

  const openModal = (congresista) => {
    setIsOpen(true);
    setCurrentCongresista(congresista);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>golpistas.pe</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Golpistas" />
        <meta
          name="description"
          content="Una web con información acerca de las denuncias de los congresistas que no debemos olvidar."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://golpistas.pe/" />
        <meta property="og:title" content="Golpistas" />
        <meta
          property="og:description"
          content="Una web con información acerca de las denuncias de los congresistas que no debemos olvidar."
        />
        <meta
          property="og:image"
          content="https://golpistas.pe/open-graph-logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://golpistas.pe/" />
        <meta property="twitter:title" content="Golpistas" />
        <meta
          property="twitter:description"
          content="Una web con información acerca de las denuncias de los congresistas que no debemos olvidar."
        />
        <meta
          property="twitter:image"
          content="https://kampu.app/open-graph-logo.png"
        />
      </Head>

      <Header />
      <History />
      <div className={styles.timelineContainer}>
        <Timeline />
      </div>
      <Banner />
      <Votes />
      <Congresistas openModal={openModal} />
      <Footer />
      {isOpen && (
        <ModalCongresista
          currentCongresista={currentCongresista}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
