import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import History from '../components/History'
import Banner from '../components/Banner'
import Votes from '../components/Votes'
import Timeline from '../icons/Timeline'
import Header from '../components/Header'
import Congresistas from '../components/Congresistas'
import ModalCongresista from '../components/ModalCongresista'
import Footer from '../components/Footer'
import { makeSlug, onlyUnique } from '../utils/functions'
import Parties from '../components/Parties'

export default function Home () {
  const [isOpen, setIsOpen] = useState(false)
  const [currentCongresista, setCurrentCongresista] = useState(null)
  const [congresistas, setCongresistas] = useState([])
  const [filteredCongresistas, setFilteredCongresistas] = useState([])
  const [parties, setParties] = useState([])

  useEffect(() => {
    async function getCongresistas () {
      const response = await fetch(
        'https://api-golpistas-pe.herokuapp.com/api/golpistas'
      )
      const data = await response.json()

      const filtered = data
        .filter((congresista) => congresista.votos.votoVacancia >= 1)

      // FIltering
      let parsedParties = []
      filtered.forEach((congresista) => {
        let slug = makeSlug(congresista.partidoPolitico.nombre)
        let party = congresista.partidoPolitico
        party['slug'] = slug
        party['img'] = '/partidos/' + slug + '.png'
        if (slug === 'partido-morado') {console.log(congresista)}
        if (!parsedParties.some(entry => entry.slug === slug)) {
          parsedParties.push(party)
        }
      })

      setCongresistas(filtered)
      setFilteredCongresistas(filtered)
      setParties(parsedParties)
    }

    getCongresistas()
  }, [])

  const openModal = (congresista) => {
    setIsOpen(true)
    setCurrentCongresista(congresista)
  }

  const filterParty = (party) => {
    parties.forEach(party => party.isActive = false)
    party.isActive = true
    let filtered = congresistas.filter((congresista) => {
      return makeSlug(congresista.partidoPolitico.nombre) === party.slug
    })

    setFilteredCongresistas(filtered)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>golpistas.pe</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
      <History/>
      <div className={styles.timelineContainer}>
        <Timeline/>
      </div>
      <Banner/>
      <Votes/>
      <Parties parties={parties} filterParty={filterParty}/>
      <Congresistas congresistas={filteredCongresistas} openModal={openModal}/>
      <Footer/>
      {isOpen && (
        <ModalCongresista
          currentCongresista={currentCongresista}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  )
}
