import styles from "./style.module.css";

import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaTruck,
    FaMapMarkerAlt,
    FaClipboardList,
    FaClock,
    FaHandshake,
    FaHeadset,
    FaShieldAlt,
    FaWhatsapp
} from "react-icons/fa";

import { enviarOrcamento } from "../../services/orcamento.service";


export default function OrcamentoForm() {


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

            nome: form.nome.value,

            email: form.email.value,

            telefone: form.telefone.value,

            tipoTransporte: form.tipoTransporte.value,

            origemColeta: form.origemColeta.value,

            destinoEntrega: form.destinoEntrega.value,

            detalhesEntrega: form.detalhesEntrega.value

        };

        try {

            await enviarOrcamento(dados);

            alert("Orçamento enviado com sucesso!");

            form.reset();

        } catch (error: any) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Erro ao enviar orçamento."
            );

        }

    }



    return (
        <section className={styles.section}>

            <div className={`${styles.container} container`}>



                {/* ================= CARD ESQUERDO ================= */}

                <div className={styles.formCard}>


                    <h2>Dados do orçamento</h2>

                    <div className={styles.lineRed}></div>



                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >


                        <div className={styles.inputGroup}>
                            <FaUser />

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
                            <FaEnvelope />

                            <input
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                required
                            />
                        </div>



                        <div className={styles.inputGroup}>
                            <FaPhone />

                            <input
                                name="telefone"
                                type="tel"
                                placeholder="Telefone / WhatsApp"
                                required
                                maxLength={11}
                                inputMode="numeric"
                                onInput={(e) => {
                                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                                }}
                            />

                        </div>




                        <label>Tipo de transporte</label>


                        <div className={styles.inputGroup}>

                            <FaTruck />


                            <select
                                name="tipoTransporte"
                                required
                            >
                                <option value="">
                                    Selecione
                                </option>

                                <option value="MOTO">
                                    Moto
                                </option>

                                <option value="FIORINO">
                                    Fiorino
                                </option>

                                <option value="VAN">
                                    Van
                                </option>

                            </select>

                        </div>




                        <label>Origem da coleta</label>


                        <div className={styles.inputGroup}>

                            <FaMapMarkerAlt />


                            <input
                                name="origemColeta"
                                type="text"
                                placeholder="Endereço completo de coleta"
                                required
                            />

                        </div>




                        <label>Destino da entrega</label>


                        <div className={styles.inputGroup}>


                            <FaMapMarkerAlt />


                            <input
                                name="destinoEntrega"
                                type="text"
                                placeholder="Endereço completo de entrega"
                                required
                            />


                        </div>





                        <label>
                            Detalhes da entrega
                        </label>


                        <div className={styles.inputGroup}>


                            <FaClipboardList
                                className={styles.textIcon}
                            />


                            <textarea
                                name="detalhesEntrega"
                                required
                                placeholder="Descreva o que precisa ser entregue, peso, dimensões, observações, etc."
                            />


                        </div>





                        <button type="submit">

                            SOLICITAR ORÇAMENTO

                        </button>




                    </form>


                </div>





                {/* ================= CARD DIREITO ================= */}


                <div className={styles.infoCard}>


                    <div className={styles.infoContent}>


                        <h2>
                            Informações importantes
                        </h2>


                        <div className={styles.lineRed}></div>



                        <div className={styles.infoItem}>

                            <FaClock />

                            <div>

                                <h4>
                                    Orçamento rápido
                                </h4>

                                <p>
                                    Retornamos seu orçamento o mais rápido possível.
                                </p>

                            </div>

                        </div>




                        <div className={styles.infoItem}>

                            <FaHandshake />

                            <div>

                                <h4>
                                    Sem compromisso
                                </h4>

                                <p>
                                    Solicite sem compromisso. É gratuito.
                                </p>

                            </div>

                        </div>




                        <div className={styles.infoItem}>

                            <FaHeadset />

                            <div>

                                <h4>
                                    Atendimento personalizado
                                </h4>

                                <p>
                                    Nossa equipe está pronta para atender.
                                </p>

                            </div>

                        </div>




                        <div className={styles.infoItem}>

                            <FaShieldAlt />

                            <div>

                                <h4>
                                    Segurança garantida
                                </h4>

                                <p>
                                    Sua carga é tratada com responsabilidade.
                                </p>

                            </div>

                        </div>



                    </div>





                    <div className={styles.contactBox}>


                        <h3>
                            Precisa de ajuda?
                        </h3>


                        <p>
                            Fale conosco agora mesmo!
                        </p>




                        <div className={styles.contact}>

                            <div className={styles.contactIcon}>

                                <FaWhatsapp />

                            </div>


                            <div className={styles.contactInfo}>

                                <h5>
                                    WhatsApp
                                </h5>

                                <span>
                                    (11) 99944-7775
                                </span>

                            </div>


                        </div>




                        <div className={styles.contact}>


                            <div className={styles.contactIcon}>

                                <FaPhone />

                            </div>


                            <div className={styles.contactInfo}>

                                <h5>
                                    Telefone
                                </h5>

                                <span>
                                    (11) 99944-7775
                                </span>


                            </div>


                        </div>





                        <div className={styles.contact}>


                            <div className={styles.contactIcon}>

                                <FaEnvelope />

                            </div>



                            <div className={styles.contactInfo}>


                                <h5>
                                    E-mail
                                </h5>


                                <span>
                                    ffrmotoexpress@gmail.com
                                </span>


                            </div>


                        </div>




                    </div>



                </div>



            </div>


        </section>
    );
}