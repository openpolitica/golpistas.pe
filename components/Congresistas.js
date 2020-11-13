import styles from '../styles/Congresistas.module.css'
import Image from 'next/image'

export default function Congresistas ({ congresistas, openModal }) {
  return (
    <>
      <div className={styles.container}>
        {congresistas
          .map((congresista) => (
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
  )
}
