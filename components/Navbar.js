import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/golpista-ico.png" />
        <Link href="/">
          <a className={styles.logoTitle}>GOLPISTA.PE</a>
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/">
          <a className={styles.link}>Inicio</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>Historia</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>Congresistas</a>
        </Link>
      </div>
    </nav>
  );
}
