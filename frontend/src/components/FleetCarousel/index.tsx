import styles from "./style.module.css";
import { FaArrowRight } from "react-icons/fa6";

import moto from "../../assets/images/moto realista.png";
import carro from "../../assets/images/carro realista.png";
import van from "../../assets/images/van realista.png";

const vehicles = [
  {
    image: moto,
    title: "Coletas rápidas",
  },
  {
    image: carro,
    title: "Entregas no carro",
  },
  {
    image: van,
    title: "Expressos na van",
  },
];

export default function FleetLine() {
  return (
    <section className={styles.section}>
      {/* ========================= */}
      {/* TOPO */}
      {/* ========================= */}

      <div className={styles.top}>
        <div className={styles.content}>
          <span className={styles.subtitle}>
            NOSSA FROTA
          </span>

          <h2>

            <span className={styles.blue}>
              Três veículos, <span/>
            </span>

            <span className={styles.blue}>
              um propósito: <span/>
            </span>

            <span className={styles.red}>
               entregar com eficiência.
            </span>

          </h2>

          <p>
            Soluções rápidas e seguras para coletas,
            entregas e serviços personalizados.
          </p>

          <a
            href="/orcamento"
            className={styles.button}
          >
            Solicitar cotação
            <FaArrowRight />
          </a>
        </div>
      </div>

      {/* ========================= */}
      {/* ESTRADA */}
      {/* ========================= */}

      <div className={styles.roadWrapper}>

        <div className={styles.carousel}>

          <div className={styles.track}>

            {[...vehicles, ...vehicles].map((vehicle, index) => (

              <div
                className={styles.item}
                key={index}
              >

                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className={styles.vehicleImage}
                />

                <div className={styles.dot}></div>

                <div className={styles.vehicleTitle}>
                  {vehicle.title}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className={styles.road}>
          <div className={styles.centerLine}></div>
        </div>

      </div>

    </section>
  );
}