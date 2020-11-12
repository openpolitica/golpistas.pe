import { useEffect, useState } from "react";
import styles from "../styles/Congresistas.module.css";
// import Image from "next/image";

function formatName(fullName) {
  const [lastName, firstName] = fullName.split(",");
  return `${firstName?.trim()} ${lastName?.trim()}`.normalize("NFD");
}

export default function Congresistas() {
  const [congresistas, setCongresistas] = useState([]);

  useEffect(() => {
    async function getCongresistas() {
      const response = await fetch("/api/congresistas");
      const data = await response.json();
      setCongresistas(data.congresistas);
    }
    getCongresistas();
  }, []);

  return (
    <div className={styles.container}>
      {congresistas.map((congresista) => (
        <>
          <div className={styles.imagePlaceholder} />
        </>
      ))}
    </div>
  );
}
