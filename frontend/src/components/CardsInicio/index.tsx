import styles from "./style.module.css";
import {
  FaShieldAlt,
  FaHandshake,
  FaBolt,
  FaStar,
} from "react-icons/fa";

const diferenciais = [
  {
    icon: <FaShieldAlt />,
    title: "Segurança",
    description:
      "Transporte realizado com responsabilidade e cuidado em cada etapa.",
  },
  {
    icon: <FaHandshake />,
    title: "Atendimento",
    description:
      "Suporte próximo e personalizado para atender cada necessidade.",
  },
  {
    icon: <FaBolt />,
    title: "Express",
    description:
      "Coletas e entregas rápidas para quem não pode esperar.",
  },
  {
    icon: <FaStar />,
    title: "Confiança",
    description:
      "Compromisso, transparência e pontualidade em todos os serviços.",
  },
];

export default function Diferenciais() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Nossos Diferenciais</h2>
        <p>
          Compromisso, agilidade e segurança para oferecer a melhor
          experiência em cada entrega.
        </p>
      </div>

      <div className={styles.grid}>
        {diferenciais.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>
              {item.icon}
            </div>

            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}