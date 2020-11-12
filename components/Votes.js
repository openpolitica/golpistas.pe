import styles from "../styles/Votes.module.css";

export default function Votes() {
  return (
    <div className={styles.votes} id="congresistas">
      <h1 className={styles.title}>¿A quiénes no debemos olvidar?</h1>
      <p className={styles.subtitle}>
        Denuncias sobre corrupción, lavado de activos e incluso homicidio.
      </p>
      <div className={styles.line}>
        <div className={styles.red}>
          <div className={styles.number}>
            <p className={styles.quantity}>105</p>
            <p className={styles.text}>A Favor</p>
          </div>
          <div className={styles.redBlock} />
        </div>
        <div className={styles.blue}>
          <div className={styles.number}>
            <p className={styles.quantity}>19</p>
            <p className={styles.text}>En contra</p>
          </div>
          <div className={styles.blueBlock} />
        </div>
        <div className={styles.yellow}>
          <div className={styles.yellowBlock} />
        </div>
      </div>
    </div>
  );
}
