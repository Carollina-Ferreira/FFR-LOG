const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


async function enviarEmail(dados) {

    await transporter.sendMail({

        from: `"FFR LOG" <${process.env.EMAIL_USER}>`,

        to: process.env.EMAIL_DESTINO,

        subject: `Novo ${dados.tipo} recebido - FFR LOG 🚚`,

       html: `

    <h2>Novo ${dados.tipo} recebido 🚚</h2>

    <p><strong>Nome:</strong> ${dados.nome}</p>

    <p><strong>Email:</strong> ${dados.email}</p>

    <p><strong>Telefone:</strong> ${dados.telefone}</p>

    <hr>

    ${
        dados.tipo === "Contato"

        ?

        `

        <p>
            <strong>Mensagem:</strong><br>
            ${dados.necessidade || "Não informado"}
        </p>

        `

        :

        `

        <p><strong>Tipo de transporte:</strong> ${dados.tipoTransporte || "Não informado"}</p>

        <p><strong>Origem da coleta:</strong> ${dados.origemColeta || "Não informado"}</p>

        <p><strong>Destino da entrega:</strong> ${dados.destinoEntrega || "Não informado"}</p>

        <p>
            <strong>Detalhes da entrega:</strong><br>
            ${dados.detalhesEntrega || "Não informado"}
        </p>

        `

    }

`

    });

}


module.exports = enviarEmail;