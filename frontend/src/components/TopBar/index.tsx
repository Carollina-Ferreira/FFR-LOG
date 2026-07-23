import styles from "./style.module.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.content}>

        <div className={styles.left}>

          <a
            href="https://wa.me/5511999447775"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>(11) 99944-7775</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ffrmotoexpress@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            <span>ffrmotoexpress@gmail.com</span>
          </a>

        </div>

        <div className={styles.right}>

          <span>Siga nossas redes:</span>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

        </div>

      </div>
    </div>
  );
}