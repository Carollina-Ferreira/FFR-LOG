import styles from "./style.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function OrcamentoCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.content}>
                    <h2>Precisa de uma entrega rápida?</h2>

                    <p>
                        A FFR LOG está pronta para atender sua empresa com
                        agilidade, segurança e compromisso.
                    </p>
                </div>

                <div className={styles.action}>
                    <a href="/orcamento" className={styles.button}>
                        Solicitar orçamento
                        <FaArrowRight />
                    </a>
                </div>

            </div>
        </section>
    );
}