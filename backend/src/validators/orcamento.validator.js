const Joi = require("joi");

const orcamentoSchema = Joi.object({

    nome: Joi.string()
        .trim()
        .pattern(/^[A-Za-zÀ-ÿ\s]+$/)
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "O nome é obrigatório.",
            "string.pattern.base": "O nome deve conter apenas letras.",
            "string.min": "O nome deve ter pelo menos 3 caracteres.",
            "string.max": "O nome deve ter no máximo 100 caracteres.",
            "any.required": "O nome é obrigatório."
        }),

    email: Joi.string()
        .trim()
        .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .max(150)
        .required()
        .messages({
            "string.empty": "O e-mail é obrigatório.",
            "string.pattern.base": "Informe um e-mail válido.",
            "string.max": "O e-mail é muito grande.",
            "any.required": "O e-mail é obrigatório."
        }),

    telefone: Joi.string()
        .pattern(/^[0-9]{10,11}$/)
        .required()
        .messages({
            "string.empty": "O telefone é obrigatório.",
            "string.pattern.base": "Informe um telefone válido com DDD.",
            "any.required": "O telefone é obrigatório."
        }),

    tipoTransporte: Joi.string()
        .valid("MOTO", "FIORINO", "VAN")
        .required()
        .messages({
            "any.only": "Selecione um tipo de transporte válido.",
            "any.required": "O tipo de transporte é obrigatório."
        }),

    origemColeta: Joi.string()
        .trim()
        .min(3)
        .max(150)
        .required()
        .messages({
            "string.empty": "Informe a origem da coleta.",
            "string.min": "A origem é muito curta.",
            "string.max": "A origem é muito grande.",
            "any.required": "A origem da coleta é obrigatória."
        }),

    destinoEntrega: Joi.string()
        .trim()
        .min(3)
        .max(150)
        .required()
        .messages({
            "string.empty": "Informe o destino da entrega.",
            "string.min": "O destino é muito curto.",
            "string.max": "O destino é muito grande.",
            "any.required": "O destino da entrega é obrigatório."
        }),

    detalhesEntrega: Joi.string()
        .trim()
        .min(5)
        .max(1000)
        .required()
        .messages({
            "string.empty": "Descreva a entrega.",
            "string.min": "Descreva melhor a entrega.",
            "string.max": "A descrição é muito grande.",
            "any.required": "Os detalhes da entrega são obrigatórios."
        })

});

module.exports = orcamentoSchema;