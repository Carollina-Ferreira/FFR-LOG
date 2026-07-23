import styles from "./style.module.css";

export default function MensagemFinal() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h2>
                    <span className={styles.quote}>“</span>

                    Mais do que entregas,
                    <span className={styles.highlight}>
                        {" "}levamos confiança até você.
                    </span>

                    <span className={styles.quote}>”</span>
                </h2>

            </div>
        </section>
    );
}