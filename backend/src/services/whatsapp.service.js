const axios = require("axios");
const whatsappMessage = require("../utils/whatsappMessage");


async function enviarWhatsApp(dados){

    const mensagem = whatsappMessage(dados);


    await axios.post(
        `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_ID}/messages`,

        {
            messaging_product: "whatsapp",

            to: process.env.WHATSAPP_DESTINO,

            type: "text",

            text:{
                body: mensagem
            }
        },

        {
            headers:{
                Authorization:`Bearer ${process.env.WHATSAPP_TOKEN}`,
                "Content-Type":"application/json"
            }
        }
    );

}


module.exports = enviarWhatsApp;