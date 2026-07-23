import styles from "./style.module.css";

import {
  FaBolt,
  FaShieldAlt,
  FaRoute,
  FaHandshake,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBolt />,
    title: "Agilidade",
    text: "Entregas rápidas e eficientes, com foco no que realmente importa: o seu tempo.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Segurança",
    text: "Cuidamos de cada entrega como se fosse nossa, com total responsabilidade.",
  },
  {
    icon: <FaRoute />,
    title: "Eficiência",
    text: "Rotas inteligentes e equipe preparada para garantir as melhores soluções.",
  },
  {
    icon: <FaHandshake />,
    title: "Confiança",
    text: "Relacionamento transparente e atendimento humano, sempre que você precisar.",
  },
];

export default function Diferenciais() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>

            <div className={styles.icon}>
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>

          </div>
        ))}
      </div>

    </section>
  );
}