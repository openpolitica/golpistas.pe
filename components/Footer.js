import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer} id="historia">
      <div className={styles.links}>
        <Link href="/disclaimer">
          <a className={styles.link}>Disclaimer</a>
        </Link>
      </div>
    </div>
  );
}
