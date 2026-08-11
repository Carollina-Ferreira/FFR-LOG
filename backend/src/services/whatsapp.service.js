const axios = require("axios");

async function enviarWhatsApp(dados) {
    try {

        const mensagem = `
🚨 NOVO ORÇAMENTO — FFR LOG

👤 DADOS DO CLIENTE
Nome: ${dados.nome || "Não informado"}
E-mail: ${dados.email || "Não informado"}
Telefone: ${dados.telefone || "Não informado"}

📦 DADOS DO ORÇAMENTO
Tipo de transporte: ${dados.tipoTransporte || "Não informado"}
Serviço: ${dados.servico || "Não informado"}
Origem: ${dados.origemColeta|| "Não informado"}
Destino: ${dados.destinoEntrega || "Não informado"}

📝 OBSERVAÇÕES
${dados.mensagem || dados.detalhesEntrega || "Nenhuma observação"}

────────────────────
FFR LOG
Solicitação recebida pelo site.
        `.trim();

        const resposta = await axios.post(
            `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_ID}/messages`,

            {
                messaging_product: "whatsapp",

                to: process.env.WHATSAPP_DESTINO,

                type: "text",

                text: {
                    body: mensagem
                }
            },

            {
                headers: {
                    Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("WhatsApp enviado com sucesso!");
        console.log(resposta.data);

    } catch (erro) {

        console.error("ERRO AO ENVIAR WHATSAPP:");

        if (erro.response) {
            console.error("Status:", erro.response.status);
            console.error("Resposta da Meta:", erro.response.data);
        } else {
            console.error(erro.message);
        }

        throw erro;
    }
}

module.exports = enviarWhatsApp;

