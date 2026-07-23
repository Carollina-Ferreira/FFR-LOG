const router = require("express").Router();

// Controller
const controller = require("../controllers/orcamento.controller");

// Middlewares
const sanitize = require("../middlewares/sanitize");
const validate = require("../middlewares/validate");

// Validator
const schema = require("../validators/orcamento.validator");

// Criar orçamento
router.post(
    "/",
    sanitize,
    validate(schema),
    controller.criar
);

// Listar orçamentos
router.get(
    "/",
    controller.listar
);

module.exports = router;