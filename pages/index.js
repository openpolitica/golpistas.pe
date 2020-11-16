import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import History from "../components/History";
import Banner from "../components/Banner";
import Votes from "../components/Votes";
import Timeline from "../icons/Timeline";
import Header from "../components/Header";
import Congresistas from "../components/Congresistas";
import ModalCongresista from "../components/ModalCongresista";
import HomeModal from "../components/HomeModal";
import MarchasModal from "../components/MarchasModal";
import Footer from "../components/Footer";
import { makeSlug } from "../utils/functions";
import Parties from "../components/Parties";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCongresista, setCurrentCongresista] = useState(null);
  const [congresistas, setCongresistas] = useState([]);
  const [filteredCongresistas, setFilteredCongresistas] = useState([]);
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState(null)

  useEffect(() => {
    async function getCongresistas() {
      const response = await fetch(
        "https://api-golpistas-pe.herokuapp.com/api/golpistas"
      );
      const data = await response.json();

      const filtered = data.filter(
        (congresista) => congresista.votos.votoVacancia === 1
      );

      // FIltering
      let parsedParties = [];
      filtered.forEach((congresista) => {
        let slug = makeSlug(congresista.partidoPolitico.nombre);
        let party = congresista.partidoPolitico;
        party["slug"] = slug;
        party["img"] = "/partidos/" + slug + ".png";
        if (!parsedParties.some((entry) => entry.slug === slug)) {
          parsedParties.push(party);
        }
      });

      setCongresistas(filtered);
      setFilteredCongresistas(filtered);
      setParties(parsedParties);
    }

    getCongresistas();
  }, []);

  const openModal = (congresista) => {
    setIsOpen(true);
    setCurrentCongresista(congresista);
  };

  useEffect(() => {
    let filtered = congresistas
    if (selectedParty && selectedParty.value !== 'Todos') {
      filtered = congresistas.filter((congresista) => {
        return makeSlug(congresista.partidoPolitico.nombre) === selectedParty.value;
      });
    }

    if (selectedRegion && selectedRegion.value !== 'Todos') {
      filtered = filtered.filter((congresista) => {
        const region = congresista.partidoPolitico.departamento.toLowerCase()
        return region === selectedRegion.value.toLowerCase()
      })
    }

    setFilteredCongresistas(filtered);
  }, [selectedParty, selectedRegion])

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
          content="https://golpistas.pe/open-graph-logo.png"
        />
      </Head>

      <Header />
      <History />
      <div className={styles.timelineContainer}>
        <Timeline />
      </div>
      <Banner />
      <Votes />
      <Parties
        parties={parties}
        selectedParty={selectedParty}
        setSelectedParty={setSelectedParty}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Congresistas congresistas={filteredCongresistas} openModal={openModal} />
      <Footer />
      <ModalCongresista
        currentCongresista={currentCongresista}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      {/* Modals */}
      <HomeModal />
      <MarchasModal />
    </div>
  );
}
