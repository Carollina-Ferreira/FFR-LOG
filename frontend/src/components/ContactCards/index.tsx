import styles from "./style.module.css";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

import { enviarContato } from "../../services/contato.service";

import zap from "../../assets/images/whatszap 1.png";
import tel from "../../assets/images/telefone 1.png";
import mail from "../../assets/images/mail 1.png";
import local from "../../assets/images/localizacao 1.png";

import cadeado from "../../assets/images/cadeado.png";
import chats from "../../assets/images/chats.png";
import check from "../../assets/images/check.png";
import raio from "../../assets/images/raio.png";

export default function Cards() {

    const [enviando, setEnviando] = useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        const form = e.currentTarget;

        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }

        const dados = {

            nome: form.nome.value.trim(),

            email: form.email.value.trim(),

            telefone: form.telefone.value,

            necessidade: form.necessidade.value.trim()

        };

        try {

            setEnviando(true);

            await enviarContato(dados);

            alert("Mensagem enviada com sucesso!");

            form.reset();

        } catch (error: any) {

            console.error(error);

            alert(
                error.response?.data?.message ??
                "Erro ao enviar mensagem."
            );

        } finally {

            setEnviando(false);

        }

    }

    return (
        <section className={styles.cards}>

            <div className={styles.cardsWrapper}>

                {/* CARD ESQUERDO */}
                <div className={styles.cardLeft}>

                    <h3>Fale com a FFR LOG</h3>

                    <div className={styles.lineRed}></div>

                    <p>
                        Preencha o formulário ou utilize nossos canais de atendimento.
                    </p>

                    <div className={styles.contactItem}>
                        <img src={zap} className={styles.info} alt="WhatsApp" />
                        <div>
                            <h4>WhatsApp</h4>
                            <h5>(11) 99944-7775</h5>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <img src={tel} className={styles.info} alt="Telefone" />
                        <div>
                            <h4>Telefone</h4>
                            <h5>(11) 99944-7775</h5>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <img src={mail} className={styles.info} alt="Email" />
                        <div>
                            <h4>E-mail</h4>
                            <h5>ffrmotoexpress@gmail.com</h5>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <img src={local} className={styles.info} alt="Endereço" />
                        <div>
                            <h4>Endereço</h4>
                            <h5>São Paulo - SP</h5>
                        </div>
                    </div>

                    <div className={styles.cardBlue}>

                        <div className={styles.blueRow}>

                            <div className={styles.blueCol}>
                                <img src={raio} className={styles.imgBlue} alt="" />
                                <h6>Resposta rápida</h6>
                            </div>

                            <div className={styles.dividerVertical}></div>

                            <div className={styles.blueCol}>
                                <img src={cadeado} className={styles.imgBlue} alt="" />
                                <h6>Atendimento Seguro</h6>
                            </div>

                            <div className={styles.dividerVertical}></div>

                            <div className={styles.blueCol}>
                                <img src={chats} className={styles.imgBlue} alt="" />
                                <h6>Suporte dedicado</h6>
                            </div>

                            <div className={styles.dividerVertical}></div>

                            <div className={styles.blueCol}>
                                <img src={check} className={styles.imgBlue} alt="" />
                                <h6>Solução personalizada</h6>
                            </div>

                        </div>

                    </div>

                </div>

                {/* CARD DIREITO */}

                <div className={styles.cardRight}>

                    <h3>Envie sua mensagem</h3>

                    <div className={styles.lineRed}></div>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >

                        <div className={styles.inputGroup}>

                            <FaUser className={styles.icon} />

                            <input
                                name="nome"
                                type="text"
                                placeholder="Nome completo"
                                required
                                pattern="[A-Za-zÀ-ÿ\s]+"
                                title="Digite apenas letras."
                            />

                        </div>

                        <div className={styles.inputGroup}>

                            <FaEnvelope className={styles.icon} />

                            <input
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                required
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                                title="Digite um e-mail válido. Ex: joao@email.com"
                            />

                        </div>

                        <div className={styles.inputGroup}>

                            <FaPhone className={styles.icon} />

                            <input
                                name="telefone"
                                type="tel"
                                placeholder="Telefone"
                                required
                                maxLength={11}
                                inputMode="numeric"
                                onInput={(e) => {
                                    e.currentTarget.value =
                                        e.currentTarget.value.replace(/\D/g, "");
                                }}
                            />

                        </div>

                        <div className={styles.inputGroup}>

                            <FaCommentDots className={styles.iconTextarea} />

                            <textarea
                                name="necessidade"
                                placeholder="Qual a sua necessidade?"
                                required
                                minLength={10}
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={enviando}
                        >

                            {enviando
                                ? "ENVIANDO..."
                                : "ENVIAR"}

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}