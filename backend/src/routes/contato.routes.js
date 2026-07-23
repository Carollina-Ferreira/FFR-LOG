const router = require("express").Router();

// Controller
const controller = require("../controllers/contato.controller");

// Middlewares
const sanitize = require("../middlewares/sanitize");
const validate = require("../middlewares/validate");

// Validator
const schema = require("../validators/contato.validator");

// Criar contato
router.post(
    "/",
    sanitize,
    validate(schema),
    controller.criar
);

// Listar contatos
router.get(
    "/",
    controller.listar
);

module.exports = router;