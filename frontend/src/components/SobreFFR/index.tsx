import styles from "./style.module.css";

import moto from "../../assets/images/moto.png";

export default function SobreFFR() {
  return (
    <section className={styles.section}>

    

      <div className={styles.content}>

        <div className={styles.imageBox}>
          <img src={moto} alt="FFR LOG" />
        </div>

        <div className={styles.textBox}>
          <h3>
            Agilidade que move
            <br />
            <span>o seu negócio.</span>
          </h3>
            <div className={styles.line}></div>
          <p>
            A FFR LOG é uma empresa que atua em Osasco e grande São Paulo,
            oferecendo soluções rápidas e seguras nas entregas.
          </p>

          <p>
            Trabalhamos com serviços de moto, Fiorino e Van,
            garantindo eficiência, pontualidade e segurança para
            empresas e clientes que precisam de logística ágil.
          </p>
        </div>

      </div>

    </section>
  );
}