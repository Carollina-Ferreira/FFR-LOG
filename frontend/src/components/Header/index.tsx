import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

import logo from "../../assets/images/Logo-FFR-LOG-2 (2).png";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className={styles.header}>

            <div className={styles.container}>

                <img
                    src={logo}
                    alt="FFR LOG"
                    className={styles.logo}
                />


                <nav 
                    className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
                >

                    <Link 
                        onClick={() => setMenuOpen(false)} 
                        to="/"
                    >
                        Início
                    </Link>


                    <Link 
                        onClick={() => setMenuOpen(false)} 
                        to="/empresa"
                    >
                        Empresa
                    </Link>


                    <Link 
                        onClick={() => setMenuOpen(false)} 
                        to="/transportes"
                    >
                        Transportes
                    </Link>


                    <Link 
                        onClick={() => setMenuOpen(false)} 
                        to="/contato"
                    >
                        Contato
                    </Link>

                </nav>


                <Link 
                    to="/orcamento" 
                    className={styles.budgetButton}
                >
                    Orçamento
                </Link>


                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>


            </div>

        </header>

    );

}