import styles from "./style.module.css";

export default function OrcamentoBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={`${styles.content} container`}>
        <span>Solicite seu orçamento</span>

        <h1>
          Receba seu orçamento
          <br />
          <strong>de forma rápida e fácil!</strong>
        </h1>

        <p>
          Preencha os dados abaixo e receba um orçamento
          personalizado para a sua entrega.
        </p>
      </div>
    </section>
  );
}