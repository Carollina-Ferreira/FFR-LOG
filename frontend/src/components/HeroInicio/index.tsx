import styles from "./style.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundShapes}>
        <span className={styles.circle1}></span>
        <span className={styles.circle2}></span>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
         
          <h4>FFR LOG</h4>

          <h1>
            Soluções rápidas
            <br />
            para movimentar
            <br />
            <span>o seu negócio.</span>
          </h1>

          <p>
            Transporte rápido, seguro e eficiente para empresas e
            pessoas que precisam de agilidade em cada entrega.
          </p>

          <div className={styles.buttons}>
            <a href="/orcamento" className={styles.primary}>
              Solicitar orçamento
            </a>

            <a href="/empresa" className={styles.secondary}>
              Conheça a empresa
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}