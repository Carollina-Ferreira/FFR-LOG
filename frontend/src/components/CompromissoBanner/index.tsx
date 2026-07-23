import styles from "./style.module.css";

export default function CompromissoBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2>
          Orgulha-se de conduzir suas atividades com base na
        </h2>

        <p>
          honestidade, transparência e comprometimento com seus clientes
        </p>
      </div>
    </section>
  );
}