import styles from "../styles/History.module.css";

export default function History() {
  return (
    <div className={styles.history} id="historia">
      <h1 className={styles.title}>¿Cómo llegamos a este punto?</h1>
      <div className={styles.description}>
        <p>
          El 09 de noviembre, el Congreso de la República debatió (por segunda
          vez) en el pleno la vacancia presidencial bajo el argumento de
          incapacidad moral permanente por supuestos actos de corrupción del ex
          presidente Martín Vizcarra.{" "}
          <span>
            Este argumento aún se encuentra en discusión ante el Tribunal
            Constitucional por su ambiguedad en la interpretación: ¿Incapacidad
            moral? ¿Incapacidad mental?
          </span>
        </p>
        <p>
          Luego de un “debate” sobre tablets, vacunas y psicosociales, los
          congresistas de las distintas bancadas votaron a favor, en contra o en
          abtención tras el descargo de Vizcarra.{" "}
          <span>
            Con 105 votos e interpretaciones que respondían a intereses
            personales y partidarios, el Congreso de la República logró vacar al
            presidente
          </span>{" "}
          en medio de una crisis sanitaria y económica, sumergiéndos en una
          crisis política que ha despertado la voz de miles de peruanos.
        </p>
      </div>
    </div>
  );
}
