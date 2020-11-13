import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>golpistas.pe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.disclaimer}>
        <Navbar />
        <h1>Disclaimer</h1>
        <p>
          De acuerdo con la Ley de transparencia y acceso a la información
          pública del Perú - Ley n.º 27806, el acceso a la información pública
          es un derecho que se rige por el principio de máxima publicidad, este
          principio establece la más amplia aplicación posible del derecho de
          acceso a la información que esté en posesión, custodia o control de la
          autoridad pública. En una sociedad democrática es indispensable que
          las autoridades estatales se rijan por dicho principio. En el Perú,
          las y los políticos que ejercen o han ejercido cargos públicos se
          encuentran en un umbral de escrutinio permanente. La información
          difundida en esta plataforma es de carácter público, tiene como fin
          mostrarla a los usuarios en un leguaje accesible para que puedan saber
          los antecedentes de las autoridades que nos gobiernan. La información
          aquí presentada ha sido tomada de las bases de datos de acceso público
          de las entidades estatales y de medios de comunicación prestigiados,
          es la más reciente a la que se ha podido tener acceso, sin embargo
          podría encontrarse desactualizada.
        </p>
      </div>
    </div>
  );
}
