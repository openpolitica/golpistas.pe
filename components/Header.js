import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
      <div className={styles.heading}>
        <h1 className={styles.title}>¿Qué pasa en el Perú?</h1>
        <p className={styles.description}>
          Una historia sobre los protagonistas del golpe.
        </p>
      </div>
    </div>
  );
}
