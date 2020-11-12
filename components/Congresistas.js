// import { useEffect, useState } from "react";
import styles from "../styles/Congresistas.module.css";
import Image from "next/image";
import { imagenesPlaceholder } from "../utils/imagenesPlaceholder";

function formatName(fullName) {
  const [lastName, firstName] = fullName.split(",");
  return `${firstName?.trim()} ${lastName?.trim()}`.normalize("NFD");
}

export default function Congresistas({ openModal }) {
  // const [congresistas, setCongresistas] = useState([]);

  // useEffect(() => {
  //   async function getCongresistas() {
  //     const response = await fetch("/api/congresistas");
  //     const data = await response.json();
  //     setCongresistas(data.congresistas);
  //   }
  //   getCongresistas();
  // }, []);

  return (
    <>
      <div className={styles.container}>
        {imagenesPlaceholder.map((image) => (
          <Image
            src={image}
            key={image}
            width={200}
            height={270}
            className={styles.image}
            onClick={openModal}
          />
        ))}
      </div>
    </>
  );
}
