import styles from "./style.module.css";

import {
  FaHeadset,
  FaWhatsapp,
  FaThumbsUp,
} from "react-icons/fa";

import { MdSupportAgent } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";

export default function CTAFinal() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* TEXTO PRINCIPAL */}

        <div className={styles.left}>

          <MdSupportAgent className={styles.mainIcon} />

          <h2>
            Do pequeno ao grande volume,
             <br />
            temos o <span>transporte ideal para você.</span>
          </h2>

        </div>

        {/* COLUNA 1 */}

        <div className={styles.item}>

          <FaLocationDot className={styles.icon} />

          <p>
            Atendemos toda
            <br />
            São Paulo e região
          </p>

        </div>

        {/* COLUNA 2 */}

        <div className={styles.item}>

          <FaHeadset className={styles.icon} />

          <p>
            Suporte rápido
            <br />
            e atendimento direto
          </p>

        </div>

        {/* COLUNA 3 */}

        <div className={styles.item}>

          <FaThumbsUp className={styles.icon} />

          <p>
            Soluções eficientes
            <br />
            para o seu dia a dia
          </p>

        </div>

        {/* BOTÃO */}

        <div className={styles.action}>

          <a
            href="https://wa.me/5511999447775"
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            <FaWhatsapp />

            Solicitar orçamento
          </a>

          <span>
            Fale conosco e receba seu
            orçamento sem compromisso!
          </span>

        </div>

      </div>

    </section>
  );
}

