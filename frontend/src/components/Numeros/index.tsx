import styles from "./style.module.css";

import {
    FaCalendarAlt,
    FaUsers,
    FaBoxOpen,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaCalendarAlt />,
        number: "+8",
        title: "anos de experiência",
        text: "no mercado de entregas",
    },
    {
        icon: <FaUsers />,
        number: "+50",
        title: "clientes atendidos",
        text: "com satisfação e confiança",
    },
    {
        icon: <FaBoxOpen />,
        number: "+500",
        title: "entregas realizadas",
        text: "com sucesso durante o mês",
    },
];

export default function Estatisticas() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {stats.map((item, index) => (
                    <div className={styles.card} key={index}>

                        <div className={styles.icon}>
                            {item.icon}
                        </div>

                        <div className={styles.info}>

                            <h2>{item.number}</h2>

                            <p className={styles.title}>
                                {item.title}
                            </p>

                            <p className={styles.text}>
                                {item.text}
                            </p>

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}