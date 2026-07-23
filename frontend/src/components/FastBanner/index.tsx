import styles from "./style.module.css";

import icon24h from "../../assets/images/24 horas.png";

export default function FastBanner() {
  return (
    <section className={styles.fastBanner}>
      <div className="container">

        <div className={styles.content}>

          <div className={styles.left}>
            <img
              src={icon24h}
              alt="24 Horas"
              className={styles.icon}
            />

            <h2>
              Atendimento rápido
              <br />
              e <span>soluções eficientes!</span>
            </h2>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.right}>
            <p>
              Nossa equipe está disponível
              para atender você e sua empresa
              com agilidade e compromisso.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}