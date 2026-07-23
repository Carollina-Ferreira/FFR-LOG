const Joi = require("joi");

const contatoSchema = Joi.object({

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

    necessidade: Joi.string()
        .trim()
        .min(5)
        .max(1000)
        .required()
        .messages({
            "string.empty": "Informe sua necessidade.",
            "string.min": "Descreva melhor sua necessidade.",
            "string.max": "A descrição é muito grande.",
            "any.required": "A necessidade é obrigatória."
        })

});

module.exports = contatoSchema;