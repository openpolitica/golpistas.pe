import styles from '../styles/Parties.module.css'
import departamentos from '../public/departamentos.json'
import Select from 'react-select'

export default function Parties ({ parties, selectedParty, setSelectedParty, selectedRegion, setSelectedRegion }) {
  let partiesOptions = parties.map(party => {
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
            const activeParty = selectedParty && party.slug === selectedParty.value
            let className = activeParty ? styles.partiesActive : styles.parties
            return (
              <div key={party.slug} className={styles.partiesContainer}>
                <div className={styles.partyImageContainer}>
                  <img
                    className={className}
                    alt={party.nombre} src={party.img}
                    onClick={() => {
                      if (activeParty) {
                        setSelectedParty(null)
                      } else {
                        setSelectedParty({ value: party.slug, label: party.nombre })
                      }
                    }}
                  />
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
            options={[{ value: 'Todos', label: 'Todos'}, ...partiesOptions]}
            onChange={option => setSelectedParty(option)}
            value={selectedParty}
            placeholder="Todos"
          />
        </div>
        <div className="styles.filter">
          <label>Buscar por departamento:</label>
          <Select
            options={[{ value: 'Todos', label: 'Todos'}, ...departamentos]}
            onChange={option => setSelectedRegion(option)}
            value={selectedRegion}
            placeholder="Todos"
          />
        </div>
      </div>
      <p className={styles.cta}>Haz click para ver la cantidad de denuncias</p>
    </>
  )
}
