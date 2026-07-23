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


    // Envia email
    try {

        await enviarEmail({

            tipo: "Orçamento",

            nome,

            email,

            telefone,

            tipoTransporte,

            origemColeta,

            destinoEntrega,

            detalhesEntrega

        });

    } catch (error) {

        console.log("Erro email:", error.message);

    }


    // Envia WhatsApp
    try {

        await enviarWhatsApp({

            tipo: "Orçamento",

            nome,

            email,

            telefone,

            tipoTransporte,

            origemColeta,

            destinoEntrega,

            detalhesEntrega

        });

    } catch (error) {

        console.log("Erro WhatsApp:", error.message);

    }


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