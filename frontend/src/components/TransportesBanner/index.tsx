import styles from "./style.module.css";

export default function BannerTransportes() {
  return (
    <section className={styles.banner}>

      <div className={styles.overlay}></div>

      <div className={styles.container}>

        <div className={styles.content}>

          <span className={styles.subtitle}>
            Soluções de transportes
          </span>

          <h1>
            Entregas rápidas,
            <br />
            <span>seguras e eficientes!</span>
          </h1>

          <p>
            Com a agilidade e a segurança que a sua entrega
            precisa, em cada destino.
          </p>

        </div>

      </div>

    </section>
  );
}