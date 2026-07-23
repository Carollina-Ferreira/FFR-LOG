function whatsappMessage(dados){

    return `
🚚 *Novo orçamento FFR LOG*

👤 Nome: ${dados.nome}

📞 Telefone:
${dados.telefone}

📧 Email:
${dados.email}

🏢 Empresa:
${dados.empresa || "Não informado"}

📝 Mensagem:
${dados.mensagem}
`;

}


module.exports = whatsappMessage;