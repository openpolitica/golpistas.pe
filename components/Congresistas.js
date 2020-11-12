import { useEffect, useState } from "react";
import styles from "../styles/Congresistas.module.css";
import Image from "next/image";

export default function Congresistas({ openModal }) {
  const [congresistas, setCongresistas] = useState([]);

  useEffect(() => {
    async function getCongresistas() {
      const response = await fetch(
        "https://api-golpistas-pe.herokuapp.com/api/golpistas"
      );
      const data = await response.json();
      setCongresistas(data);
    }
    getCongresistas();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {congresistas.map((congresista) => (
          <Image
            key={congresista.nombres + congresista.apellidos}
            src={congresista.imageUrl}
            width={200}
            height={270}
            className={styles.image}
            onClick={() => openModal(congresista)}
          />
        ))}
      </div>
    </>
  );
}
