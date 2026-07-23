import styles from "./style.module.css";
import logo from "../../assets/images/Logo-FFR-LOG-2 (2).png";
import entregador from "../../assets/images/entregador.png";

export default function SobreFFR() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.logoArea}>
          <img src={logo} alt="FFR LOG" />
        </div>


        <div className={styles.divider}></div>


        <div className={styles.content}>

          <span className={styles.subtitle}>
            QUEM SOMOS
          </span>

          <h2>
            A FFR LOG nasceu com um propósito simples:
            <br />
            entregar mais do que pacotes —
            <span> entregar confiança.</span>
          </h2>

          <p>
            Nosso trabalho é guiado por responsabilidade,
            confiança e dedicação, oferecendo um atendimento
            que valoriza cada cliente e suas necessidades.

            Buscamos entregar soluções em transporte rápidas,
            seguras e eficientes, garantindo cuidado,
            compromisso e pontualidade em cada serviço realizado.
          </p>


        </div>


        <div className={styles.imageArea}>
          <img
            src={entregador}
            alt="Entregador FFR LOG"
          />
        </div>


      </div>
    </section>
  );
}