import styles from "../styles/History.module.css";

export default function History() {
  return (
    <div className={styles.history}>
      <h1 className={styles.title}>¿Cómo llegamos a este punto?</h1>
      <div className={styles.description}>
        <p>
          El 09 de noviembre, el Congreso de la República debatió (por segunda
          vez) en el pleno la vacancia presidencial bajo el argumento de
          incapacidad moral permanente por supuestos actos de corrupción del ex
          presidente Martín Vizcarra. Este argumento aún se encuentra en
          discusión ante el Tribunal Constitucional por su ambiguedad en la
          interpretación: ¿Incapacidad moral? ¿Incapacidad mental?
        </p>
        <p>
          Luego de un “debate” sobre tablets, vacunas y psicosociales, los
          congresistas de las distintas bancadas votaron a favor, en contra o en
          abtención tras el descargo de Vizcarra. Con 105 votos e
          interpretaciones que respondían a intereses personales y partidarios,
          el Congreso de la República logró vacar al presidente en medio de una
          crisis sanitaria y económica, sumergiéndos en una crisis política que
          ha despertado la voz de miles de peruanos.
        </p>
      </div>
    </div>
  );
}
