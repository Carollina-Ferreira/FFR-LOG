import styles from "./style.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>

            <div className={styles.overlay}></div>

            <div className={`${styles.content} container`}>

                <span className={styles.subtitle}>
                    FALE CONOSCO
                </span>

                <div className={styles.line}></div>

                <h1>
                    Estamos prontos <span>para te atender!</span>
                </h1>

                <h4>
                    Entre em contato e solicite seu orçamento
                </h4>

            </div>

        </section>
    );
}