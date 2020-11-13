import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";

export default function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
      <div className={styles.heading}>
        <h1 className={styles.title}>¿Qué pasa en el Perú?</h1>
        <p className={styles.description}>
          Una historia sobre los protagonistas del golpe.
        </p>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/golpistas.pe/"
          >
            <div className={styles.iconContainer}>
              <Instagram />
            </div>
            <span>golpistas.pe</span>
          </a>
          <span className={styles.separator}>|</span>
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/golpistasPeru"
          >
            <div className={styles.iconContainer}>
              <Twitter />
            </div>
            <span>golpistasPeru</span>
          </a>
        </div>
      </div>
    </div>
  );
}
