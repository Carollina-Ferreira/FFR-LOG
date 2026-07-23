import styles from "./style.module.css";

import mapa from "../../assets/images/mapa.png";

import { FaCity } from "react-icons/fa6";

export default function OndeAtuamos() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* ESQUERDA */}

        <div className={styles.left}>

          <h2>Onde atuamos</h2>

          <div className={styles.line}></div>

          <p>
            Atendemos toda a região de São Paulo, incluindo capital, interior e litoral.
          </p>

        </div>

        {/* MAPA */}

        <div className={styles.mapArea}>

          <img
            src={mapa}
            alt="Mapa de São Paulo"
          />

        </div>

        {/* LINHA VERTICAL */}

        <div className={styles.divider}></div>

        {/* REGIÕES */}

        <div className={styles.right}>

          <div className={styles.region}>

            <FaCity className={styles.icon} />

            <div>

              <h3>Zona Norte</h3>

              <p>
                Santana, Tucuruvi, Casa Verde,
                Freguesia do Ó e região.
              </p>

            </div>

          </div>

          <div className={styles.region}>

            <FaCity className={styles.icon} />

            <div>

              <h3>Zona Sul</h3>

              <p>
                Santo Amaro, Campo Limpo,
                Jabaquara, Saúde e região.
              </p>

            </div>

          </div>

          <div className={styles.region}>

            <FaCity className={styles.icon} />

            <div>

              <h3>Zona Leste</h3>

              <p>
                Tatuapé, Mooca, Penha,
                Itaquera e região.
              </p>

            </div>

          </div>

          <div className={styles.region}>

            <FaCity className={styles.icon} />

            <div>

              <h3>Zona Oeste</h3>

              <p>
                Lapa, Pinheiros,
                Osasco, Butantã e região.
              </p>

            </div>

          </div>

          <div className={styles.region}>

            <FaCity className={styles.icon} />

            <div>

              <h3>Centro</h3>

              <p>
                Sé, República,
                Liberdade, Bela Vista e região.
              </p>

            </div>

          </div>

          <div className={styles.region}>

            <FaCity className={styles.icon} />

            <div>

              <h3>Grande SP</h3>

              <p>
                ABC Paulista,
                Guarulhos, Barueri
                e outras cidades.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

