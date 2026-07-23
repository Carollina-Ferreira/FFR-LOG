import styles from "./style.module.css";

import { FaWhatsapp } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";

export default function CTAQualidade() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.left}>
                    <div className={styles.iconCircle}>
                        <FaAward />
                    </div>

                    <div>
                        <h2>
                            Confiança que move entregas.
                            <br />
                            <span>Qualidade que gera resultados.</span>
                        </h2>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.center}>
                    <p>
                        Conte com a FFR LOG
                        <br />
                        para sua próxima entrega!
                    </p>
                </div>

                <a
                    href="https://wa.me/5511999447775"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.button}
                >
                    <FaWhatsapp />
                    CHAMAR NO WHATSAPP
                </a>

            </div>
        </section>
    );
}