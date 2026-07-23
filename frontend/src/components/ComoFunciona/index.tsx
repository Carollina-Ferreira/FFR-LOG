import styles from "./style.module.css";

import {
  FaClipboardList,
  FaPaperPlane,
  FaCheckCircle,
  FaTruck,
  FaChevronRight
} from "react-icons/fa";

export default function ComoFunciona() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>

        <h2>Como funciona?</h2>

        <div className={styles.line}></div>

        <div className={styles.steps}>

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <span>1</span>
              <FaClipboardList />
            </div>

            <h4>Preencha o formulário</h4>

            <p>
              Informe os detalhes da sua entrega com atenção.
            </p>
          </div>

          <FaChevronRight className={styles.arrow} />

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <span>2</span>
              <FaPaperPlane />
            </div>

            <h4>Enviamos seu orçamento</h4>

            <p>
              Nossa equipe analisa e envia o melhor preço.
            </p>
          </div>

          <FaChevronRight className={styles.arrow} />

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <span>3</span>
              <FaCheckCircle />
            </div>

            <h4>Você aprova</h4>

            <p>
              Aprovação rápida e sem complicações.
            </p>
          </div>

          <FaChevronRight className={styles.arrow} />

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <span>4</span>
              <FaTruck />
            </div>

            <h4>Coleta e entrega</h4>

            <p>
              Realizamos a coleta e entregamos com agilidade e segurança.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}