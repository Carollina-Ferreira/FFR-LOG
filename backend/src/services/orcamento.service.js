const prisma = require("../config/prisma");

const enviarEmail = require("./email.service");
const enviarWhatsApp = require("./whatsapp.service");


async function criarOrcamento(data) {

    const {

        nome,

        email,

        telefone,

        tipoTransporte,

        origemColeta,

        enderecoColeta,

        destinoEntrega,

        enderecoEntrega,

        detalhesEntrega

    } = data;


    // ==========================================
    // SALVAR NO BANCO
    // ==========================================

    const orcamento = await prisma.orcamento.create({

        data: {

            nome,

            email,

            telefone,

            tipoTransporte,

            origemColeta,

            enderecoColeta,

            destinoEntrega,

            enderecoEntrega,

            detalhesEntrega

        }

    });


    // ==========================================
    // ENVIO DE EMAIL
    // NÃO BLOQUEIA O ORÇAMENTO
    // ==========================================

    enviarEmail({

        tipo: "Orçamento",

        nome,

        email,

        telefone,

        tipoTransporte,

        origemColeta,

        destinoEntrega,

        detalhesEntrega

    })

        .then(() => {

            console.log("✅ Email enviado com sucesso.");

        })

        .catch((error) => {

            console.log(
                "❌ Erro email:",
                error.message
            );

        });


    // ==========================================
    // ENVIO DE WHATSAPP
    // NÃO BLOQUEIA O ORÇAMENTO
    // ==========================================

    enviarWhatsApp({

        tipo: "Orçamento",

        nome,

        email,

        telefone,

        tipoTransporte,

        origemColeta,

        destinoEntrega,

        detalhesEntrega

    })

        .then(() => {

            console.log("✅ WhatsApp enviado com sucesso.");

        })

        .catch((error) => {

            console.log(
                "❌ Erro WhatsApp:",
                error.message
            );

        });


    // ==========================================
    // RETORNA IMEDIATAMENTE
    // ==========================================

    return orcamento;

}



async function listarOrcamentos() {

    return await prisma.orcamento.findMany({

        orderBy: {

            createdAt: "desc"

        }

    });

}



module.exports = {

    criarOrcamento,

    listarOrcamentos

};