import styles from '../styles/Parties.module.css'
import departamentos from '../public/departamentos.json'
import Select from 'react-select'

export default function Parties ({ parties, selectedParty, setSelectedParty, selectedRegion, setSelectedRegion }) {
  const partiesOptions = parties.map(party => {
    return {
      value: party.slug,
      label: party.nombre
    }
  })

  return (
    <>
      <h2 className={styles.header}>Bancadas</h2>
      <div className={styles.container}>
        {parties
          .map((party) => {
            let className = selectedParty && party.slug === selectedParty.value ? styles.partiesActive : styles.parties
            return (
              <div key={party.slug} className={styles.partiesContainer}>
                <div className={styles.partyImageContainer}>
                  <img className={className} onClick={() => setSelectedParty({ value: party.slug, label: party.nombre })} alt={party.nombre} src={party.img}/>
                </div>
                <p className={styles.partyName}>{party.nombre}</p>
              </div>
            )
          })}
      </div>
      <div>
        <div className="styles.filter">
          <label>Buscar por partido:</label>
          <Select
            options={partiesOptions}
            onChange={option => setSelectedParty(option)}
            value={selectedParty}
          />
        </div>
        <div className="styles.filter">
          <label>Buscar por departamento:</label>
          <Select
            options={departamentos}
            onChange={option => setSelectedRegion(option)}
            value={selectedRegion}
          />
        </div>
      </div>
      <p className={styles.cta}>Haz click para ver la cantidad de denuncias</p>
    </>
  )
}
