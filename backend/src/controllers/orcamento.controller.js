const orcamentoService = require("../services/orcamento.service");


// Criar orçamento
async function criar(req, res, next) {

    try {

        const orcamento = await orcamentoService.criarOrcamento(req.body);

        return res.status(201).json({

            success: true,

            message: "Orçamento enviado com sucesso.",

            data: orcamento

        });

    } catch (error) {

        next(error);

    }

}


// Listar orçamentos
async function listar(req, res, next) {

    try {

        const orcamentos = await orcamentoService.listarOrcamentos();

        return res.status(200).json({

            success: true,

            total: orcamentos.length,

            data: orcamentos

        });

    } catch (error) {

        next(error);

    }

}


module.exports = {

    criar,

    listar

};