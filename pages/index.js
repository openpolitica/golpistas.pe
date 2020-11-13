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
