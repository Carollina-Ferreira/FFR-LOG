import styles from "./style.module.css";
import logo from "../../assets/images/Logo-FFR-LOG-2 (2).png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>

        <div className={styles.logoArea}>
          <img src={logo} alt="FFR LOG" className={styles.logo} />

          <p>
            Há mais de <span>8 anos</span> realizando entregas
            com qualidade
          </p>
        </div>

        <div className={styles.linksArea}>
          <h3>Moto, Fiorino e Van</h3>

          <a href="/">Início</a>
          <a href="/empresa">Empresa</a>
          <a href="/transportes">Transportes</a>
          <a href="/orcamento">Orçamento</a>
          <a href="/contato">Contato</a>
        </div>

        <div className={styles.contactArea}>
          <h3>Contato</h3>

          ```
          <a
            href="https://wa.me/5511999447775"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 99944-7775
          </a>

          <a href="mailto:ffrmotoexpress@gmail.com">
            ffrmotoexpress@gmail.com
          </a>
          ```

        </div>

      </div>
    </footer>
  );
}