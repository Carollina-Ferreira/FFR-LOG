import styles from "./style.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const servicos = [
  "Entregas e coletas de documentos",
  "Cartórios de protestos, notas e imóveis",
  "Distribuição de notas e faturas",
  "Distribuição de brindes e convites",
  "Pequenas compras",
  "Viagens para interior e litoral de SP",
];

export default function Servicos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {servicos.map((servico, index) => (
          <div className={styles.item} key={index}>
            
            <div className={styles.line}></div>

            <IoMdCheckmarkCircleOutline className={styles.icon} />

            <span>{servico}</span>

          </div>
        ))}
      </div>
    </section>
  );
}