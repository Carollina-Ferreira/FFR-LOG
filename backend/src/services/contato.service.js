const prisma = require("../config/prisma");

const enviarEmail = require("./email.service");
const enviarWhatsApp = require("./whatsapp.service");


async function criarContato(data) {

    const contato = await prisma.contato.create({
        data
    });


    try {

        await enviarEmail({

            tipo: "Contato",

            ...data

        });

    } catch(error) {

        console.log("Erro email:", error.message);

    }


    try {

        await enviarWhatsApp({

            tipo: "Contato",

            ...data

        });

    } catch(error) {

        console.log("Erro WhatsApp:", error.message);

    }


    return contato;

}


async function listarContatos() {

    return await prisma.contato.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });

}


module.exports = {
    criarContato,
    listarContatos
};