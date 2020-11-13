import styles from '../styles/Parties.module.css'

export default function Parties ({ parties, filterParty }) {
  return (
    <>
      <h2 className={styles.header}>Bancadas</h2>
      <div className={styles.container}>
        {parties
          .map((party) => {
            let className = party.isActive ? styles.partiesActive : styles.parties
            return (
              <div key={party.slug} className={styles.partiesContainer}>
                <div className={styles.partyImageContainer}>
                  <img className={className} onClick={() => filterParty(party)} alt={party.nombre} src={party.img}/>
                </div>
                <p className={styles.partyName}>{party.nombre}</p>
              </div>
            )
          })}
      </div>
      <p className={styles.cta}>Haz click para ver la cantidad de denuncias</p>
    </>
  )
}
