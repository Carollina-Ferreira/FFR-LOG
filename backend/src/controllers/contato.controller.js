const contatoService = require("../services/contato.service");


// Criar contato
async function criar(req, res, next) {

    try {

        const contato = await contatoService.criarContato(req.body);

        return res.status(201).json({

            success: true,

            message: "Contato enviado com sucesso.",

            data: contato

        });

    } catch (error) {

        next(error);

    }

}


// Listar contatos
async function listar(req, res, next) {

    try {

        const contatos = await contatoService.listarContatos();

        return res.status(200).json({

            success: true,

            total: contatos.length,

            data: contatos

        });

    } catch (error) {

        next(error);

    }

}


module.exports = {

    criar,

    listar

};