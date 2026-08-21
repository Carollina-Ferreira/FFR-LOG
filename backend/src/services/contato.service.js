const prisma = require("../config/prisma");

const enviarEmail = require("./email.service");
const enviarWhatsApp = require("./whatsapp.service");


async function criarContato(data) {

    // ==========================================
    // SALVAR NO BANCO
    // ==========================================

    const contato = await prisma.contato.create({
        data
    });


    // ==========================================
    // ENVIO DE EMAIL
    // NÃO BLOQUEIA O CONTATO
    // ==========================================

    enviarEmail({

        tipo: "Contato",

        ...data

    })

        .then(() => {

            console.log("✅ Email de contato enviado com sucesso.");

        })

        .catch((error) => {

            console.log(
                "❌ Erro email de contato:",
                error.message
            );

        });


    // ==========================================
    // ENVIO DE WHATSAPP
    // NÃO BLOQUEIA O CONTATO
    // ==========================================

    enviarWhatsApp({

        tipo: "Contato",

        ...data

    })

        .then(() => {

            console.log("✅ WhatsApp de contato enviado com sucesso.");

        })

        .catch((error) => {

            console.log(
                "❌ Erro WhatsApp de contato:",
                error.message
            );

        });


    // ==========================================
    // RETORNA IMEDIATAMENTE
    // ==========================================

    return contato;

}



async function listarContatos() {

    return await prisma.contato.findMany({

        orderBy: {

            createdAt: "desc"

        }

    });

}



module.exports = {

    criarContato,

    listarContatos

};