import styles from "./style.module.css";

import moto from "../../assets/images/moto transporte.png";
import van from "../../assets/images/van transporte.png";

import { IoMdCheckmarkCircle } from "react-icons/io";

export default function TiposTransporte() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* ========================= */}
        {/* TÍTULO */}
        {/* ========================= */}

        <div className={styles.titleArea}>

          <h2>
            <span className={styles.blue}>Soluções de transporte </span>

            <span className={styles.red}>para cada entrega</span>
          </h2>

          <p>
            Escolha a opção ideal e conte com agilidade, segurança
            e eficiência em cada destino.
          </p>

        </div>

        {/* ========================= */}
        {/* CARDS */}
        {/* ========================= */}

        <div className={styles.cards}>

          {/* ========================= */}
          {/* MOTO */}
          {/* ========================= */}

          <div className={styles.card}>

            <div className={styles.imageArea}>
              <img
                src={moto}
                alt="Motoboy"
              />
            </div>

            <div className={styles.info}>

              <h3>Motoboy</h3>

              <div className={styles.line}></div>

              <p className={styles.description}>
                Mobilidade e agilidade para entregas rápidas e
                coletas diretas na cidade.
              </p>

              <ul>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Ideal para pequenos volumes
                </li>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Entregas urgentes
                </li>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Coletas e documentos
                </li>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Ótimo para o trânsito da cidade
                </li>

              </ul>

            </div>

          </div>

          {/* ========================= */}
          {/* VAN */}
          {/* ========================= */}

          <div className={styles.card}>

            <div className={styles.imageArea}>
              <img
                src={van}
                alt="Fiorino / Van"
              />
            </div>

            <div className={styles.info}>

              <h3>Fiorino / Van</h3>

              <div className={styles.line}></div>

              <p className={styles.description}>
                Mais espaço e capacidade para entregas maiores
                com toda a segurança.
              </p>

              <ul>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Transporte de grandes volumes
                </li>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Entregas programadas
                </li>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Caixas, mercadorias e produtos
                </li>

                <li>
                  <IoMdCheckmarkCircle className={styles.icon} />
                  Mais segurança para sua carga
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}