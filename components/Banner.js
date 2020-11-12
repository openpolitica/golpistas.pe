import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p className={styles.title}>
        "Hoy tenemos un congresista usurpando la presidencia que no cuenta con
        legitimidad, legalidad y menos aún con la capacidad para el cargo."
      </p>
      <p className={styles.paragraph}>
        Inician las protestas en las calles, exigiendo la renuncia de los
        golpistas.
      </p>
      <p className={styles.hashtag}>#TodosLosDíasHastaQueCaigan</p>
    </div>
  );
}
