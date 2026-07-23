import styles from "./style.module.css";

import {
  HiOutlineDocumentText,
  HiOutlineShoppingBag,
} from "react-icons/hi";

import { FiPackage } from "react-icons/fi";

import { TbTool } from "react-icons/tb";

import { LuTruck } from "react-icons/lu";

export default function TiposCarga() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* ESQUERDA */}

        <div className={styles.left}>

          <h2>Tipos de carga</h2>

          <div className={styles.line}></div>

          <p>
            Transportamos diferentes tipos de cargas
            com o máximo de cuidado e responsabilidade.
          </p>

        </div>
        
        {/* DIREITA */}

        <div className={styles.right}>

          <div className={styles.item}>
            <HiOutlineDocumentText className={styles.icon} />

            <span>
              Documentos
              <br />
              e malotes
            </span>
          </div>

          <div className={styles.item}>
            <FiPackage className={styles.icon} />

            <span>
              Pequenos
              <br />
              pacotes
            </span>
          </div>

          <div className={styles.item}>
            <HiOutlineShoppingBag className={styles.icon} />

            <span>
              Compras e
              <br />
              mercadorias
            </span>
          </div>

          <div className={styles.item}>
            <TbTool className={styles.icon} />

            <span>
              Equipamentos
              <br />
              e materiais
            </span>
          </div>

          <div className={styles.item}>
            <LuTruck className={styles.icon} />

            <span>
              Cargas
              <br />
              fracionadas
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}