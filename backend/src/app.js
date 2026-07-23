const express = require("express");
const compression = require("compression");

const cors = require("./config/cors");
const helmet = require("./middlewares/helmet");
const logger = require("./middlewares/logger");
const limiter = require("./middlewares/limiter");

const orcamentoRoutes = require("./routes/orcamento.routes");
const contatoRoutes = require("./routes/contato.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(helmet);
app.use(compression());
app.use(logger);
app.use(cors);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}));

app.use(limiter);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API FFR LOG funcionando 🚚"
    });
});

app.use("/orcamentos", orcamentoRoutes);
app.use("/contatos", contatoRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Rota não encontrada."
    });
});

app.use(errorHandler);

module.exports = app;